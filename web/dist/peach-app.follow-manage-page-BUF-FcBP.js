(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bc82269e-b29a-4e56-a008-4513d0c13776", e._sentryDebugIdIdentifier = "sentry-dbid-bc82269e-b29a-4e56-a008-4513d0c13776");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $76d00c5a4edb230a$export$76ccd210b9029917 as n, $76d00c5a4edb230a$export$816b5d811295e6bc as r, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as i, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as a, $76d00c5a4edb230a$export$f850895b287ef28e as o, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as s, $b4f18e3395fe64d7$export$3e41faf802a29e71 as c, $b4f18e3395fe64d7$export$b2539bed5023c21c as l, $ea3928288112382f$export$439d29a4e110a164 as u, $l as d, Button as f, ButtonLink as p, Bx as m, Checkbox as h, ChevronSortDown as g, Chip as _, DataTableFooter as v, DataTableFrame as ee, DataTableSort as y, EmptyFocusButton as b, EmptyState as te, ErrorText as ne, ExternalLink as x, FEEDS_KEY as re, FOLLOW_CREDENTIALS_KEY as S, FOLLOW_MANAGE_KEY as ie, FOLLOW_MANAGE_NAV as C, FOLLOW_RESOLVE_KEY as w, FieldLabel as T, Help as E, Input as D, LoadingDots as O, M6 as k, MENU_ITEM as A, MENU_ITEM_INTERACTIVE as j, MENU_POPOVER_SURFACE as M, ModalFrame as N, Note as P, P7 as F, SORT_DEFAULT_DIR as I, STAT_STRIP_SIX as L, SelectionDock as R, SelectionPopover as z, SiteLabel as B, Switch as V, Table as H, TableColumnControls as ae, TableColumnResizer as oe, TableSelectionHeader as se, TagManager as U, TaskProgress as ce, Wt as le, Xf as ue, __toESM as W, addAlias as G, addSource as K, avatarInner as de, busyProps as q, cardClass as fe, checkFeeds as pe, columnVisibilityFeature as J, confirmModal as me, createColumnHelper as he, credentialDone as ge, cx as _e, dZ as ve, errorHeadline as ye, errorMessage as Y, feedIntervalText as be, fetchCredentials as X, fetchFeeds as xe, fetchFollow as Se, fetchResolveJob as Ce, fetchSuggestions as we, flexRender as Te, followFeedByName as Ee, followSuggestKey as De, groupByAuthor as Oe, isBroken as ke, isLayout as Ae, keepSelected as je, localTime as Me, lookupFeedActor as Ne, mapLimit as Pe, pageSizeOf as Fe, pageWindow as Ie, pv as Le, queryClient as Re, reloadFollowManage as ze, removeAlias as Be, removeFeed as Ve, renameAliasGroup as He, require_jsx_runtime as Ue, require_react as We, resolveFollowSort as Ge, rowPaginationFeature as Ke, rowSelectionFeature as qe, rowSortingFeature as Je, setFeedEnabled as Ye, startCheck as Xe, startResolve as Ze, tableFeatures as Qe, useAction as $e, useBackgroundJob as et, useMutation as tt, useQuery as nt, useTable as rt, useTablePreferences as it } from "./peach-app.js";
import { Page as at } from "./peach-app.page-QAncjzM1.js";
import { PillAriaTabList as ot } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
import { AuthorAvatar as st, SourceIcon as ct } from "./peach-app.source-view-DalWfDkm.js";
import { createPaginatedRowModel as lt } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as ut, useTableSelection as dt } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { LEGACY_AVATAR_IMG as ft } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { SourceList as pt } from "./peach-app.source-list-BUNw-ejj.js";
// src/react/follow-manage/add-source.tsx
var Z = /* @__PURE__ */ W(We(), 1), Q = Ue(), mt = _e(A, j, "text-body-2-medium"), ht = "粘贴来源链接，或输入创作者名、id…", gt = "添加创作者关注", _t = "查找中（首次按名字查要下载创作者索引，可能几十秒）", vt = "识别中", yt = "站内没有查到来源", bt = "/settings/subscriptions", xt = (e, t) => `${e}:${t.url}`;
function St({ field: e, menu: n, options: r, active: i, busy: a, onPick: o, onClose: s }) {
	return (0, Z.useEffect)(() => {
		n.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [n, i]), /* @__PURE__ */ (0, Q.jsxs)(t, {
		ref: n,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": "来源建议",
		className: _e(M, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !r.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Q.jsx)(O, { label: "正在查找建议" })
		}) : null, r.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [e.group === r[t - 1]?.group ? null : /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Q.jsxs)("button", {
			type: "button",
			"aria-current": t === i ? "true" : void 0,
			className: t === i ? _e(mt, "bg-background-secondary-default") : mt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function Ct({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ (0, Q.jsx)(z, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: d,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)(ct, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: "全选",
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: "全不选",
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider_label)))
			},
			{
				label: "凭据设置",
				href: bt
			}
		]
	});
}
function wt({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Q.jsx)(P, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: fe({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = xt(t, e);
				return /* @__PURE__ */ (0, Q.jsx)(h, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(ct, { provider: e.provider }),
							/* @__PURE__ */ (0, Q.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, Q.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "已经关注" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Q.jsx)(E, { children: yt }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Q.jsx)(x, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Q.jsx)(E, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function Tt({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(""), [p, m] = (0, Z.useState)(!1), [h, g] = (0, Z.useState)(null), [_, v] = (0, Z.useState)(-1), ee = (0, Z.useRef)(null), y = (0, Z.useRef)(null), [b, te] = (0, Z.useState)(/* @__PURE__ */ new Set()), [ne, x] = (0, Z.useState)(/* @__PURE__ */ new Set()), [re, S] = (0, Z.useState)(""), [ie, C] = (0, Z.useState)(0);
	(0, Z.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let E = nt({
		queryKey: De(u),
		queryFn: ({ signal: e }) => we(u, e),
		enabled: u.length > 0 && p && !o && h !== i
	}), O = (0, Z.useMemo)(() => (E.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [E.data]), { job: k, running: A, outcome: j, start: M, dismiss: N } = et({
		queryKey: w,
		queryFn: ({ signal: e }) => Ce(e),
		start: (e) => Ze([e]),
		onStarted: () => x(/* @__PURE__ */ new Set()),
		onError: (e) => S(Y(e)),
		onFinish: (e) => {
			e.status === "failed" && S(e.error || "查找失败");
		}
	}), F = (e) => {
		let t = e.trim();
		!t || n || o || A || M.isPending || (S(""), v(-1), l(t), a(t), d(""), g(t), M.mutate(t));
	}, I = E.isFetching, L = p && !o && h !== i && (O.length > 0 || I), R = () => {
		v(-1), g(i);
	}, z = (e) => {
		if (!(o || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229)) {
			if (e.key === "Escape" && L) R();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!O.length) return;
				if (e.preventDefault(), !L) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? O.length - 1 : n >= O.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), F(O[_]?.value || i));
		}
	}, B = j?.results || [], V = B.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !b.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: xt(t, e)
	})).filter((e) => !ne.has(e.key))), H = tt({
		mutationFn: async (e) => {
			let t = [], n = [];
			C(0);
			for (let r of e) {
				try {
					let e = await K(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${Y(e)}`);
				}
				C((e) => e + 1);
			}
			if (n.length) try {
				await Xe(n);
			} catch (e) {
				t.push(Y(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			ze(), e.failures.length ? S(e.failures.join("；")) : (S(""), N(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => S(Y(e))
	}), ae = e.suggestions || [], oe = !c.includes("/");
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": gt,
		className: fe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: gt
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						ref: ee,
						className: "min-w-64 grow",
						onFocus: () => m(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !y.current?.contains(t) && m(!1);
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(D, {
							"aria-label": "来源链接、名字或 id",
							placeholder: ht,
							value: i,
							leadingIcon: Le,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), v(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: z
						}), L ? /* @__PURE__ */ (0, Q.jsx)(St, {
							field: ee,
							menu: y,
							options: O,
							active: _,
							busy: I,
							onPick: F,
							onClose: R
						}) : null]
					}),
					/* @__PURE__ */ (0, Q.jsx)(Ct, {
						credentials: t,
						hidden: b,
						onHidden: te
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "primary",
						disabled: n || !i.trim(),
						...q(A || M.isPending),
						onClick: () => F(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [A || M.isPending ? /* @__PURE__ */ (0, Q.jsx)(ce, {
					embedded: !0,
					label: k?.message || (k?.total ? `查找中：${k.checked || 0}/${k.total}` : oe ? _t : vt),
					value: k?.checked,
					total: k?.total
				}) : null, re ? /* @__PURE__ */ (0, Q.jsx)(P, {
					tone: "error",
					title: "这一次没有完成",
					children: re
				}) : null]
			}),
			B.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(T, { children: "查找结果" }),
					B.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(wt, {
						row: e,
						at: t,
						hidden: b,
						unpicked: ne,
						onPick: (e, t) => {
							let n = new Set(ne);
							t ? n.delete(e) : n.add(e), x(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(f, {
								variant: "secondary",
								size: "small",
								onClick: () => N(),
								children: "关闭"
							}),
							/* @__PURE__ */ (0, Q.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: n || !V.length,
								...q(H.isPending),
								onClick: () => H.mutate(V),
								children: `添加选中（${V.length}）`
							}),
							H.isPending ? /* @__PURE__ */ (0, Q.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${ie}/${V.length}`
							}) : null
						]
					})
				]
			}) : null,
			ae.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), ae.map((e) => /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `浏览历史里出现 ${e.visits} 次${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => F(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Et = "输入女优名，到 JavDB 找她的演员页", Dt = "添加 JAV 订阅";
function Ot(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: `所勾的卡分属数据库里不同的人：${[...n.values()].join("、")}，先去合并再订`,
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: `会登记到「${r}」名下`,
		blocked: !1
	} : e.known ? {
		text: `会登记到数据库里的「${e.known.name}」名下`,
		blocked: !1
	} : {
		text: `数据库里还没有「${e.q}」，会新建一位`,
		blocked: !1
	};
}
function kt({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(h, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ (0, Q.jsx)(_, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Q.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `已在「${e.held_by.name}」名下`
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsx)(x, {
			href: e.url,
			children: e.id
		})]
	});
}
function At({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Z.useState)(""), [a, o] = (0, Z.useState)(null), [s, c] = (0, Z.useState)(/* @__PURE__ */ new Set()), l = $e(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => Ne(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), u());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, m = () => {
		a && l.run("follow", (e) => Ee(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), p(), n();
		});
	}, h = a ? Ot(a, s) : null;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": Dt,
		className: fe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Dt
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Q.jsx)(D, {
						"aria-label": "女优名",
						placeholder: Et,
						value: r,
						leadingIcon: Le,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "primary",
					disabled: e || !r.trim(),
					...q(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(T, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(kt, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Q.jsx)(E, { children: "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(E, {
						role: "status",
						children: s.size ? h.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							onClick: p,
							children: "关闭"
						}), a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "primary",
							size: "small",
							disabled: e || !s.size || h.blocked,
							...q(l.busy === "follow"),
							onClick: m,
							children: `添加订阅（${s.size}）`
						}) : null]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function jt({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(N, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ (0, Q.jsx)(Mt, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function Mt({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, Z.useState)(t.canonical_name), o = $e();
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => He(t.canonical_key, i.trim(), e), () => {
				ze(), r(`已把统一名称改为 ${i.trim()}`), n();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(e, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "修改统一名称"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["当前名称：", t.canonical_name]
			}),
			/* @__PURE__ */ (0, Q.jsx)(D, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(T, { children: "选择已有别名" }), /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: t.aliases.map((e) => /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "原名称保留为别名，关联档案和作品署名会同步更新。"
			}),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					onClick: n,
					children: "取消"
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === t.canonical_name,
					...q(!!o.busy),
					children: "修改统一名称"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var Nt = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, Pt = Qe({
	rowSelectionFeature: qe,
	rowSortingFeature: Je,
	rowPaginationFeature: Ke,
	columnVisibilityFeature: J,
	sortedRowModel: ut(),
	paginatedRowModel: lt()
}), Ft = Pt, It = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Lt = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, Rt = [
	It,
	Lt,
	{
		id: "alias",
		label: "平台别名",
		width: 240
	},
	{
		id: "evidence",
		label: "依据",
		width: 320
	},
	{
		id: "actions",
		label: "操作",
		width: 112
	}
], zt = [
	It,
	Lt,
	{
		id: "aliases",
		label: "平台别名",
		width: 400
	},
	{
		id: "actions",
		label: "操作",
		width: 184,
		min: 168
	}
], Bt = (e) => e.alias;
function Vt(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Ht({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(st, {
			group: Vt(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Q.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Ut({ groups: e, suggestions: t, sources: s = [], readOnly: c, toast: l }) {
	let u = it("alias-suggestions", Rt), d = it("alias-saved", zt), [p, m] = (0, Z.useState)(null), [_, x] = (0, Z.useState)({}), [re, S] = (0, Z.useState)({}), ie = dt(() => x({})), C = dt(() => S({})), [w, E] = (0, Z.useState)([]), [O, k] = (0, Z.useState)([]), [A, j] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [M, N] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), P = {
		...A,
		pageIndex: Math.min(A.pageIndex, Math.max(0, Math.ceil(t.length / A.pageSize) - 1))
	}, I = {
		...M,
		pageIndex: Math.min(M.pageIndex, Math.max(0, Math.ceil(e.length / M.pageSize) - 1))
	}, [L, z] = (0, Z.useState)(""), [B, V] = (0, Z.useState)(""), [U, ce] = (0, Z.useState)(""), le = tt({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await G(n.canonical, n.alias);
				} catch (n) {
					throw t && ze(), Error(`${Y(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			z(""), x({}), ze(), l(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => z(Y(e))
	}), W = tt({
		mutationFn: (e) => G(e.canonical, e.alias),
		onSuccess: () => {
			z(""), V(""), ce(""), ze(), l("已保存创作者别名");
		},
		onError: (e) => z(Y(e))
	}), K = tt({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await Be(e), n += 1;
			} catch (e) {
				throw Error(`${Y(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				ze();
			}
		},
		onSuccess: () => {
			z(""), S({}), l("已移除创作者别名");
		},
		onError: (e) => z(Y(e))
	}), de = (e, t) => {
		e.length && me({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => le.mutateAsync(e)
		});
	}, pe = (e) => void me({
		title: "移除创作者别名",
		body: Nt(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => K.mutateAsync(e)
	}), J = (0, Z.useRef)({
		sources: s,
		readOnly: c,
		merging: le.isPending,
		removing: K.isPending,
		merge: de,
		remove: pe,
		rename: m
	});
	J.current = {
		sources: s,
		readOnly: c,
		merging: le.isPending,
		removing: K.isPending,
		merge: de,
		remove: pe,
		rename: m
	};
	let ge = (0, Z.useMemo)(() => {
		let e = he();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(se, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(h, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ht, {
					sources: J.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "平台别名",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "依据",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: J.current.readOnly,
					...q(J.current.merging),
					onClick: () => J.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), _e = (0, Z.useMemo)(() => {
		let e = he();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Q.jsx)(se, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(h, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ht, {
					sources: J.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: F,
							"aria-label": `移除别名 ${e.name}`,
							disabled: J.current.readOnly,
							...q(J.current.removing),
							onClick: () => J.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: J.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => J.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), ve = rt({
		features: Pt,
		data: t,
		columns: ge,
		getRowId: Bt,
		state: {
			rowSelection: _,
			sorting: w,
			pagination: P,
			columnVisibility: u.visibility
		},
		onColumnVisibilityChange: u.change,
		onRowSelectionChange: (e) => {
			ie(), x(e);
		},
		onSortingChange: (e) => {
			E(e), j((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: j,
		enableRowSelection: !0
	}), ye = rt({
		features: Ft,
		data: e,
		columns: _e,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: re,
			sorting: O,
			pagination: I,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			C(), S(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			k(e), N((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: N
	}), be = ve.getSelectedRowModel().rows.map((e) => e.original), X = ye.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), xe = q(le.isPending);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: fe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "创作者别名"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(T, { children: "手动添加别名" }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(D, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: B,
							onChange: V,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(D, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: U,
							onChange: ce,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "primary",
							disabled: c || !B.trim() || !U.trim(),
							...q(W.isPending),
							onClick: () => W.mutate({
								canonical: B.trim(),
								alias: U.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			L ? /* @__PURE__ */ (0, Q.jsx)(ne, { children: L }) : null,
			t.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(T, { children: "待合并" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(f, {
									variant: "primary",
									size: "small",
									disabled: c,
									...xe,
									onClick: () => de(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ (0, Q.jsx)(y, {
									label: "待合并创作者别名",
									sorting: w,
									options: [
										{
											id: "canonical",
											label: "统一名称"
										},
										{
											id: "alias",
											label: "平台别名"
										},
										{
											id: "evidence",
											label: "依据"
										}
									],
									onChange: (e) => {
										E(e), j((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Q.jsx)(ae, {
									preferences: u,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(R, {
						label: "待合并别名批量操作",
						visible: be.length > 0,
						count: `已选 ${be.length} 组`,
						children: [/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...xe,
							onClick: () => de(be, !1),
							children: `合并所选（${be.length}）`
						}), /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => x({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(ee, {
						follow: !0,
						preferences: u,
						onRowClick: (e) => ve.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(H, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: w[0] ? {
								column: w[0].id,
								direction: w[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ve.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(o, { children: [ve.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...u.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Te(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(g, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(oe, {
									preferences: u,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(r, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: u.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(n, { children: ve.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: Te(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(v, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: P,
						onChange: j
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(T, { children: "已保存别名" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(y, {
								label: "已保存创作者别名",
								sorting: O,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									k(e), N((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Q.jsx)(ae, {
								preferences: d,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(R, {
						label: "已保存别名批量操作",
						visible: X.length > 0,
						count: `已选 ${X.length} 个别名`,
						children: [/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...q(K.isPending),
							onClick: () => void me({
								title: "移除所选创作者别名",
								body: `将移除以下 ${X.length} 个别名，对应来源恢复为独立创作者组。`,
								items: X,
								confirmLabel: "移除所选别名",
								onConfirm: () => K.mutateAsync(X)
							}),
							children: `移除所选别名（${X.length}）`
						}), /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => S({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ee, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => ye.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(H, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: O[0] ? {
								column: O[0].id,
								direction: O[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ye.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(o, { children: [ye.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Te(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(g, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(oe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(r, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(n, { children: ye.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: Te(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Q.jsx)(v, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: I,
						onChange: N
					})] }) : /* @__PURE__ */ (0, Q.jsx)(te, {
						size: "compact",
						icon: ue,
						title: "还没有保存创作者别名",
						actions: c ? void 0 : /* @__PURE__ */ (0, Q.jsx)(b, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(jt, {
				group: p,
				close: () => m(null),
				receipt: l
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Wt = Qe({
	rowPaginationFeature: Ke,
	rowSelectionFeature: qe,
	rowSortingFeature: Je,
	columnVisibilityFeature: J,
	sortedRowModel: ut(),
	paginatedRowModel: lt()
}), Gt = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, Kt = /* @__PURE__ */ new Set(["actions"]), qt = Object.entries(Gt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Jt = () => Re.invalidateQueries({
	queryKey: re,
	exact: !0
}), $ = (e) => e.name || e.url;
function Yt(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Xt({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Q.jsx)(_, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Q.jsx)(_, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ (0, Q.jsx)(_, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ (0, Q.jsx)(_, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function Zt({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${ft}`,
		dangerouslySetInnerHTML: { __html: de($(e), t, null, "performer") }
	});
}
var Qt = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function $t(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function en(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return me({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${$(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function tn({ readOnly: e, toast: t, onAdd: s, selection: c }) {
	let l = nt({
		queryKey: re,
		queryFn: ({ signal: e }) => xe(e)
	}), d = $e(), p = it("jav-feeds", qt), _ = l.data, b = (0, Z.useMemo)(() => _?.sources ?? [], [_]), [x, S] = (0, Z.useState)(/* @__PURE__ */ new Set()), ie = c?.ids ?? x, C = c?.onChange ?? S, [w, T] = (0, Z.useState)(1), [D, O] = (0, Z.useState)(20), [A, j] = (0, Z.useState)([]), M = Ie(b.length, D, w);
	(0, Z.useEffect)(() => {
		T((e) => Math.min(e, M.pages));
	}, [M.pages]), (0, Z.useEffect)(() => {
		C((e) => {
			let t = new Set(b.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [b, C]);
	let N = tt({
		mutationFn: async (e) => {
			let t = await Pe(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ve(t) : await Ye(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (C(/* @__PURE__ */ new Set()), Jt(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				d.setError(`${n.length} 条没有写入：${e.ok ? "" : Y(e.error)}`);
			}
		},
		onError: (e) => d.setError(Y(e))
	}), F = (0, Z.useMemo)(() => $t(b), [b]), I = (0, Z.useRef)({
		readOnly: e,
		shared: F,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	I.current = {
		readOnly: e,
		shared: F,
		busy: d.busy,
		toggle: (e, t) => void d.run(`enabled-${e.id}`, (n) => Ye(e.id, t, n), () => void Jt()),
		fetch: (e) => void d.run(`check-${e.id}`, (t) => pe(t, [e.id]), () => void Jt()),
		remove: (e) => void en([e], async () => {
			await Ve(e.id), t(`已移除订阅源「${$(e)}」`), Jt();
		})
	};
	let L = (0, Z.useMemo)(() => {
		let e = he(), t = (e) => () => Gt[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(se, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(h, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${$(e.row.original)}`
				})
			}),
			e.accessor($, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = Qt(e.row.original, I.current.shared);
					return /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Zt, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: `站上这一页挂在「${t}」名下`,
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => e.kind_label, {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "打开来源页面",
					className: "text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Q.jsx)(B, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : Yt(e.getValue()),
						label: Yt(e.getValue())
					}), /* @__PURE__ */ (0, Q.jsx)(le, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Xt, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: be(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? Me(e.row.original.last_fetched_at) : "还没拉过"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} 条`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(V, {
							"aria-label": `启用 ${$(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ve,
							"aria-label": `拉取 ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							...q(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: k,
							"aria-label": `移除 ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), z = (0, Z.useMemo)(() => Object.fromEntries([...ie].map((e) => [String(e), !0])), [ie]), U = rt({
		features: Wt,
		data: b,
		columns: L,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: z,
			sorting: A,
			pagination: {
				pageIndex: M.page - 1,
				pageSize: D
			},
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onSortingChange: (e) => {
			j(e), T(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			c?.onActivate();
			let t = typeof e == "function" ? e(z) : e;
			C(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!_) return l.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
		tone: "error",
		title: "打不开订阅源",
		children: Y(l.error)
	}) : /* @__PURE__ */ (0, Q.jsx)(E, { children: "正在读订阅源。" });
	let ce = () => void d.run("check", (e) => pe(e), () => void Jt()), ue = (e) => {
		c?.onActivate(), C((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, W = b.filter((e) => ie.has(e.id)), G = b.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-label": "JAV 订阅列表",
			className: fe({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV 订阅源"
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${b.length.toLocaleString()} 个订阅源 · ${(Number(_.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(f, {
								onClick: ce,
								disabled: e,
								...q(d.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ (0, Q.jsx)(ae, {
								preferences: p,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ (0, Q.jsx)(y, {
								label: "JAV 订阅源",
								sorting: A,
								onChange: (e) => {
									j(e), T(1);
								},
								options: [
									"name",
									"kind",
									"origin",
									"status",
									"interval",
									"fetched",
									"fresh"
								].map((e) => ({
									id: e,
									label: Gt[e]
								}))
							})
						]
					})]
				}),
				G.length || d.error ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [G.length ? /* @__PURE__ */ (0, Q.jsx)(P, {
						tone: "error",
						title: `${G.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: G.map((e) => /* @__PURE__ */ (0, Q.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${$(e)}：${ye(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, d.error ? /* @__PURE__ */ (0, Q.jsx)(ne, { children: d.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(R, {
					visible: W.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${W.length} 条订阅源`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(N.isPending),
							onClick: () => N.mutate({
								ids: W.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(N.isPending),
							onClick: () => N.mutate({
								ids: W.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "danger",
							size: "small",
							disabled: e,
							...q(N.isPending),
							onClick: () => void en(W, () => N.mutateAsync({
								ids: W.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => C(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				b.length ? /* @__PURE__ */ (0, Q.jsx)(ee, {
					follow: !0,
					preferences: p,
					onRowClick: (e) => ue(Number(e)),
					children: /* @__PURE__ */ (0, Q.jsxs)(H, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: A[0] ? {
							column: A[0].id,
							direction: A[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => U.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Q.jsxs)(o, { children: [U.getHeaderGroups()[0].headers.map((e) => {
							let t = Te(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Q.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [Kt.has(e.column.id) ? /* @__PURE__ */ (0, Q.jsx)(u, { children: t }) : /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(g, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(oe, {
									preferences: p,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Q.jsx)(r, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: p.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Q.jsx)(n, { children: U.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: Te(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(a, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Q.jsx)(te, {
					icon: m,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						onClick: s,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				b.length ? /* @__PURE__ */ (0, Q.jsx)(v, {
					label: "JAV 订阅",
					total: M.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: M.page - 1,
						pageSize: D
					},
					onChange: (e) => {
						O(e.pageSize), T(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${(Number(_.unread) || 0).toLocaleString()} · 已启用 ${b.filter((e) => e.enabled).length.toLocaleString()} / ${b.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var nn = (e) => C.some(([t]) => t === e);
function rn({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: fe({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, Q.jsxs)("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${n}`
			})]
		})]
	});
}
function an(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: u } = e, [d, f] = (0, Z.useState)(nn(e.tab) ? e.tab : "list"), [m, h] = (0, Z.useState)(Math.max(1, Math.floor(e.page) || 1)), [g, _] = (0, Z.useState)(() => Ge(e.sort, e.dir).sort), [v, ee] = (0, Z.useState)(() => Ge(e.sort, e.dir).dir), [y, b] = (0, Z.useState)(Ae(e.layout) ? e.layout : "default"), [te, ne] = (0, Z.useState)(Fe(e.pageSize)), [w, T] = (0, Z.useState)(/* @__PURE__ */ new Set()), [E, D] = (0, Z.useState)(/* @__PURE__ */ new Set()), O = nt({
		queryKey: ie,
		queryFn: ({ signal: e }) => Se(e)
	}), k = nt({
		queryKey: S,
		queryFn: ({ signal: e }) => X(e)
	}), A = nt({
		queryKey: re,
		queryFn: ({ signal: e }) => xe(e)
	}), j = O.data || { sources: [] }, M = k.data || {
		root: "",
		providers: []
	}, N = j.sources;
	(0, Z.useEffect)(() => {
		T((e) => {
			let t = je(e, N);
			return t.size === e.size ? e : t;
		});
	}, [N]);
	let F = (e) => {
		let n = e.sort ?? g, r = e.dir ?? v;
		t({
			tab: e.tab ?? d,
			page: e.page ?? m,
			sort: n === "checked" ? "" : n,
			dir: r === I[n] ? "" : r
		});
	}, R = Oe(N), z = N.filter(ke).length, B = N.filter((e) => e.enabled).length, V = (M.providers || []).filter((e) => e.requirement === "required" && !ge(e)).length, H = new Set((A.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Q.jsxs)(at, { children: [
		a ? /* @__PURE__ */ (0, Q.jsx)(P, {
			tone: "warning",
			title: "本机只能浏览",
			extra: u ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Q.jsx)(x, {
					href: u,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: L,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "关注创作者",
					figure: R.length,
					unit: "位"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "启用来源",
					figure: B,
					unit: `/ ${N.length}`
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "检查失败",
					figure: z,
					unit: "个来源"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "未看更新",
					figure: j.counts?.new || 0,
					unit: "条"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "JAV 订阅",
					figure: H,
					unit: "位"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "未看新作",
					figure: A.data?.unread || 0,
					unit: "条"
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)(l, {
			selectedKey: d,
			onSelectionChange: (e) => {
				let t = String(e);
				nn(t) && (T(/* @__PURE__ */ new Set()), D(/* @__PURE__ */ new Set()), f(t), F({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(ot, {
					"aria-label": "关注管理区域",
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: C.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(c, {
						id: e,
						"data-pill-selected": d === e ? "" : void 0,
						"data-pill-variant": "gray",
						className: "cursor-pointer whitespace-nowrap",
						children: t
					}, e))
				}),
				/* @__PURE__ */ (0, Q.jsxs)(s, {
					id: "list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Q.jsx)(tn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							f("add"), F({ tab: "add" });
						},
						selection: {
							ids: E,
							onChange: D,
							onActivate: () => T(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ (0, Q.jsx)(pt, {
						data: j,
						sort: g,
						dir: v,
						page: m,
						layout: y,
						pageSize: te,
						selected: w,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							f("add"), F({ tab: "add" });
						},
						onSort: (e, t) => {
							_(e), ee(t), h(1), F({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							h(e), F({ page: e });
						},
						onSelected: (e) => {
							T(e), D(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							b(e), h(1), n({ layout: e }), F({ page: 1 });
						},
						onPageSize: (e) => {
							ne(e), h(1), n({ pageSize: e }), F({ page: 1 });
						}
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)(s, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(Tt, {
							data: j,
							credentials: M,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ (0, Q.jsx)(At, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								A.refetch(), f("list"), F({ tab: "list" });
							}
						}),
						/* @__PURE__ */ (0, Q.jsx)(Ut, {
							groups: j.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: j.alias_suggestions || [],
							sources: j.sources
						})
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(s, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Q.jsx)(U, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsxs)(p, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", V ? `（${V}）` : ""]
		}) })
	] });
}
export { an as FollowManagePage };

//# debugId=bc82269e-b29a-4e56-a008-4513d0c13776