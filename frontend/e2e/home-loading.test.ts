import assert from 'node:assert/strict';
import {after,before,describe,it} from 'node:test';
import type {Browser} from 'playwright-core';
import {expectBody,launch,requiredEnv,VIEWPORTS} from './harness.ts';

describe('首页加载结构',()=>{
 let browser:Browser;
 before(async()=>{browser=await launch()});
 after(async()=>{await browser?.close()});
 it('显式性能取证区分首张卡片与封面解码，输出不含请求参数',{timeout:60000},async()=>{
  const context=await browser.newContext({viewport:{width:1280,height:900}});
  try{
   const page=await context.newPage();
   // 演示库有一部刻意无图的未整理视频；固定已有条目的顺序，首卡才有可解码的本地封面。
   await page.goto(requiredEnv('PEACH_E2E_ORIGIN')+'/?measure=1&sort=seed&seed=1',{waitUntil:'domcontentloaded'});
   try{
    await page.waitForFunction(()=>{
     const text=document.getElementById('peach-performance')?.textContent;
     return text&&JSON.parse(text).firstCoverDecodedMs!==null;
    });
   }catch(error){
    const diagnostic=await page.evaluate(()=>({
     report:JSON.parse(document.getElementById('peach-performance')?.textContent||'null'),
     viewport:{width:innerWidth,height:innerHeight},
     cards:[...document.querySelectorAll<HTMLElement>('#grid [data-media-card]')].slice(0,6).map(card=>({
      rect:card.getBoundingClientRect().toJSON(),visibility:getComputedStyle(card).visibility,
      titleReady:!!card.querySelector('[data-media-title]')?.textContent?.trim(),
      openDisabled:card.querySelector<HTMLButtonElement>('[data-media-open]')?.disabled,
      images:[...card.querySelectorAll<HTMLImageElement>('[data-media-pic] img')].map(img=>({
       hasCurrentSource:!!img.currentSrc,
       complete:img.complete,naturalWidth:img.naturalWidth,naturalHeight:img.naturalHeight,
       loading:img.loading,connected:img.isConnected,
      })),
     })),
    })).catch(()=>null);
    throw new Error(`首卡封面解码未完成：${JSON.stringify(diagnostic)}`,{cause:error});
   }
   const report=JSON.parse((await page.locator('#peach-performance').textContent())!);
   assert.ok(report.firstCardReadyMs>=0);
   assert.ok(report.firstCoverDecodedMs>=report.firstCardReadyMs);
   assert.ok(report.visibleCards>0);
   assert.ok(report.resources.some((entry:{path:string})=>entry.path==='/api/items'));
   assert.ok(report.resources.every((entry:{path:string})=>!entry.path.includes('?')));
  }finally{await context.close()}
 });
 for(const viewport of VIEWPORTS)for(const hasFeed of [true,false]){
  it(`${viewport.name} 新作区 ${hasFeed?'有内容':'为空'}`,{timeout:60000},async()=>{
   const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height}});
   let release:()=>void=()=>{},releaseItems:()=>void=()=>{};
   try{
    await context.addInitScript(({hasFeed})=>{
     localStorage.setItem('peach.settings.v1',JSON.stringify({detailAutoplay:false,homeLayout:hasFeed?'big':'small'}));
     localStorage.setItem('peach.home-feed.v1',hasFeed?'1':'0');
     const seen=new WeakSet<Element>();
     (window as any).__catalogSkeletons=0;
     (window as any).__catalogRatios=[];
     new MutationObserver(()=>{document.querySelectorAll('#grid .catalog-skeleton').forEach(node=>{
      if(node.closest('[data-content-skeleton][aria-hidden="true"]')||getComputedStyle(node).visibility==='hidden')return;
      if(!seen.has(node)){seen.add(node);(window as any).__catalogSkeletons++;
       (window as any).__catalogRatios.push(Number((node.querySelector('[style]') as HTMLElement)?.style.getPropertyValue('--skeleton-card-ratio')))}
     });
      if(!(window as any).__firstCard){
       const card=document.querySelector('#grid [data-media-card]');
       if(card){(window as any).__firstCard=card;(window as any).__firstTier=document.querySelector('[data-catalog-tier]')}
      }
     }).observe(document,{childList:true,subtree:true,attributes:true,attributeFilter:['class','style','hidden']});
    },{hasFeed});
    const page=await context.newPage();
    const problems:string[]=[];
    page.on('pageerror',error=>problems.push(error.message));
    page.on('console',message=>{if(message.type()==='error')problems.push(message.text())});
    page.setDefaultTimeout(8000);
    const scopes:string[]=[];
    const itemsHeld=new Promise<void>(resolve=>{releaseItems=resolve});
    await page.route(/\/api\/items\?/,async route=>{await itemsHeld;await route.continue()});
    await page.route('**/api/sources',route=>route.fulfill({json:{ok:true,sources:[{location:'local',online:true},{location:'115',online:false}]}}));
    await page.route(/\/api\/facets\?/,async route=>{
     scopes.push(new URL(route.request().url()).searchParams.get('loc')||'');
     await route.continue();
    });
    await page.route(/\/api\/tops\?/,async route=>{
     const first=!(Number(new URL(route.request().url()).searchParams.get('page'))>0);
     await route.fulfill({json:{performers:first?[{id:90001,k:'示例演员',n:1,has_image:false,has_avatar:false}]:[],studios:[]}});
    });
    await page.route('**/api/entity/shapes',async route=>{
     const response=await route.fetch(),data=await response.json();
     await route.fulfill({json:{...data,home:{feed:hasFeed}}});
    });
    await page.route('**/api/settings',async route=>{
     if(route.request().method()!=='GET'){await route.continue();return}
     await new Promise(resolve=>setTimeout(resolve,650));
     await route.fulfill({json:{sidebarOrder:['','jav','follow','performers','tags','studios','flagged','manage']}});
    });
    const held=new Promise<void>(resolve=>{release=resolve});
    await page.route(/\/api\/feeds\/discoveries\?/,async route=>{
     await held;
     await route.fulfill({json:{ok:true,items:hasFeed?[{id:1,code:'EXM-001',title:'示例新作',has_cover:false}]:[]}});
    });
    await page.goto(requiredEnv('PEACH_E2E_ORIGIN')+'/',{waitUntil:'load'});
    await page.locator('#grid .catalog-skeleton').waitFor({state:'visible'});
    releaseItems();
    const card=page.locator('#grid [data-media-card]').first();
    await expectBody(page,'首页目录',[card],problems);
    await page.waitForTimeout(1100);
    const before=(await card.boundingBox())!;
    const first=await card.elementHandle();
    const tiers=await page.locator('[data-catalog-tier]').first().elementHandle();
    assert.equal(await page.locator('#feedNew .feednewskeleton').count()>0,hasFeed);
    if(hasFeed){
     assert.equal(await page.locator('#feedNew .feednewrow').evaluate(node=>getComputedStyle(node).scrollbarWidth),'none','新作骨架不显示原生横向滚动条');
     assert.equal(await page.locator('#feedNew > .ovtrack.ov-x:visible').count(),0,'新作骨架不显示外层横向轨道');
     const colors=await page.locator('#feedNew .feednewskeleton .pic').first().evaluate(node=>{
      const probe=document.createElement('i');probe.style.background='var(--hover)';node.append(probe);
      const expected=getComputedStyle(probe).backgroundColor,actual=getComputedStyle(node).backgroundColor;
      probe.remove();return {expected,actual};
     });
     assert.equal(colors.actual,colors.expected,'骨架圆角底色与占位层一致');
    }
    assert.equal(await page.evaluate(()=>(window as any).__catalogSkeletons),1,'目录骨架只展示一轮');
    assert.deepEqual(await page.evaluate(()=>(window as any).__catalogRatios),[hasFeed?3/4:16/9]);
    release();
    if(hasFeed)await page.locator('#feedNew [data-feed-id]').first().waitFor({state:'visible'});
    await page.waitForTimeout(1400);
    const after=(await card.boundingBox())!;
    assert.ok(Math.abs(after.y-before.y)<=1,`新作加载影响网格位置：${before.y} → ${after.y}`);
    assert.equal(await first!.evaluate(node=>node.isConnected),true);
    assert.equal(await tiers!.evaluate(node=>node.isConnected),true);
    assert.equal(await page.evaluate(()=>(window as any).__firstCard?.isConnected&&(window as any).__firstTier?.isConnected),true);
    assert.equal(await page.locator('#feedNew [data-skeleton]').count(),0);
    assert.equal(await page.locator('#feedNew').getAttribute('aria-label'),'未入库的新作');
    assert.ok(scopes.length>0);
    assert.deepEqual([...new Set(scopes)],['local,115'],'来源离线不隐藏已编目的馆藏');
   }finally{release();releaseItems();await context.close()}
  });
 }
});

describe('馆藏首屏独立于可选请求',()=>{
 let browser:Browser;
 before(async()=>{browser=await launch()});
 after(async()=>{await browser?.close()});
 for(const viewport of VIEWPORTS){
  it(`${viewport.name} 可选请求未返回时可打开真实卡片，失败后原位重试`,{timeout:60000},async()=>{
   const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height}});
   let release:()=>void=()=>{};
   const held=new Promise<void>(resolve=>{release=resolve});
   try{
    await context.addInitScript(()=>{
     localStorage.setItem('peach.settings.v1',JSON.stringify({detailAutoplay:false,homeLayout:'small',defaultSort:'new',sortDefaultsVersion:3,searchHistoryLimit:0}));
     localStorage.setItem('peach-censor','1');
     localStorage.setItem('peach.home-feed.v1','0');
    });
    const page=await context.newPage();
    const requested=new Set<string>(),itemQueries:string[]=[];
    let released=false,reads=0;
    await page.route(/\/api\/(settings|sources|entity\/shapes)$/,async route=>{
     const endpoint=new URL(route.request().url()).pathname;
     if(route.request().method()!=='GET'){await route.continue();return}
     requested.add(endpoint);await held;
     if(endpoint==='/api/sources')await route.fulfill({json:{sources:[{location:'local',online:true},{location:'115',online:false}]}});
     else if(endpoint==='/api/entity/shapes')await route.fulfill({json:{entities:[],home:{feed:true}}});
     else await route.fulfill({json:{searchHistoryLimit:0}});
    });
    await page.route(/\/api\/feeds\/discoveries\?/,async route=>{
     await held;
     await route.fulfill({json:{items:[{id:90001,code:'EXM-001',title:'晚到的新作',has_cover:false}]}});
    });
    await page.route(/\/api\/items\?/,async route=>{
     reads++;
     if(reads===1){await route.fulfill({status:503,json:{error:'读取暂时不可用'}});return}
     itemQueries.push(route.request().url());
     await route.continue();
    });
    const started=Date.now();
    await page.goto(requiredEnv('PEACH_E2E_ORIGIN')+'/',{waitUntil:'domcontentloaded'});
    await page.locator('#grid').getByRole('button',{name:'立即重试',exact:true}).click();
    const card=page.locator('#grid [data-media-card]').first();
    await card.waitFor({state:'visible'});
    assert.equal(released,false,'可选接口仍被挂起时主列表已可用');
    assert.equal(new URL(itemQueries[0]!).searchParams.get('sort'),'new');
    assert.equal(new URL(itemQueries[0]!).searchParams.get('loc'),'local,115');
    assert.equal(await page.locator('body.censor').count(),1,'先恢复用户的画面遮挡');
    const image=page.locator('#grid [data-media-sections] > [data-media-grid] > [data-media-card] [data-media-art] img').first();
    await image.waitFor({state:'attached'});
    assert.equal(await image.getAttribute('loading'),'eager');
    assert.equal(await image.getAttribute('fetchpriority'),'high');
    await image.evaluate(img=>(img as HTMLImageElement).decode());
    const firstId=await card.getAttribute('data-id');
    console.info(JSON.stringify({viewport:viewport.name,firstUsableCardMs:Date.now()-started,optionalRequestsPending:[...requested],includesInlineRetry:true}));
    await card.locator('[data-media-pic]').click();
    await page.waitForURL(/\/assets\/\d+/);
    await page.locator('#stage [data-stage-close]').waitFor({state:'visible'});
    assert.equal(released,false,'打开详情也不等待可选接口');
    await page.goBack();
    await card.waitFor({state:'visible'});
    await page.waitForTimeout(350);
    assert.equal(await card.getAttribute('data-id'),firstId,'返回后保留所浏览的内容');
    const before=(await card.boundingBox())!;
    released=true;release();
    await page.waitForTimeout(500);
    const after=(await card.boundingBox())!;
    assert.ok(Math.abs(before.y-after.y)<=1,`晚到的来源和新作提示不推移馆藏：${before.y} → ${after.y}`);
    assert.equal(await page.locator('#feedNew:visible').count(),0,'本次未预留的新作行在下一次进页显示');
    assert.ok(reads>=2);
   }finally{release();await context.close()}
  });
 }
});
