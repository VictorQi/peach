(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d3f61815-0dbb-405a-9f9d-96679803587e", e._sentryDebugIdIdentifier = "sentry-dbid-d3f61815-0dbb-405a-9f9d-96679803587e");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $72abaeab4d80592f$export$78efe591171d7d45 as n, $ea3928288112382f$export$439d29a4e110a164 as r, $f2ff30fde7b014be$export$3ddf2d174ce01153 as i, $fe21c36db05242bb$export$a98f0dcb43a68a25 as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ACCENTS as s, AILibrarySettings as c, ActivityStatus as l, AnimatedItems as u, AnimatedNumber as d, ApiError as f, Button as p, ButtonLink as m, CLOUD_LOCATIONS as h, CLOUD_PROXY_HELP as g, CONFIGURATION_KEY as _, CONFIGURATION_SECTIONS as v, CONFIGURATION_URL as y, CREDENTIAL_STATE as b, Cell as x, ChartBackground as S, ChartContainer as C, ChartLegend as w, ChartLegendContent as T, ChartTip as E, ChartTooltip as D, ChartTooltipContent as ee, Checkbox as O, Chip as k, CommandSteps as te, Curve as ne, DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME as re, DATA_ITEM_INDEX_ATTRIBUTE_NAME as ie, DataLabelColorsContextProvider as ae, DataLabelThemeContextProvider as oe, DefaultZIndexes as se, Disclosure as ce, EDITION_TONE as le, ENTRY_LINKS_HELP as ue, ENTRY_LINKS_HINT as de, EmptyState as fe, ErrorText as A, Eu as pe, EvilBarChart as me, ExternalLink as he, FOLLOW_CREDENTIALS_KEY as ge, FOLLOW_CREDENTIALS_KEY$1 as _e, FOLLOW_INITIAL_RANGE_OPTIONS as ve, Fact as j, FactList as ye, FieldLabel as be, FillObjectDefinition as xe, Footer as M, Help as N, Input as P, L1 as Se, LIBRARY_FOLDER_HELP as Ce, LIBRARY_PROCESSING_KEY as we, Label as Te, LabelList as Ee, LabelListFromLabelProp as De, Layer as Oe, LinkButton as ke, LoadingIndicator as Ae, M6 as je, MEDIA_PROCESSING_KEY as Me, MEDIA_PROCESSING_URL as Ne, MEDIA_SOURCE_ICONS as Pe, MENU_POPOVER_SURFACE as Fe, NavigationOrderRows as Ie, Note as F, PICK_FOLDER_URL as Le, POLICY_COLUMNS as Re, POLICY_COVER_NOTE as ze, POLICY_MATRIX as Be, POLICY_SUMMARY as Ve, PathLine as He, PolarLabelContextProvider as Ue, PolarLabelListContextProvider as We, ProcessingMode as Ge, Progress as Ke, REPAIR_CENTER_PATH as qe, RegisterGraphicalItemId as Je, Rows as I, SCHEDULES as Ye, SCRAPING_KEY as Xe, SCRAPING_SETTINGS_URL as Ze, SEGMENT as Qe, SEGMENTED_TRACK as $e, SETTINGS_KEY as et, SETTINGS_URL as tt, Section as L, SectionSkeleton as nt, SectionToc as rt, Sector as it, SegmentedRadioGroup as at, Select as ot, Select$1 as R, SelectItem as z, SetPolarGraphicalItem as st, SetPolarLegendPayload as ct, SetTooltipEntrySettings as lt, SettingsCard as ut, SettingsRow as B, Shape as dt, SiteLabel as ft, SortableBoardTabs as pt, SourceLabel as mt, SourceMark as ht, Stack as V, StatusLabel as gt, Switch as H, THUMBNAIL_JOBS_KEY as _t, TIP_SWATCH as vt, TaskCenterLink as yt, TaskProgress as bt, Text as xt, Textarea as St, Uz as Ct, ZIndexLayer as wt, __toESM as Tt, _p as Et, activityKind as Dt, adaptEventsOfChild as Ot, apiGet as U, apiSend as W, appSettingsStore as kt, applyLabelTheme as At, arrayTooltipSearcher as jt, bodyFieldErrors as Mt, boundedPreference as Nt, busyProps as G, cardClass as Pt, checkClientUpdates as Ft, cloudProxySkeleton as It, clsx as Lt, cn$1 as Rt, codedText as K, configurationDescriptionKey as zt, confirmModal as Bt, createSelector as Vt, credentialDone as Ht, credentialsSkeleton as Ut, cx as Wt, d6 as Gt, devicesSkeleton as Kt, editionName as qt, errorMessage as q, fetchConfiguration as Jt, fetchCredentials as Yt, fetchLibraryProcessing as Xt, fetchMediaProcessing as Zt, fetchSettings as Qt, fetchSources as $t, fetchThumbnailJobs as en, filledShapeLabelColors as tn, findAllByType as nn, fmtSize as rn, get as an, getActiveStyleOverrides as on, getClassNameFromUnknown as sn, getColorGraphicalItems as cn, getColorsCount as ln, getEntryFillId as un, getFillUrl as dn, getIndexedEntryFillObject as fn, getMaxRadius as pn, getOwnStyles as mn, getPercentValue as hn, getTooltipNameProp as gn, getValueByDataKey as _n, hasOwnColors as vn, i2 as yn, indexersSkeleton as bn, interfaceLanguage as xn, interpolate as Sn, isDataAttribute as Cn, isNumber as wn, isSvgElementPropKey as Tn, javBrowserSkeleton as En, jobText as Dn, joinList as On, l1 as kn, ledgerBackupsSkeleton as An, localizedFact as jn, matchAppend as Mn, mathSign as Nn, momentText as Pn, motion as Fn, overlayHost as In, peachHistory$1 as Ln, pickServerFolder as Rn, polarToCartesian as zn, pollUntil as Bn, previewLibraryColor as Vn, processingActive as Hn, providerIcon as Un, queryClient as Wn, randomId as Gn, readEntryFill as Kn, rememberShape as qn, require_jsx_runtime as Jn, require_react as Yn, require_react_dom as Xn, resolveDefaultProps as Zn, restartEffectText as Qn, saveCredential as $n, schedulePollInterval as er, sectionTitle as tr, selectActiveTooltipDataKey as nr, selectActiveTooltipGraphicalItemId as rr, selectActiveTooltipIndex as ir, selectChartDataAndAlwaysIgnoreIndexes as ar, selectChartOffsetInternal as or, serverLabel as sr, serverLabelList as cr, serverText as lr, settingsPath as ur, shellNavigate as dr, sourceDefaultCost as fr, splitFill as pr, stageText as mr, svgPropertiesNoEvents as hr, svgPropertiesNoEventsFromUnknown as gr, t as J, tone as _r, translateWithNodes as vr, useAction as Y, useAnimationCallbacks as yr, useAppSelector as br, useBackwardsCompatibleTheme as xr, useClientUpdates as Sr, useDataLabelThemeResolver as Cr, useIndexedLabelThemeResolver as wr, useLibraryTints as Tr, useMouseClickItemDispatch as Er, useMouseEnterItemDispatch as Dr, useMouseLeaveItemDispatch as Or, useMutation as kr, useOrderedLibraries as Ar, usePolarChartLayout as jr, useQuery as X, useQueryClient as Mr, useRunSchedule as Nr, useSaveSchedule as Pr, useSaveSettings as Fr, useSaveThumbnailMode as Ir, useThemeFillObjects as Lr, we as Rr, withoutColors as zr, z3 as Br } from "./peach-app.js";
import { useCheckReceipt as Vr } from "./peach-app.use-check-receipt-CVw_ZYdx.js";
import { ConnectionStatus as Hr } from "./peach-app.connection-status-BrXhLGSm.js";
import { CodeBlock as Ur } from "./peach-app.code-block-BdQewVJ0.js";
import { PolarChart as Wr, defaultPolarChartProps as Gr, selectUnfilteredPolarItems as Kr } from "./peach-app.PolarChart-CeCYLBHr.js";
import { FolderField as qr, FolderFieldLine as Jr, FolderRow as Yr, MEDIA_SOURCES as Xr, MediaReadPolicy as Zr, MediaReadPolicyHelp as Qr, SourceSelect as $r, isCloudSource as ei, sourceMark as ti, useFolderRows as ni } from "./peach-app.folder-rows-C3hhF_90.js";
import { BrowserIcon as ri, browserIconId as ii } from "./peach-app.browser-icon-N9Od-bAf.js";
import { SourceBrowserLoginButton as ai, SourceBrowserLoginStatus as oi, sourceBrowserLoginUrl as si, useSourceBrowserLogin as ci } from "./peach-app.source-browser-login-x7L-xBDi.js";
import { SourceIcon as li } from "./peach-app.source-view-D-Xir163.js";
// node_modules/recharts/es6/state/selectors/pieSelectors.js
function ui(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function di(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ui(Object(n), !0).forEach(function(t) {
			fi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ui(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function fi(e, t, n) {
	return (t = pi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pi(e) {
	var t = mi(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mi(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var hi = Vt([Kr, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), gi = [], _i = (e, t, n) => n?.length === 0 ? gi : n, vi = Vt([
	ar,
	hi,
	_i
], (e, t, n) => {
	var r = e.chartData;
	if (t != null) {
		var i = t?.data != null && t.data.length > 0 ? t.data : r;
		if (i && i.length || n == null || (i = n.map((e) => di(di({}, t.presentationProps), e.props))), i != null) return i;
	}
}), yi = Vt([
	vi,
	hi,
	_i
], (e, t, n) => {
	if (e != null && t != null) return e.map((e, r) => {
		var i, a = _n(e, t.nameKey, t.name), o = Kn(n == null || (i = n[r]) == null ? void 0 : i.props).color ?? Kn(e).color ?? t.fill;
		return {
			value: gn(a, t.dataKey),
			dataKey: t.dataKey,
			color: o,
			payload: e,
			type: t.legendType
		};
	});
}), bi = Vt([
	vi,
	hi,
	_i,
	or
], (e, t, n, r) => {
	if (t != null && e != null) return Qi({
		offset: r,
		pieSettings: t,
		displayedData: e,
		cells: n
	});
}), Z = /* @__PURE__ */ Tt(Yn()), xi = ["key"], Si = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], Ci = [
	"id",
	"graphicalItems",
	"explicitStyleProps",
	"pieFillObject"
], wi = ["id"];
function Ti() {
	return Ti = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ti.apply(null, arguments);
}
function Ei(e, t) {
	if (e == null) return {};
	var n, r, i = Di(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Di(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Oi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Oi(Object(n), !0).forEach(function(t) {
			ki(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ki(e, t, n) {
	return (t = Ai(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ai(e) {
	var t = ji(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ji(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Mi = /* @__PURE__ */ new Set([
	"cx",
	"cy",
	"r",
	"name"
]);
function Ni(e) {
	var t = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (n === "id" || Cn(n) || (!Tn(n) || Mi.has(n)) && (t[n] = e[n]));
	return t;
}
var Pi = it;
function Fi(e, t, n, r) {
	var i = n[t % n.length];
	if (i != null) {
		var a = typeof e == "object" && e ? Q(Q({}, e), {}, { fill: Kn(e).color }) : {}, o = Q(Q({}, mn(r)), mn(a)), s = vn(a) || vn(r);
		return {
			fill: s ? o.fill : i.fill,
			fillOpacity: o.fillOpacity ?? i.fillOpacity,
			stroke: s ? o.stroke : i.stroke,
			strokeOpacity: o.strokeOpacity ?? i.strokeOpacity,
			strokeWidth: o.strokeWidth ?? i.strokeWidth,
			strokeDasharray: o.strokeDasharray ?? i.strokeDasharray
		};
	}
}
function Ii(e) {
	return e.fill && e.fill !== "none" ? e.fill : e.stroke;
}
function Li(e, t, n, r) {
	var i = Fi(e.payload, t, n, r);
	return i == null ? e : Q(Q(Q({}, e), i), {}, { tooltipPayload: e.tooltipPayload?.map((e) => Q(Q({}, e), {}, {
		color: Ii(i),
		fill: i.fill
	})) });
}
function Ri(e) {
	var t = (0, Z.useMemo)(() => nn(e.children, x), [e.children]), n = Lr(), r = br((n) => yi(n, e.id, t));
	if (r == null) return null;
	var i = r.map((r, i) => {
		var a, o = Q(Q({}, r.payload), t == null || (a = t[i]) == null ? void 0 : a.props), s = fn(o, i, e.pieFillObject, n, vn(e.explicitStyleProps)), c = Fi(o, i, e.graphicalItems, e.explicitStyleProps);
		return c == null ? s == null ? r : Q(Q({}, r), {}, { fill: s }) : Q(Q({}, r), {}, {
			color: Ii(c),
			fill: s
		});
	});
	return /*#__PURE__*/ Z.createElement(ct, { legendPayload: i });
}
function zi(e) {
	if (e != null && typeof e != "boolean" && typeof e != "function") {
		if (/*#__PURE__*/ Z.isValidElement(e)) {
			var t = e.props?.fill;
			return typeof t == "string" ? t : void 0;
		}
		var n = e.fill;
		return typeof n == "string" ? n : void 0;
	}
}
var Bi = /*#__PURE__*/ Z.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = zi(e.activeShape), p = {
		dataDefinedOnItem: r.map((e) => {
			var t = e.tooltipPayload;
			return f == null || t == null ? t : t.map((e) => Q(Q({}, e), {}, {
				color: f,
				fill: f
			}));
		}),
		getPosition: (e) => r[Number(e)]?.tooltipPosition,
		settings: {
			stroke: i,
			strokeWidth: a,
			fill: o,
			dataKey: t,
			nameKey: n,
			name: gn(s, t),
			hide: c,
			type: l,
			color: o,
			unit: "",
			formatter: u,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ Z.createElement(lt, { tooltipEntrySettings: p });
}), Vi = (e, t) => e > t ? "start" : e < t ? "end" : "middle", Hi = (e, t, n) => hn(typeof t == "function" ? t(e) : t, n, n * .8), Ui = (e, t, n) => {
	var r = t.top, i = t.left, a = t.width, o = t.height, s = e.maxRadius ?? pn(a, o);
	return {
		cx: i + hn(e.cx, a, a / 2),
		cy: r + hn(e.cy, o, o / 2),
		innerRadius: hn(e.innerRadius, s, 0),
		outerRadius: Hi(n, e.outerRadius, s),
		maxRadius: e.maxRadius ?? Math.sqrt(a * a + o * o) / 2
	};
}, Wi = (e, t) => Nn(t - e) * Math.min(Math.abs(t - e), 360), Gi = (e, t) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	if (typeof e == "function") return e(t);
	var n = Lt("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
	t.key;
	var r = Ei(t, xi);
	return /*#__PURE__*/ Z.createElement(ne, Ti({}, r, {
		type: "linear",
		className: n
	}));
}, Ki = (e, t, n, r) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	var i = n;
	if (typeof e == "function" && (i = e(t), /*#__PURE__*/ Z.isValidElement(i))) return i;
	var a = Lt("recharts-pie-label-text", sn(e));
	return /*#__PURE__*/ Z.createElement(xt, Ti({}, t, {
		alignmentBaseline: "middle",
		className: a,
		background: r
	}), i);
};
function qi(e) {
	if (!(typeof e != "object" || !e || /*#__PURE__*/ Z.isValidElement(e) || "position" in e)) return e;
}
function Ji(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = Cr(), a = n.label, o = n.labelLine, s = n.dataKey;
	if (!r || !a || !t) return null;
	var c = hr(n), l = gr(a), u = qi(a), d = gr(o), f = typeof a == "object" && "offsetRadius" in a && typeof a.offsetRadius == "number" && a.offsetRadius || 20, p = t.map((e, t) => {
		var n = (e.startAngle + e.endAngle) / 2, r = zn(e.cx, e.cy, e.outerRadius + f, n), p = Ni(e), m = Q(Q(Q(Q({}, c), p), {}, {
			fill: e.fill,
			stroke: "none"
		}, l), {}, {
			index: t,
			textAnchor: Vi(r.x, e.cx)
		}, r), h = At(i?.(t), {
			fill: u?.fill,
			style: u?.style ?? m.style,
			background: u?.background
		}, m.fill), g = Q(Q({}, m), h), _ = Q(Q(Q(Q({}, c), p), {}, {
			fill: "none",
			stroke: e.fill
		}, d), {}, {
			index: t,
			points: [zn(e.cx, e.cy, e.outerRadius, n), r],
			key: "line"
		});
		return /*#__PURE__*/ Z.createElement(wt, {
			zIndex: se.label,
			key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
		}, /*#__PURE__*/ Z.createElement(Oe, null, o && Gi(o, _), Ki(a, g, _n(e.payload, s, e.value), h.background)));
	});
	return /*#__PURE__*/ Z.createElement(Oe, { className: "recharts-pie-labels" }, p);
}
function Yi(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ Z.createElement(De, { label: i }) : /*#__PURE__*/ Z.createElement(Ji, {
		sectors: t,
		props: n,
		showLabels: r
	});
}
function Xi(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, u = e.indexedActiveStyles, d = br(ir), f = br(nr), p = br(rr), m = i.onMouseEnter, h = i.onClick, g = i.onMouseLeave, _ = Ei(i, Si), v = Dr(m, i.dataKey, o), y = Or(g), b = Er(h, i.dataKey, o);
	return t == null || t.length === 0 ? null : /*#__PURE__*/ Z.createElement(Z.Fragment, null, t.map((e, m) => {
		if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1) return null;
		var h = p == null || p === o, g = String(m) === d && (f == null || i.dataKey === f) && h, x = d ? r : null, S, C = !1;
		g && n ? S = n === !0 ? a : n : x == null ? S = a : (S = x, C = !0);
		var w = Q(Q({}, e), {}, {
			fill: i.sectorPaintFills?.[m] ?? e.fill,
			stroke: e.stroke,
			tabIndex: -1,
			index: m,
			isActive: g,
			animationElapsedTime: s,
			isAnimating: c,
			isEntrance: l,
			[ie]: m,
			[re]: o
		}), T = g && !C ? on(S === Pi || S, u[m % u.length], e.payload) : void 0, E = T == null ? w : Q(Q({}, w), T);
		return /*#__PURE__*/ Z.createElement(Oe, Ti({
			key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${m}`,
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, Ot(_, e, m), {
			onMouseEnter: v(e, m),
			onMouseLeave: y(e, m),
			onClick: b(e, m)
		}), /*#__PURE__*/ Z.createElement(dt, {
			option: S,
			DefaultShape: Pi,
			shapeProps: E
		}));
	}));
}
function Zi(e) {
	return wn(e) && e !== 0;
}
function Qi(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = Wi(o, s), p = Math.abs(f), m = n.filter((e) => Zi(_n(e, c, 0))).length, h = m <= 1 ? 0 : t.paddingAngle ?? 0, g = n.findIndex((e) => Zi(_n(e, c, 0))), _ = (p >= 360 ? m : m - 1) * h, v = n.reduce((e, t) => {
		var n = _n(t, c, 0);
		return e + (wn(n) ? n : 0);
	}, 0), y = d > 0 && v > 0 && n.some((e) => {
		var t = _n(e, c, 0), n = (wn(t) ? t : 0) / v;
		return Zi(t) && n * p < d;
	}) ? d : 0, b = p - m * y - _, x;
	if (v > 0) {
		var S;
		x = n.map((e, n) => {
			var s = _n(e, c, 0), d = _n(e, l, n), p = Ui(t, i, e), m = (wn(s) ? s : 0) / v, _, x = Q(Q({}, e), r && r[n] && r[n].props), C = Q({}, x);
			delete C.id;
			var w = Kn(x), T = w.color ?? t.fill, E = n > 0 && n === g, D = Zi(s) && !E;
			_ = n ? S.endAngle + Nn(f) * h * +!!D : o;
			var ee = _ + Nn(f) * ((Zi(s) ? y : 0) + m * b), O = (_ + ee) / 2, k = (p.innerRadius + p.outerRadius) / 2, te = [{
				name: d,
				value: s,
				payload: x,
				dataKey: c,
				type: u,
				color: T,
				fill: T,
				graphicalItemId: t.id
			}], ne = zn(p.cx, p.cy, k, O);
			return S = Q(Q(Q(Q(Q({}, t.presentationProps), {}, {
				percent: m,
				cornerRadius: typeof a == "string" ? parseFloat(a) : a,
				name: d,
				tooltipPayload: te,
				midAngle: O,
				middleRadius: k,
				tooltipPosition: ne
			}, C), w.fillObject == null ? void 0 : { fill: T }), p), {}, {
				value: s,
				dataKey: c,
				startAngle: _,
				endAngle: ee,
				payload: x,
				paddingAngle: D ? Nn(f) * h : 0
			}), S;
		});
	}
	return x;
}
function $i(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = (0, Z.useMemo)(() => !t || !n ? [] : n.map((e) => ({
		value: e.value,
		payload: e.payload,
		clockWise: !1,
		parentViewBox: void 0,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	})), [n, t]);
	return /*#__PURE__*/ Z.createElement(We, { value: t ? i : void 0 }, r);
}
var ea = (e, t) => {
	if (e == null) return [];
	var n = [], r = e.find((e) => e.status !== "removed"), i = r ? r.next.startAngle : 0;
	return e.forEach((e, r) => {
		if (e.status !== "removed") {
			if (e.status === "matched") {
				var a = r > 0 ? Sn(an(e.prev, "paddingAngle", 0), an(e.next, "paddingAngle", 0), t) : 0, o = Sn(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t), s = Q(Q({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + o + a
				});
				n.push(s), i = s.endAngle;
			} else {
				var c = r > 0 ? an(e.next, "paddingAngle", 0) : 0, l = Sn(0, e.next.endAngle - e.next.startAngle, t), u = Q(Q({}, e.next), {}, {
					startAngle: i + c,
					endAngle: i + l + c
				});
				n.push(u), i = u.endAngle;
			}
		}
	}), n;
};
function ta(e) {
	var t = e.props, n = e.previousSectorsRef, r = e.id, i = e.graphicalItems, a = e.indexedActiveStyles, o = t.sectors, s = t.activeShape, c = t.inactiveShape, l = t.animationInterpolateFn, d = wr(i), f = yr(t.onAnimationStart, t.onAnimationEnd), p = f.isAnimating, m = f.handleAnimationStart, h = f.handleAnimationEnd, g = jr();
	if (g == null) return null;
	var _ = o[0];
	return /*#__PURE__*/ Z.createElement(oe, { value: d }, /*#__PURE__*/ Z.createElement(ae, { value: tn }, /*#__PURE__*/ Z.createElement($i, {
		showLabels: !p,
		sectors: o
	}, /*#__PURE__*/ Z.createElement(u, {
		animationInput: t,
		animationIdPrefix: "recharts-pie-",
		items: o,
		previousItemsRef: n,
		isAnimationActive: t.isAnimationActive,
		animationBegin: t.animationBegin,
		animationDuration: t.animationDuration,
		animationEasing: t.animationEasing,
		onAnimationStart: m,
		onAnimationEnd: h,
		animationInterpolateFn: l,
		animationMatchBy: t.animationMatchBy,
		layout: g
	}, (e, n, i) => /*#__PURE__*/ Z.createElement(Oe, null, /*#__PURE__*/ Z.createElement(Xi, {
		sectors: e,
		activeShape: s,
		inactiveShape: c,
		allOtherPieProps: t,
		shape: t.shape,
		id: r,
		indexedActiveStyles: a,
		animationElapsedTime: n,
		isAnimating: p || n < 1,
		isEntrance: i
	}))), /*#__PURE__*/ Z.createElement(Yi, {
		showLabels: !p,
		sectors: o,
		props: t
	}), /*#__PURE__*/ Z.createElement(Ue, {
		cx: _?.cx ?? 0,
		cy: _?.cy ?? 0,
		innerRadius: _?.innerRadius ?? 0,
		outerRadius: _?.outerRadius ?? 0,
		startAngle: t.startAngle,
		endAngle: t.endAngle,
		clockWise: !1
	}, t.children))));
}
var na = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: ea,
	animationMatchBy: Mn,
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: !1,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: !1,
	labelLine: !0,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
	shape: Pi,
	startAngle: 0,
	stroke: "#fff",
	zIndex: se.area
};
function ra(e) {
	var t = e.id, n = e.graphicalItems, r = e.explicitStyleProps, i = e.pieFillObject, a = Ei(e, Ci), o = e.hide, s = e.className, c = e.rootTabIndex, l = Lr(), u = (0, Z.useMemo)(() => nn(e.children, x), [e.children]), d = vn(r), f = (0, Z.useMemo)(() => n.map((e) => d ? zr(e.active) : e.active), [n, d]), p = br((e) => bi(e, t, u)), m = (0, Z.useRef)(null), h = Lt("recharts-pie", s);
	if (o || p == null) return m.current = null, /*#__PURE__*/ Z.createElement(Oe, {
		tabIndex: c,
		className: h
	});
	var g = p.map((e, t) => Li(e, t, n, r)), _ = g.map((e, t) => fn(e.payload, t, i, l, d)), v = _.map((e, n) => e == null ? void 0 : dn(un(t, n))), y = n.length > 0;
	return /*#__PURE__*/ Z.createElement(wt, { zIndex: e.zIndex }, /*#__PURE__*/ Z.createElement(Bi, {
		dataKey: e.dataKey,
		nameKey: e.nameKey,
		sectors: g,
		stroke: y ? r.stroke : e.stroke,
		strokeWidth: y ? r.strokeWidth : e.strokeWidth,
		fill: y ? r.fill : e.fill,
		name: e.name,
		hide: e.hide,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: t,
		activeShape: e.activeShape
	}), /*#__PURE__*/ Z.createElement(Oe, {
		tabIndex: c,
		className: h
	}, _.some((e) => e != null) && /*#__PURE__*/ Z.createElement("defs", null, _.map((e, n) => e == null ? null : /*#__PURE__*/ Z.createElement(xe, {
		key: n,
		id: un(t, n),
		fillObject: e,
		color: g[n]?.fill
	}))), /*#__PURE__*/ Z.createElement(ta, {
		props: Q(Q({}, a), {}, {
			sectors: g,
			sectorPaintFills: v
		}),
		previousSectorsRef: m,
		id: t,
		graphicalItems: n,
		indexedActiveStyles: f
	})));
}
function ia(e) {
	var t = pr(e.fill), n = t.color, r = t.fillObject, i = Q(Q({}, e), {}, { fill: n }), a = Zn(i, na), o = xr((e) => ({ graphicalItems: e.graphicalItems }), {}, void 0), s = {
		fill: i.fill,
		fillOpacity: i.fillOpacity,
		stroke: i.stroke,
		strokeOpacity: i.strokeOpacity,
		strokeWidth: i.strokeWidth,
		strokeDasharray: i.strokeDasharray
	}, c = a.id, l = Ei(a, wi), u = hr(l);
	return /*#__PURE__*/ Z.createElement(Je, {
		id: c,
		type: "pie"
	}, (e) => /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(st, {
		type: "pie",
		id: e,
		data: l.data,
		dataKey: l.dataKey,
		hide: l.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: l.name,
		nameKey: l.nameKey,
		tooltipType: l.tooltipType,
		legendType: l.legendType,
		fill: l.fill,
		cx: l.cx,
		cy: l.cy,
		startAngle: l.startAngle,
		endAngle: l.endAngle,
		paddingAngle: l.paddingAngle,
		minAngle: l.minAngle,
		innerRadius: l.innerRadius,
		outerRadius: l.outerRadius,
		cornerRadius: l.cornerRadius,
		presentationProps: u,
		maxRadius: a.maxRadius
	}), /*#__PURE__*/ Z.createElement(Ri, Ti({}, l, {
		id: e,
		graphicalItems: cn(o?.graphicalItems) ?? [],
		explicitStyleProps: s,
		pieFillObject: r
	})), /*#__PURE__*/ Z.createElement(ra, Ti({}, l, {
		id: e,
		graphicalItems: cn(o?.graphicalItems) ?? [],
		explicitStyleProps: s,
		pieFillObject: r
	}))));
}
var aa = ia;
aa.displayName = "Pie";
// node_modules/recharts/es6/chart/PieChart.js
function oa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function sa(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? oa(Object(n), !0).forEach(function(t) {
			ca(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ca(e, t, n) {
	return (t = la(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function la(e) {
	var t = ua(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ua(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var da = ["item"], fa = sa(sa({}, Gr), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), pa = /*#__PURE__*/ (0, Z.forwardRef)((e, t) => {
	var n = Zn(e, fa);
	return /*#__PURE__*/ Z.createElement(Wr, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: da,
		tooltipPayloadSearcher: jt,
		categoricalChartProps: n,
		ref: t
	});
}), $ = Jn();
function ma({ entries: e }) {
	let t = e.filter((e) => !!e);
	return t.length ? /* @__PURE__ */ (0, $.jsx)(rt, {
		inline: !0,
		label: J("settings:configurationPage.contents"),
		entries: t,
		children: t.map(({ id: e, content: t }) => /* @__PURE__ */ (0, $.jsx)("div", {
			id: e,
			className: "flex min-w-0 flex-col gap-6",
			children: t
		}, e))
	}) : null;
}
// src/react/settings/userscript-probe.ts
function ha() {
	let e = (0, Z.useRef)(null), [t, n] = (0, Z.useState)(0), [r, i] = (0, Z.useState)("checking");
	return (0, Z.useEffect)(() => {
		let t = Gn(), n = !1, r = e.current, a, o = () => {
			n = !0, clearInterval(u), i("missing");
		}, s = () => {
			n || (clearTimeout(a), a = setTimeout(o, 3e3), c());
		}, c = () => e.current?.contentWindow?.postMessage({
			type: "peach-userscript:probe",
			nonce: t
		}, window.location.origin), l = (r) => {
			!n && r.source === e.current?.contentWindow && r.origin === window.location.origin && r.data?.type === "peach-userscript:ready" && r.data.nonce === t && r.data.protocol === 1 && typeof r.data.version == "string" && /^\d{1,5}\.\d{1,5}\.\d{1,5}$/.test(r.data.version) && typeof r.data.paired == "boolean" && (n = !0, clearInterval(u), clearTimeout(a), i({
				version: r.data.version,
				paired: r.data.paired
			}));
		};
		window.addEventListener("message", l);
		let u = setInterval(c, 250);
		return a = setTimeout(o, 15e3), r?.addEventListener("load", s), r?.contentDocument?.readyState === "complete" && r.contentDocument.URL !== "about:blank" && s(), c(), () => {
			clearInterval(u), clearTimeout(a), r?.removeEventListener("load", s), window.removeEventListener("message", l);
		};
	}, [t]), {
		frame: e,
		attempt: t,
		status: r,
		retry: () => {
			r !== "checking" && (i("checking"), n((e) => e + 1));
		}
	};
}
// src/react/settings/userscript-status.tsx
function ga(e, t) {
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
function _a({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = ha(), { checked: o } = Vr(), s = (0, Z.useRef)(0), c = typeof i == "object", l = c && !ga(i.version, t.minimum_version), u = c && !ga(i.version, t.version), d = i === "checking" ? "progress" : i === "missing" ? "neutral" : l || u || !i.paired ? "warning" : "success", f = i === "checking" ? J("settings:userscriptStatus.checking") : i === "missing" ? J("settings:mediaLibraries.dependencyMissing") : l ? J("settings:userscriptStatus.updateRequired") : u ? J("settings:userscriptStatus.updateAvailable") : i.paired ? J("settings:userscriptStatus.connected") : J("settings:userscriptStatus.unpaired");
	(0, Z.useEffect)(() => {
		i !== "checking" && s.current !== r && (s.current = r, o(J("settings:userscriptStatus.checkResult", { result: f })));
	}, [
		r,
		o,
		f,
		i
	]);
	let m = i === "checking" ? "checking" : i === "missing" ? "missing" : l ? "required" : u ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("iframe", {
		ref: n,
		title: J("settings:userscriptStatus.probeFrame"),
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, r), /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: Pt({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: J("settings:userscriptStatus.title")
				}), /* @__PURE__ */ (0, $.jsx)(Hr, {
					tone: d,
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `userscript.${m}.status`,
						children: f
					})
				})]
			}),
			c ? /* @__PURE__ */ (0, $.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: [J("settings:userscriptStatus.installedVersion"), i.version]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: J("settings:userscriptStatus.addFromBrowser")
				}), /* @__PURE__ */ (0, $.jsx)(gt, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: J(e ? "settings:shared.enabled" : "settings:shared.notEnabled")
					})
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				"data-copy-key": `userscript.${m}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: i === "checking" ? J("settings:userscriptStatus.checkingHelp") : i === "missing" ? J("settings:userscriptStatus.missingHelp") : l ? J("settings:userscriptStatus.updateRequiredHelp", { version: t.minimum_version }) : u ? J("settings:userscriptStatus.updateAvailableHelp", { version: t.version }) : i.paired ? J(e ? "settings:userscriptStatus.readyHelp" : "settings:userscriptStatus.addingDisabledHelp") : J("settings:userscriptStatus.pairHelp")
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					i === "missing" || l || u ? /* @__PURE__ */ (0, $.jsx)(he, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `userscript.${i === "missing" ? "install" : "update"}.action`,
							children: J(l || u ? "settings:userscriptStatus.update" : "settings:userscriptStatus.install")
						})
					}) : null,
					i === "missing" ? /* @__PURE__ */ (0, $.jsx)(he, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: J("settings:userscriptStatus.permissionGuide")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(p, {
						variant: "secondary",
						type: "button",
						...G(i === "checking"),
						onClick: a,
						children: J("settings:userscriptStatus.checkAgain")
					})
				]
			})
		]
	})] });
}
// src/react/settings/jav-browser-settings.tsx
var va = "/api/configuration/jav-browser";
function ya({ receipt: e, refreshKey: t }) {
	let n = X({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => U(va, e),
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return n.error && !n.data ? /* @__PURE__ */ (0, $.jsx)(A, { children: q(n.error) }) : n.isFetching && !n.data ? /* @__PURE__ */ (0, $.jsx)(nt, {
		label: J("settings:browserAdd.loading"),
		html: En
	}) : n.data ? /* @__PURE__ */ (0, $.jsx)(ba, {
		initial: n.data,
		receipt: e
	}) : null;
}
function ba({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.provider), [o, s] = (0, Z.useState)(""), c = Y();
	(0, Z.useEffect)(() => {
		qn("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), r(e), a((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || s("");
	}, [e]);
	let l = (e) => {
		c.run(e, (t) => W(va, {
			action: e,
			provider: i
		}, "POST", t), (n) => {
			let { token: i = "", ...o } = n;
			r(o), a(o.provider), s(i), t(J(e === "disable" ? "settings:browserAdd.turnedOff" : "settings:browserAdd.tokenIssued"));
		});
	}, u = (e) => {
		c.busy || (r((t) => ({
			...t,
			want_on_no_match: e
		})), c.run("want", (t) => W("/api/settings", { javBrowserWantOnNoMatch: e }, "POST", t), () => t(J("settings:shared.settingsSaved")), (t) => {
			r((t) => ({
				...t,
				want_on_no_match: !e
			})), c.setError(q(t));
		}));
	}, d = n.providers.some((e) => e.key === i && e.configured && e.target);
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "browser",
		title: J("settings:javBrowser.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, $.jsx)(_a, {
					enabled: n.enabled,
					release: n.userscript
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(be, { children: J("settings:browserAdd.channel") }), /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:browserAdd.channel"),
						selectedKey: i || null,
						placeholder: J("settings:browserAdd.noChannels"),
						onSelectionChange: (e) => {
							e !== null && a(String(e));
						},
						isDisabled: !n.providers.length || !!c.busy,
						children: n.providers.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, $.jsx)(mt, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				d ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:browserAdd.needsCloudDrive") }),
				n.problems?.map((e) => /* @__PURE__ */ (0, $.jsx)(N, { children: e }, e)),
				n.enabled && n.active_provider && !n.providers.some((e) => e.key === n.active_provider) ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:browserAdd.channelUnavailable") }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:browserAdd.wantOnNoMatch"),
					description: J("settings:browserAdd.wantOnNoMatchHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:browserAdd.wantOnNoMatch"),
						isSelected: n.want_on_no_match,
						isDisabled: !!c.busy || !n.enabled,
						onChange: u
					})
				}) }),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:browserAdd.peachUrl"),
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				o ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)(P, {
						label: J("settings:browserAdd.token"),
						type: "password",
						value: o,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(p, {
						variant: "secondary",
						type: "button",
						onClick: () => {
							c.run("copy", async () => navigator.clipboard.writeText(JSON.stringify({
								peach_pairing: 1,
								base: window.location.origin,
								token: o
							})), () => t(J("settings:browserAdd.pairingCopied")));
						},
						...G(c.busy === "copy"),
						children: J("settings:browserAdd.copyPairing")
					}) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:browserAdd.pairingHelp") })
				] }) : null
			]
		}), c.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: c.error }) : null] }), /* @__PURE__ */ (0, $.jsxs)(M, { children: [n.enabled ? /* @__PURE__ */ (0, $.jsx)(p, {
			variant: "secondary",
			type: "button",
			disabled: !!c.busy,
			onClick: () => l("disable"),
			children: J("settings:javBrowser.disable")
		}) : null, /* @__PURE__ */ (0, $.jsx)(p, {
			type: "button",
			disabled: !n.available || !d || !!c.busy,
			onClick: () => l(n.enabled ? "rotate" : "enable"),
			...G(c.busy === "enable" || c.busy === "rotate"),
			children: n.enabled ? J("settings:javBrowser.updateChannelToken") : J("settings:javBrowser.enable")
		})] })]
	});
}
// src/react/settings/local-download-settings.tsx
var xa = "/api/configuration/downloads/qbittorrent/check", Sa = (e) => (e.problems ?? []).map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? sr(r.code, t, r.params) : t;
}).filter((e) => e.includes("qBittorrent")), Ca = (e) => e.problems.map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? sr(r.code, t, r.params) : t;
});
function wa({ state: e, settle: t, receipt: n }) {
	let { checked: r, checkFailed: i } = Vr(), a = J("settings:connectionCheck.action", { service: "qBittorrent" }), o = e.qbittorrent ?? {
		address: "",
		save_path: "",
		media_root: "",
		username: "",
		password_set: !1
	}, s = e.local_roots ?? [], [c, l] = (0, Z.useState)(o.address), [u, d] = (0, Z.useState)(o.save_path), [f, m] = (0, Z.useState)(o.media_root), [h, g] = (0, Z.useState)(o.username), [_, v] = (0, Z.useState)(""), [y, b] = (0, Z.useState)(!1), [x, S] = (0, Z.useState)(null), [C, w] = (0, Z.useState)(""), T = Y();
	(0, Z.useEffect)(() => {
		l(o.address), d(o.save_path), m(o.media_root), g(o.username);
	}, [
		o.address,
		o.save_path,
		o.media_root,
		o.username
	]);
	let E = {
		...e.config,
		qbittorrent_address: c,
		qbittorrent_save_path: u,
		qbittorrent_media_root: f,
		qbittorrent_username: h,
		qbittorrent_password: _,
		clear_qbittorrent_password: y
	}, D = () => {
		T.run("check", (e) => W(xa, E, "POST", e), (e) => {
			S(e), !u.trim() && e.save_path && d(e.save_path), w(""), e.ok ? r(J("settings:connectionCheck.passed", { service: "qBittorrent" })) : i(a, Ca(e)[0] || J("settings:connectionCheck.details"));
		}, (e) => {
			let t = q(e);
			w(t), i(a, t);
		});
	}, ee = (e) => {
		e.preventDefault(), T.run("save", (e) => W("/api/configuration/downloads", E, "POST", e), (e) => {
			let { report: r, qbittorrent_report: i, ...a } = e;
			t(a), v(""), b(!1), S(i || null), w(""), n(J("settings:localDownload.saved"));
		}, (e) => w(q(e)));
	}, k = Sa(e);
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:localDownload.title"),
		onSubmit: ee,
		children: [
			k.length ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:localDownload.needsAttention"),
				children: k.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:localDownload.help") }),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.address"),
					placeholder: J("settings:localDownload.addressPlaceholder"),
					autoComplete: "off",
					maxLength: 200,
					value: c,
					isDisabled: !e.available,
					onChange: l
				}),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.username"),
					autoComplete: "username",
					maxLength: 200,
					value: h,
					isDisabled: !e.available,
					onChange: g
				}),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.password"),
					type: "password",
					autoComplete: "current-password",
					maxLength: 400,
					placeholder: o.password_set ? J("settings:shared.savedLeaveBlank") : J("settings:localDownload.passwordPlaceholder"),
					value: _,
					isDisabled: !e.available,
					onChange: v
				}),
				o.password_set ? /* @__PURE__ */ (0, $.jsx)(O, {
					isSelected: y,
					isDisabled: !e.available,
					onChange: b,
					children: J("settings:localDownload.clearPassword")
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.savePath"),
					placeholder: J("settings:localDownload.savePathPlaceholder"),
					autoComplete: "off",
					maxLength: 500,
					value: u,
					isDisabled: !e.available,
					hint: J("settings:localDownload.savePathHint"),
					onChange: d
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)(be, { children: J("settings:localDownload.mediaRoot") }),
						s.length ? /* @__PURE__ */ (0, $.jsx)(R, {
							"aria-label": J("settings:localDownload.mediaRoot"),
							selectedKey: f || null,
							isDisabled: !e.available,
							placeholder: J("settings:localDownload.mediaRootPlaceholder"),
							onSelectionChange: (e) => m(e === null ? "" : String(e)),
							children: s.map((e) => /* @__PURE__ */ (0, $.jsxs)(z, {
								id: e.root,
								textValue: J("shell:format.withNote", {
									text: e.label,
									note: e.root
								}),
								children: [
									e.label,
									" · ",
									e.root
								]
							}, e.root))
						}) : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:localDownload.noLocalRoots", { section: J("navigation:configurationSections.library") }) }),
						/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:localDownload.mediaRootHelp") })
					]
				}),
				C ? /* @__PURE__ */ (0, $.jsx)(A, { children: C }) : null
			] }),
			x ? /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [/* @__PURE__ */ (0, $.jsxs)(ye, { children: [
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:localDownload.version"),
						children: x.version || J("settings:shared.notFound")
					}),
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: "WebAPI",
						children: x.webapi_version || J("settings:shared.notFound")
					}),
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:localDownload.savePath"),
						children: x.save_path || J("settings:shared.notSet")
					}),
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:localDownload.mediaRoot"),
						children: x.media_root || J("settings:shared.notSet")
					})
				] }), x.problems.length ? /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "error",
					title: J("settings:localDownload.checkFailed"),
					children: Ca(x).join("\n")
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: e.available ? void 0 : J("settings:cloudDownload.primaryOnly"),
				children: [/* @__PURE__ */ (0, $.jsx)(p, {
					type: "button",
					variant: "secondary",
					disabled: !e.available || !!T.busy,
					...G(T.busy === "check"),
					onClick: D,
					children: J("settings:cloudDownload.testConnection")
				}), /* @__PURE__ */ (0, $.jsx)(p, {
					type: "submit",
					disabled: !e.available || !!T.busy,
					...G(T.busy === "save"),
					children: J("settings:shared.saveSettings")
				})]
			})
		]
	});
}
// src/react/settings/download-settings.tsx
var Ta = "/api/configuration/downloads", Ea = "/api/configuration/downloads/check", Da = "/api/configuration/downloads/folder", Oa = "/api/configuration/downloads/pikpak/login", ka = "/api/configuration/downloads/pikpak/logout", Aa = "/api/configuration/downloads/pikpak/browser-login", ja = 2e3, Ma = 9e5, Na = Un("pikpak"), Pa = (e) => (e.problems ?? []).map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? sr(r.code, t, r.params) : t;
}), Fa = (e) => e.missing.map((t, n) => sr(e.missing_codes?.[n] ?? "", t));
function Ia({ initial: e, receipt: t, active: n, issues: r }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [r, e ? /* @__PURE__ */ (0, $.jsx)(La, {
		initial: e,
		receipt: t,
		active: n
	}) : null] });
}
function La({ initial: e, receipt: t, active: n = !0 }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		i((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let s = r.media_sources ?? [], c = s.includes("pikpak"), l = s.some((e) => h.includes(e)), u = c && (r.pikpak.logged_in || !!a.trim());
	return /* @__PURE__ */ (0, $.jsx)(ma, { entries: [
		l && {
			id: "downloads-cloud",
			label: J("settings:cloudDownload.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Ra, {
				state: r,
				settle: i,
				receipt: t,
				pikpakAccount: u,
				active: n
			})
		},
		c && {
			id: "downloads-pikpak",
			label: J("settings:pikpakAccount.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Ua, {
				state: r,
				settle: i,
				receipt: t,
				username: a,
				setUsername: o
			})
		},
		{
			id: "downloads-local",
			label: J("settings:localDownload.title"),
			content: /* @__PURE__ */ (0, $.jsx)(wa, {
				state: r,
				settle: i,
				receipt: t
			})
		},
		{
			id: "downloads-browser",
			label: J("settings:javBrowser.title"),
			content: /* @__PURE__ */ (0, $.jsx)(ya, {
				receipt: t,
				refreshKey: JSON.stringify([
					r.media_sources,
					r.config,
					r.token_set,
					r.pikpak.logged_in,
					r.qbittorrent,
					r.local_roots
				])
			})
		}
	] });
}
function Ra({ state: e, settle: t, receipt: n, pikpakAccount: r, active: i }) {
	let { checked: a, checkFailed: o } = Vr(), s = J("settings:connectionCheck.action", { service: "CloudDrive2" }), [c, u] = (0, Z.useState)(e.config), [d, f] = (0, Z.useState)(""), [m, h] = (0, Z.useState)(String(e.config.wait_hours)), [g, _] = (0, Z.useState)(null), [v, y] = (0, Z.useState)(""), [b, x] = (0, Z.useState)(Va), [S, C] = (0, Z.useState)(""), [w, T] = (0, Z.useState)(!1), E = Y(), D = (0, Z.useRef)(!1), ee = e.media_sources ?? [], O = ee.includes("115"), k = ee.includes("pikpak"), te = (e) => c.targets[e] ?? "", ne = (e, t) => u({
		...c,
		targets: {
			...c.targets,
			[e]: t
		}
	}), re = O && !(!b.target || b.target.exists || te("115") !== b.target.path), ie = (e, t, n = "") => {
		let r = t.target ? e.suggested_target : null, i = !!(r && n && r.path === n), a = t.root ? e.suggested_pikpak_root : "";
		u((n) => ({
			...n,
			clouddrive_address: t.address && e.address ? e.address : n.clouddrive_address,
			targets: r && !i ? {
				...n.targets,
				115: r.path
			} : n.targets,
			pikpak_root: a || n.pikpak_root
		})), _(e), y(t.address ? e.address : ""), x({
			target: r,
			root: a,
			saved: i
		}), T(!1), C("");
	};
	return (0, Z.useEffect)(() => {
		if (!i || D.current || (D.current = !0, !e.available || !e.config.clouddrive_address || !e.token_set)) return;
		let t = {
			address: !1,
			target: !e.config.targets[115],
			root: !e.config.pikpak_root
		};
		E.run("auto", (e) => U(Ea, e), (e) => ie(e, t), (e) => C(q(e)));
	}, [i]), /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "download",
		title: J("settings:cloudDownload.title"),
		onSubmit: (e) => {
			if (e.preventDefault(), re) {
				T(!0);
				return;
			}
			let i = !te("115").trim(), a = {
				...c,
				wait_hours: m,
				token: d,
				pikpak_account: r
			};
			E.run("save", (e) => W(Ta, a, "POST", e), (e) => {
				let { report: r, ...a } = e;
				t(a), u(a.config), h(String(a.config.wait_hours)), f(""), r ? ie(r, {
					address: !a.config.clouddrive_address,
					target: i,
					root: !a.config.pikpak_root
				}, a.config.targets[115] ?? "") : (_(null), y(""), x(Va), T(!1), C("")), n(J("settings:shared.settingsSaved"));
			}, (e) => C(q(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:cloudDownload.needsAttention"),
				children: Pa(e).join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:cloudDownload.cloudDriveUrl"),
					placeholder: J("settings:cloudDownload.addressPlaceholder"),
					autoComplete: "off",
					maxLength: 200,
					hint: J("settings:cloudDownload.cloudDriveUrlHelp"),
					value: c.clouddrive_address,
					isDisabled: !e.available,
					onChange: (e) => u({
						...c,
						clouddrive_address: e
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:cloudDownload.apiToken"),
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? J("settings:shared.savedLeaveBlank") : J("settings:cloudDownload.tokenPlaceholder"),
					hint: J("settings:cloudDownload.apiTokenHelp"),
					value: d,
					isDisabled: !e.available,
					onChange: f
				}),
				O ? /* @__PURE__ */ (0, $.jsx)(P, {
					label: /* @__PURE__ */ (0, $.jsx)(mt, {
						source: "115",
						label: J("settings:cloudDownload.target115")
					}),
					placeholder: J("settings:cloudDownload.targetPlaceholder"),
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: re,
					hint: J(re ? w ? "settings:cloudDownload.createOrPick" : "settings:cloudDownload.directoryMissing" : "settings:cloudDownload.target115Help"),
					value: te("115"),
					isDisabled: !e.available,
					onChange: (e) => ne("115", e)
				}) : null,
				k ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(P, {
					label: /* @__PURE__ */ (0, $.jsx)(mt, {
						source: "pikpak",
						label: J("settings:cloudDownload.targetPikpak")
					}),
					placeholder: J("settings:cloudDownload.pikpakPathPlaceholder"),
					autoComplete: "off",
					maxLength: 300,
					hint: J("settings:cloudDownload.targetPikpakHelp"),
					value: te("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => ne("pikpak", e)
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(be, { children: /* @__PURE__ */ (0, $.jsx)(mt, {
						source: "pikpak",
						label: J("settings:cloudDownload.pikpakRootDirectory")
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:cloudDownload.pikpakRootDirectory"),
						selectedKey: c.pikpak_root || null,
						isDisabled: !e.available || !r,
						placeholder: J("settings:cloudDownload.rootPlaceholder"),
						onSelectionChange: (e) => u({
							...c,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e,
							children: e
						}, e))
					}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDownload.pikpakRootDirectoryHelp") })] }) : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDownload.addPikpakMount") })]
				})] }) : null,
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:cloudDownload.maxWait"),
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: J("settings:cloudDownload.waitHint", { max: e.max_wait_hours }),
					value: m,
					isDisabled: !e.available,
					onChange: h
				}),
				/* @__PURE__ */ (0, $.jsx)(Ba, {
					values: c.edition_preferences ?? [],
					disabled: !e.available,
					onChange: (e) => u((t) => ({
						...t,
						edition_preferences: e
					}))
				})
			] }),
			E.busy === "auto" ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(l, {
					kind: "radar",
					label: J("settings:cloudDownload.checking")
				})
			}) : null,
			g ? /* @__PURE__ */ (0, $.jsx)(Ha, {
				report: g,
				detected: v,
				suggested: b,
				create: e.available ? (e) => {
					let t = {
						clouddrive_address: c.clouddrive_address,
						token: d,
						path: e,
						pikpak_root: c.pikpak_root,
						pikpak_account: r
					};
					E.run("folder", (e) => W(Da, t, "POST", e), (t) => {
						_(t), x((t) => ({
							...t,
							target: {
								path: e,
								exists: !0
							}
						})), T(!1), C(""), n(J("settings:cloudDownload.directoryCreated"));
					}, (e) => C(q(e)));
				} : void 0,
				creating: E.busy === "folder"
			}) : null,
			S || E.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: S || E.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: e.available ? void 0 : J("settings:cloudDownload.primaryOnly"),
				children: [/* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !c.clouddrive_address.trim(),
							target: !te("115").trim(),
							root: !c.pikpak_root
						}, t = {
							clouddrive_address: c.clouddrive_address,
							token: d,
							target: te("115"),
							pikpak_root: c.pikpak_root,
							pikpak_account: r
						};
						E.run("check", (e) => W(Ea, t, "POST", e), (t) => {
							ie(t, e), t.ok ? a(J("settings:connectionCheck.passed", { service: "CloudDrive2" })) : o(s, Pa(t)[0] || J("settings:connectionCheck.details"));
						}, (e) => {
							let t = q(e);
							C(t), o(s, t);
						});
					},
					disabled: !e.available,
					...G(E.busy === "check"),
					children: J("settings:cloudDownload.testConnection")
				}), /* @__PURE__ */ (0, $.jsx)(p, {
					type: "submit",
					disabled: !e.available,
					...G(E.busy === "save"),
					children: J("settings:shared.saveSettings")
				})]
			})
		]
	});
}
var za = Object.keys(le);
function Ba({ values: e, disabled: t, onChange: n }) {
	let r = J("settings:cloudDownload.editionPreferences"), i = [...e, ...za.filter((t) => !e.includes(t))], a = Object.fromEntries(za.map((e) => [e, qt(e)])), o = {
		label: r,
		keys: i,
		defaults: za,
		commit: n
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-2",
		role: "group",
		"aria-label": r,
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, $.jsx)(be, { children: r }), /* @__PURE__ */ (0, $.jsx)(N, { children: J(e.length ? "settings:cloudDownload.editionPreferencesHelp" : "settings:cloudDownload.editionPreferencesDefault") })]
			}),
			/* @__PURE__ */ (0, $.jsx)(Ie, {
				order: o,
				labels: a,
				fixed: t ? i : [],
				reset: !1,
				render: (e) => /* @__PURE__ */ (0, $.jsx)("small", {
					className: `javedition ${le[e]}`,
					children: a[e]
				})
			}),
			e.length ? /* @__PURE__ */ (0, $.jsx)(p, {
				type: "button",
				variant: "secondary",
				size: "small",
				className: "self-start",
				disabled: t,
				onClick: () => n([]),
				children: J("settings:cloudDownload.resetEditionPreferences")
			}) : null
		]
	});
}
var Va = {
	target: null,
	root: "",
	saved: !1
};
function Ha({ report: e, detected: t, suggested: n, create: r, creating: i }) {
	let a = n.target, o = !!(t || a || n.root || e.permissions.length || e.folder || e.quota);
	return !o && !e.problems.length ? null : /* @__PURE__ */ (0, $.jsxs)(V, {
		divided: !0,
		children: [o ? /* @__PURE__ */ (0, $.jsxs)(ye, { children: [
			t ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:cloudDownload.cloudDriveUrl"),
				children: J("settings:cloudDownload.detectedAddress", { address: t })
			}) : null,
			a?.exists ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(mt, {
					source: "115",
					label: J("settings:cloudDownload.target115")
				}),
				children: n.saved ? J("settings:cloudDownload.filledSaved", { path: a.path }) : J("settings:cloudDownload.filledPending", { path: a.path })
			}) : null,
			a && !a.exists ? /* @__PURE__ */ (0, $.jsxs)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(mt, {
					source: "115",
					label: J("settings:cloudDownload.target115")
				}),
				children: [J("settings:cloudDownload.pathMissing", { path: a.path }), r ? /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					size: "small",
					onClick: () => r(a.path),
					...G(i),
					children: J("settings:cloudDownload.createDirectory")
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(mt, {
					source: "pikpak",
					label: J("settings:cloudDownload.pikpakRoot")
				}),
				children: J("settings:cloudDownload.filledPending", { path: n.root })
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:cloudDownload.offlinePermissions"),
				children: e.missing.length ? Fa(e).map((e) => /* @__PURE__ */ (0, $.jsx)(k, {
					variant: "caption",
					color: "yellow",
					children: J("settings:cloudDownload.missingPermission", { permission: e })
				}, e)) : /* @__PURE__ */ (0, $.jsx)(k, {
					variant: "caption",
					color: "lime",
					children: J("settings:cloudDownload.permissionsComplete")
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:cloudDownload.targetDirectory"),
				children: e.folder.can_offline ? J("settings:cloudDownload.offlineSupported", { path: e.folder.path }) : J("settings:cloudDownload.offlineUnsupported", { path: e.folder.path })
			}) : null,
			e.quota ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(mt, {
					source: "115",
					label: J("settings:cloudDownload.quota115")
				}),
				children: J("settings:cloudDownload.quotaLeft", {
					count: e.quota.left,
					total: e.quota.total
				})
			}) : null
		] }) : null, Pa(e).map((e) => /* @__PURE__ */ (0, $.jsx)(A, { children: e }, e))]
	});
}
function Ua({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
	let [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(!1), [u, d] = (0, Z.useState)(""), [f, m] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(""), _ = Y(), v = e.pikpak, y = e.pikpak_browser, b = y.state === "waiting";
	(0, Z.useEffect)(() => {
		if (!b) return;
		let e = new AbortController();
		return Bn({
			signal: e.signal,
			everyMs: ja,
			limitMs: Ma,
			read: (e) => U(Aa, e),
			apply: (e) => {
				t(e), e.pikpak_browser.state === "done" ? n(J("settings:pikpakAccount.signedInReceipt")) : e.pikpak_browser.state !== "waiting" && g(Dn(e.pikpak_browser));
			},
			done: (e) => e.pikpak_browser.state !== "waiting",
			failed: (e) => m(q(e))
		}), () => e.abort();
	}, [b]);
	let x = () => {
		g(""), _.run("browser", (e) => W(Aa, {}, "POST", e), (e) => {
			t(e), m("");
		}, (e) => m(q(e)));
	}, S = () => {
		_.run("cancel", (e) => W(`${Aa}/cancel`, {}, "POST", e), (e) => {
			t(e), m(""), g(Dn(e.pikpak_browser));
		}, (e) => m(q(e)));
	}, C = (e) => {
		if (e.preventDefault(), v.logged_in) return;
		let i = {
			username: r,
			password: a,
			remember: s
		};
		_.run("login", (e) => W(Oa, i, "POST", e), (e) => {
			t(e.settings), m(""), e.ok ? (d(""), o(""), n(J("settings:pikpakAccount.signedInReceipt"))) : d(e.captcha_url ?? "");
		}, (e) => m(q(e)));
	}, w = () => {
		_.run("logout", (e) => W(ka, {}, "POST", e), (e) => {
			t(e), m(""), n(J("settings:pikpakAccount.signedOutReceipt"));
		}, (e) => m(q(e)));
	}, T = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(P, {
			label: J("settings:shared.account"),
			placeholder: J("settings:pikpakAccount.usernamePlaceholder"),
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, $.jsx)(P, {
			label: J("settings:shared.password"),
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: a,
			isDisabled: !e.available,
			onChange: o
		}),
		/* @__PURE__ */ (0, $.jsx)(O, {
			isSelected: s,
			isDisabled: !e.available,
			onChange: c,
			children: J("settings:pikpakAccount.rememberPassword")
		}),
		u ? /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "warning",
			title: J("settings:pikpakAccount.captchaTitle"),
			extra: /* @__PURE__ */ (0, $.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, $.jsx)(he, {
					href: u,
					children: J("settings:pikpakAccount.openCaptcha")
				})
			}),
			children: J("settings:pikpakAccount.captchaHelp")
		}) : null
	] }), E = /* @__PURE__ */ (0, $.jsx)(p, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || b,
		...G(_.busy === "login"),
		children: J("settings:shared.signIn")
	}), D = y.state === "timeout" || y.state === "failed";
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "pikpak",
		title: J("settings:pikpakAccount.title"),
		icon: /* @__PURE__ */ (0, $.jsx)(Na, {}),
		onSubmit: C,
		aside: /* @__PURE__ */ (0, $.jsx)(gt, {
			tone: v.logged_in ? "success" : b ? "progress" : D ? "error" : "neutral",
			children: v.logged_in ? J("settings:pikpakAccount.signedIn") : J(b ? "settings:pikpakAccount.waiting" : D ? "settings:pikpakAccount.incomplete" : "settings:pikpakAccount.notSignedIn")
		}),
		children: [
			v.logged_in ? /* @__PURE__ */ (0, $.jsxs)(ye, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:shared.account"),
				children: v.username || J("settings:pikpakAccount.signedIn")
			}), v.method === "browser" ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:pikpakAccount.method"),
				children: J("settings:pikpakAccount.browserMethod")
			}) : /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:shared.password"),
				children: v.remember ? J("settings:pikpakAccount.passwordSaved") : J("settings:pikpakAccount.passwordNotSaved")
			})] }) : /* @__PURE__ */ (0, $.jsxs)(V, { children: [h ? D ? /* @__PURE__ */ (0, $.jsx)(A, { children: h }) : /* @__PURE__ */ (0, $.jsx)(N, {
				role: "status",
				children: h
			}) : null, T] }),
			f || _.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: f || _.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, {
				status: !v.logged_in && b ? /* @__PURE__ */ (0, $.jsx)(l, {
					kind: "clock",
					label: Dn(y) || J("settings:pikpakAccount.waitingBrowser")
				}) : null,
				children: v.logged_in ? /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					onClick: w,
					disabled: !e.available,
					...G(_.busy === "logout"),
					children: J("settings:shared.signOut")
				}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [y.available ? b ? /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					type: "button",
					onClick: S,
					...G(_.busy === "cancel"),
					children: J("settings:shared.cancel")
				}) : /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					type: "button",
					onClick: x,
					disabled: !e.available,
					...G(_.busy === "browser"),
					children: J("settings:pikpakAccount.browserSignIn")
				}) : null, E] })
			})
		]
	});
}
// src/react/settings/general-settings.tsx
var Wa = "/api/configuration/startup";
function Ga({ active: e, initial: t, receipt: n }) {
	let r = X({
		queryKey: ["configuration", "startup"],
		queryFn: ({ signal: e }) => U(Wa, e),
		enabled: e,
		initialData: t
	});
	return r.data ? /* @__PURE__ */ (0, $.jsx)(Ka, {
		startup: r.data,
		receipt: n
	}) : e ? /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "startup",
		title: J("settings:startup.title"),
		children: r.isError ? /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "error",
			action: /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				size: "small",
				...G(r.isFetching),
				onClick: () => void r.refetch(),
				children: J("settings:shared.reload")
			}),
			children: q(r.error)
		}) : /* @__PURE__ */ (0, $.jsx)("div", {
			role: "status",
			"aria-busy": "true",
			className: "px-4 py-3",
			children: /* @__PURE__ */ (0, $.jsx)("span", { className: "block h-4 w-36 rounded-md bg-background-tertiary-default" })
		})
	}) : null;
}
function Ka({ startup: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.enabled), [i, a] = (0, Z.useState)(e.silent), [o, s] = (0, Z.useState)(e.desktop), c = Y(), l = e.available && !e.desktop_message, u = K(e, "desktop_message"), d = K(e, "message");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "startup",
		title: J("settings:startup.title"),
		onSubmit: (r) => {
			r.preventDefault(), e.available && c.run("save", (e) => W(Wa, {
				enabled: n,
				silent: i,
				desktop: o
			}, "POST", e), () => t(J("settings:shared.settingsSaved")));
		},
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:startup.launchAtStartup"),
					description: J("settings:startup.launchAtStartupHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:startup.launchAtStartup"),
						isSelected: n,
						isDisabled: !e.available,
						onChange: r
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:startup.trayOnly"),
					description: J("settings:startup.trayOnlyHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:startup.trayOnly"),
						isSelected: i,
						isDisabled: !e.available || !n,
						onChange: a
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:startup.desktopShortcut"),
					description: u || void 0,
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:startup.desktopShortcut"),
						isSelected: o,
						isDisabled: !l,
						onChange: s
					})
				})
			] }),
			d || c.error ? /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [d ? /* @__PURE__ */ (0, $.jsx)(N, { children: d }) : null, c.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: c.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				disabled: !e.available,
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
// src/react/settings/ledger-backup-settings.tsx
var qa = "/api/configuration/ledger-backups", Ja = 1500, Ya = 36e5, Xa = (e) => (/* @__PURE__ */ new Date(e.modified_at * 1e3)).toLocaleString(xn);
function Za(e) {
	return [e.source === "manual" ? J("settings:databaseBackups.manual") : J("settings:databaseBackups.automatic", { purpose: sr(`ledgerBackup.purpose.${e.purpose_code}`, e.purpose) }), rn(e.bytes)].join(" · ");
}
function Qa({ job: e, task: t, label: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)(bt, {
			embedded: !0,
			kind: Dt(t, e.stage_code),
			label: [n, mr(e)].filter(Boolean).join(" · "),
			value: e.done || 0,
			total: e.total
		}), /* @__PURE__ */ (0, $.jsx)(yt, {})]
	});
}
function $a({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(""), a = Y(), o = t?.backup.status === "running", s = t?.restore.status === "running", c = o || s, l = (0, Z.useRef)({
		backup: !1,
		restore: !1
	});
	if ((0, Z.useEffect)(() => {
		let e = new AbortController();
		return U(qa, e.signal).then(n, (t) => {
			e.signal.aborted || i(String(t?.message || t));
		}), () => e.abort();
	}, []), (0, Z.useEffect)(() => {
		if (!c) return;
		let e = new AbortController();
		return Bn({
			signal: e.signal,
			everyMs: Ja,
			limitMs: Ya,
			read: (e) => U(qa, e),
			apply: n,
			done: (e) => e.backup.status !== "running" && e.restore.status !== "running"
		}), () => e.abort();
	}, [c]), (0, Z.useEffect)(() => {
		if (t) for (let n of ["backup", "restore"]) {
			let r = t[n];
			r.status === "running" ? l.current[n] = !0 : l.current[n] && (l.current[n] = !1, r.status === "complete" && e(n === "backup" ? J("settings:databaseBackups.backedUp", { name: r.name }) : J("settings:databaseBackups.restored", { name: r.saved })));
		}
	}, [t]), !t && !r) return /* @__PURE__ */ (0, $.jsx)(nt, {
		label: J("settings:databaseBackups.loading"),
		html: An
	});
	if (!t) return /* @__PURE__ */ (0, $.jsx)(L, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: J("settings:databaseBackups.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: r }) })
	});
	let u = () => void a.run("backup", (e) => W(`${qa}/backup`, {}, "POST", e), n), d = (e) => void Bt({
		title: J("settings:databaseBackups.restoreTitle"),
		danger: !0,
		body: J("settings:databaseBackups.restoreBody", {
			time: Xa(e),
			details: Za(e)
		}),
		confirmLabel: J("settings:databaseBackups.replaceCurrent"),
		onConfirm: async () => {
			l.current.restore = !0, n(await W(`${qa}/restore`, {
				id: e.id,
				confirm: !0
			}));
		}
	}), f = [t.backup, t.restore].find((e) => e.status === "failed"), m = t.last_restore, h = o ? J("settings:databaseBackups.backingUp") : s ? J("settings:databaseBackups.restoring") : t.backups.length ? J("settings:databaseBackups.count", { count: t.backups.length }) : J("settings:databaseBackups.empty");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: J("settings:databaseBackups.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:databaseBackups.help") }),
				t.writer ? null : /* @__PURE__ */ (0, $.jsxs)(N, { children: [J("settings:databaseBackups.notPrimary"), K(t, "writer_reason")] }),
				o ? /* @__PURE__ */ (0, $.jsx)(Qa, {
					job: t.backup,
					task: "ledger-backup",
					label: J("settings:databaseBackups.backupProgress")
				}) : null,
				s ? /* @__PURE__ */ (0, $.jsx)(Qa, {
					job: t.restore,
					task: "ledger-restore",
					label: J("settings:databaseBackups.restoreProgress")
				}) : null,
				f ? /* @__PURE__ */ (0, $.jsx)(A, { children: Dn(f, "error") || J("settings:databaseBackups.jobIncomplete") }) : null,
				m ? m.outcome === "kept" || m.outcome === "completed" ? /* @__PURE__ */ (0, $.jsx)(N, { children: K(m, "message") }) : /* @__PURE__ */ (0, $.jsx)(A, { children: K(m, "message") }) : null,
				a.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: a.error }) : null
			] }),
			t.backups.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "border-t border-separator-border",
				"data-ledger-backups": "",
				children: /* @__PURE__ */ (0, $.jsx)(I, { children: t.backups.map((e) => /* @__PURE__ */ (0, $.jsx)(B, {
					label: Xa(e),
					description: Za(e),
					children: /* @__PURE__ */ (0, $.jsx)(p, {
						variant: "secondary",
						disabled: !t.writer || c,
						onClick: () => d(e),
						children: J("settings:databaseBackups.restore")
					})
				}, e.id)) })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, {
				status: /* @__PURE__ */ (0, $.jsx)("p", { children: h }),
				children: /* @__PURE__ */ (0, $.jsx)(p, {
					disabled: c,
					onClick: u,
					...G(a.busy === "backup" || o),
					children: J("settings:databaseBackups.backUpNow")
				})
			})
		]
	});
}
// src/react/settings/docker-update.tsx
var eo = 3e3, to = 9e5;
async function no(e, t, n) {
	let r = "";
	return await Bn({
		read: n.read || ((e) => U("/api/client-updates", e)),
		apply: (t) => {
			let n = t.runtime?.version;
			n && n !== e && (r = n);
		},
		done: () => !!r,
		signal: t,
		everyMs: eo,
		limitMs: Math.max(1, n.limitMs),
		pause: n.pause
	}), t.aborted ? null : r ? {
		state: "done",
		version: r
	} : { state: "timeout" };
}
function ro(e) {
	let [t, n] = (0, Z.useState)({ state: "idle" }), r = Y(), i = (0, Z.useRef)(0);
	return (0, Z.useEffect)(() => {
		if (t.state !== "updating") return;
		let r = new AbortController();
		return no(e, r.signal, { limitMs: to - (Date.now() - i.current) }).then((e) => {
			e && n(e);
		}), () => r.abort();
	}, [t.state, e]), {
		job: t,
		run: () => r.run("docker-update", (e) => W("/api/configuration/docker-update", {}, "POST", e), () => {
			i.current = Date.now(), n({ state: "updating" });
		}),
		busy: r.busy === "docker-update",
		error: r.error
	};
}
function io({ job: e }) {
	return e.state === "updating" ? /* @__PURE__ */ (0, $.jsx)(bt, {
		embedded: !0,
		kind: "clock",
		label: J("settings:dockerUpdate.updating")
	}) : e.state === "done" ? /* @__PURE__ */ (0, $.jsx)(N, {
		role: "status",
		children: J("settings:dockerUpdate.done", { version: e.version })
	}) : e.state === "timeout" ? /* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(A, { children: J("settings:dockerUpdate.timeout") }), /* @__PURE__ */ (0, $.jsx)(te, {
		label: J("settings:dockerUpdate.logsLabel"),
		steps: [{
			text: J("settings:dockerUpdate.watchtowerLog"),
			command: "docker compose logs watchtower"
		}, {
			text: J("settings:dockerUpdate.peachLog"),
			command: "docker compose logs peach"
		}]
	})] }) : null;
}
Xn();
var ao = "peach:release-notice", oo = /* @__PURE__ */ new Set([
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
]), so = [
	65,
	75,
	90
], co = 7, lo = "https://github.com/peach-mitao/peach/releases", uo = /((?:[\w.-]+\/[\w.-]+)?#\d+)/;
function fo(e) {
	let [t, n] = e.split("#");
	return `https://github.com/${t || "peach-mitao/peach"}/issues/${n}`;
}
function po({ text: e }) {
	return /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: e.split("`").map((e, t) => t % 2 ? /* @__PURE__ */ (0, $.jsx)("code", { children: e }, t) : e.split(uo).map((e, n) => n % 2 ? /* @__PURE__ */ (0, $.jsx)("a", {
		href: fo(e),
		target: "_blank",
		rel: "noopener noreferrer",
		className: "text-accent-600 hover:underline",
		children: e
	}, `${t}-${n}`) : e)) });
}
function mo({ notes: e }) {
	let t = xn === "zh-CN" ? "zh-CN" : "en";
	return /* @__PURE__ */ (0, $.jsx)(ce, {
		summary: J("settings:releaseUpdates.changelogTitle", { versions: On(e.map((e) => e.version)) }),
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-col gap-5 pt-3",
			children: e.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-body-2-medium text-text-primary",
						children: e.version
					}), /* @__PURE__ */ (0, $.jsx)(he, {
						href: e.url,
						children: J("settings:releaseUpdates.releasePage")
					})]
				}), /* @__PURE__ */ (0, $.jsx)("ul", {
					className: "flex list-disc flex-col gap-1 ps-5 text-body-2-regular text-text-primary",
					children: e[t].map((e, t) => /* @__PURE__ */ (0, $.jsxs)("li", { children: [e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-medium",
						children: J("settings:releaseUpdates.highlightTitle", { title: e.title })
					}) : null, /* @__PURE__ */ (0, $.jsx)(po, { text: e.text })] }, t))
				})]
			}, e.version))
		})
	});
}
function ho({ initial: e, initialJob: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), { snapshot: o, failures: s } = Sr(), c = (0, Z.useRef)(o), l = Y(), { checked: u, checkFailed: f } = Vr(), h = (0, Z.useRef)(!0), g = oo.has(i.state), _ = ro(e.current_version), v = n.state === "available" && !!n.one_click?.available, y = _.job.state === "updating", b = n.installation_code === "standalone", x = () => void Bt({
		title: J("settings:releaseUpdates.oneClickUpdate"),
		body: J("settings:releaseUpdates.dockerUpdateBody", { version: n.latest_version || "" }),
		confirmLabel: J("settings:releaseUpdates.startUpdate"),
		cancelLabel: J("settings:shared.cancel"),
		onConfirm: _.run
	});
	(0, Z.useEffect)(() => (h.current = !0, () => {
		h.current = !1;
	}), []);
	let S = async () => {
		let e = await W("/api/configuration/update-restart", {});
		h.current && a(e), Ft();
	}, C = () => void Bt({
		title: J("settings:releaseUpdates.updateReady"),
		body: J("settings:releaseUpdates.installAfterRestart", { version: i.version || "" }),
		confirmLabel: J("settings:releaseUpdates.restartNow"),
		cancelLabel: J("settings:shared.later"),
		onConfirm: S
	});
	(0, Z.useEffect)(() => {
		if (!o || o === c.current) return;
		let e = o.update_job;
		a(e), o.release.checked_at && r(o.release), e.state === "complete" && r((t) => ({
			...t,
			current_version: e.version || t.current_version,
			state: "current",
			message: J("settings:releaseUpdates.latestTestBuild")
		}));
	}, [o]);
	let w = () => {
		g || l.run("download", (e) => W("/api/configuration/update", {}, "POST", e), (e) => {
			a(e), Ft();
		});
	}, T = () => void l.run("check", (e) => U("/api/configuration/updates", e), (e) => {
		r(e);
		let t = lr(e);
		e.state === "error" ? f(J("settings:releaseUpdates.check"), t) : u(t || J("settings:releaseUpdates.checkDone"));
	}, (t) => {
		let n = q(t);
		r({
			...e,
			state: "error"
		}), l.setError(n), f(J("settings:releaseUpdates.check"), n);
	}), E = s >= co ? J("settings:releaseUpdates.connectionLost") : "", D = l.error || E || _.error, ee = lr(n), O = n.installation_code === "standalone" && (n.state === "available" || i.state !== "idle") ? n.package_kind : void 0, k = O === "update" ? J("settings:releaseUpdates.updatePackageHelp") : O === "full" ? J("settings:releaseUpdates.includesMediaTools") : O === "installer" ? J("settings:releaseUpdates.installerHelp") : "", ne = i.state === "downloading" && i.total ? `${((i.downloaded || 0) / 1048576).toFixed(1)} / ${(i.total / 1048576).toFixed(1)} MB` : `${i.progress}%`;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "releaseUpdates",
		guide: "updates",
		title: J("settings:releaseUpdates.check"),
		aside: /* @__PURE__ */ (0, $.jsx)(gt, {
			tone: D || n.state === "error" || i.state === "error" || _.job.state === "timeout" ? "error" : g || y ? "progress" : _.job.state === "done" ? "success" : n.state === "available" ? "warning" : n.state === "unchecked" ? "neutral" : "success",
			children: D || n.state === "error" || i.state === "error" ? J("settings:releaseUpdates.checkIncomplete") : _.job.state === "timeout" ? J("settings:releaseUpdates.updateIncomplete") : g ? J("settings:releaseUpdates.preparing") : y ? J("settings:releaseUpdates.updating") : _.job.state === "done" ? J("settings:releaseUpdates.updated") : i.state === "ready" ? J("settings:releaseUpdates.readyToInstall") : n.state === "available" ? J("settings:releaseUpdates.updateAvailable") : n.state === "unchecked" ? J("settings:releaseUpdates.notChecked") : J("settings:releaseUpdates.checkDone")
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(ye, { children: [
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.currentVersion"),
					children: _.job.state === "done" ? _.job.version : n.current_version
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.installation"),
					children: sr(`release.installation.${n.installation_code}`, n.installation)
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.channel"),
					children: sr(`release.channel.${n.channel_code}`, n.channel)
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.latestVersion"),
					children: n.latest_version || J("settings:shared.notFound")
				}),
				O ? /* @__PURE__ */ (0, $.jsxs)(j, {
					term: J("settings:releaseUpdates.package"),
					children: [J(O === "update" ? "settings:releaseUpdates.appUpdatePackage" : O === "installer" ? "settings:releaseUpdates.macosDiskImage" : "settings:releaseUpdates.appAndTools"), n.asset_size ? ` · ${(n.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			k ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: k }) }) : null,
			n.state === "unchecked" && !n.checked_at && !D && i.state === "idle" ? null : /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					n.checked_at ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:releaseUpdates.checkedAt", { time: (/* @__PURE__ */ new Date(n.checked_at * 1e3)).toLocaleString(xn) }) }) : null,
					_.job.state === "done" ? null : n.state === "available" && !D ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(F, {
						tone: "info",
						title: J("settings:releaseUpdates.updateAvailable"),
						children: ee
					}), n.notes?.length ? /* @__PURE__ */ (0, $.jsx)(mo, { notes: n.notes }) : null] }) : D || n.state === "error" ? /* @__PURE__ */ (0, $.jsx)(A, { children: D || ee }) : n.state === "unchecked" ? null : /* @__PURE__ */ (0, $.jsx)(N, {
						role: "status",
						children: ee
					}),
					n.state === "available" && !D && !v && _.job.state === "idle" && n.steps?.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(te, {
						label: J("settings:releaseUpdates.updateOnHost"),
						steps: n.steps.map((e) => ({
							...e,
							text: sr(`release.dockerStep.${e.id}`, e.text)
						}))
					}), /* @__PURE__ */ (0, $.jsx)(N, { children: (n.one_click?.reason ? K(n.one_click, "reason") : "") || J("settings:releaseUpdates.watchtowerHint") })] }) : null,
					/* @__PURE__ */ (0, $.jsx)(io, { job: _.job }),
					i.state === "error" ? /* @__PURE__ */ (0, $.jsx)(A, { children: Dn(i) }) : null,
					i.state !== "idle" && i.state !== "error" ? /* @__PURE__ */ (0, $.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, $.jsx)(Ke, {
								label: J("settings:releaseUpdates.progressLabel"),
								value: i.progress,
								stops: so
							}),
							/* @__PURE__ */ (0, $.jsxs)(N, { children: [
								J("settings:releaseUpdates.progressSteps"),
								" ",
								Dn(i)
							] }),
							/* @__PURE__ */ (0, $.jsx)(N, { children: /* @__PURE__ */ (0, $.jsx)(d, { value: ne }) })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, $.jsx)(he, {
							href: "https://peach.video/#download",
							children: J("settings:shared.officialSite")
						}),
						/* @__PURE__ */ (0, $.jsx)(he, {
							href: "https://github.com/peach-mitao/peach",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, $.jsx)(he, {
							href: n.release_url || lo,
							children: J("settings:releaseUpdates.releasePage")
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)(p, {
						variant: "ghost",
						onClick: () => document.dispatchEvent(new Event(ao)),
						children: J("settings:releaseUpdates.whatsNew")
					}),
					/* @__PURE__ */ (0, $.jsx)(p, {
						variant: i.state === "ready" || v || n.state === "available" && b ? "secondary" : "primary",
						disabled: g || y,
						onClick: T,
						...G(l.busy === "check"),
						children: J("settings:releaseUpdates.check")
					}),
					_.job.state === "done" ? /* @__PURE__ */ (0, $.jsx)(p, {
						variant: "primary",
						onClick: () => window.location.reload(),
						children: J("settings:releaseUpdates.refreshPage")
					}) : v ? /* @__PURE__ */ (0, $.jsx)(p, {
						variant: "primary",
						onClick: x,
						...G(y || _.busy),
						children: J("settings:releaseUpdates.oneClickUpdate")
					}) : null,
					n.state === "available" && n.in_app_update && i.state !== "ready" ? /* @__PURE__ */ (0, $.jsx)(p, {
						variant: "primary",
						onClick: w,
						...G(g || l.busy === "download"),
						children: J("settings:releaseUpdates.downloadAndInstall")
					}) : n.state === "available" && b && n.asset_url ? /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "primary",
						href: n.asset_url,
						children: J("settings:releaseUpdates.downloadNewVersion")
					}) : null,
					i.state === "ready" ? /* @__PURE__ */ (0, $.jsx)(p, {
						variant: "primary",
						onClick: C,
						children: J("settings:releaseUpdates.restartToInstall")
					}) : null
				]
			})
		]
	});
}
// src/react/settings/retention-settings.tsx
var go = "/api/configuration/retention", _o = ["retention-settings"], vo = [
	2,
	5,
	10,
	20
], yo = [
	30,
	90,
	183,
	365
], bo = (e) => e === 183 ? J("settings:retention.halfYear") : e === 365 ? J("settings:retention.oneYear") : J("settings:retention.days", { count: e });
function xo({ receipt: e }) {
	let t = X({
		queryKey: _o,
		queryFn: ({ signal: e }) => U(go, e)
	}), n = Y(), r = !t.data || !!n.busy, i = (t) => void n.run("save", (e) => W(go, t, "POST", e), (t) => {
		Wn.setQueryData(_o, t), e(J("settings:shared.settingsSaved"));
	}), a = n.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:retention.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:retention.backups"),
			description: J("settings:retention.backupsHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "backupKeepSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:retention.backups"),
					selectedKey: String(t.data?.backup_keep ?? 5),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ backup_keep: Number(e) });
					},
					children: vo.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: J("settings:retention.copies", { count: e })
					}, e))
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:retention.logs"),
			description: J("settings:retention.logsHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "logDaysSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:retention.logs"),
					selectedKey: String(t.data?.log_days ?? 183),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ log_days: Number(e) });
					},
					children: yo.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: bo(e)
					}, e))
				})
			})
		})] }), a ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: a })
		}) : null]
	});
}
// src/react/settings/library-sharing-settings.tsx
function So({ value: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ul", {
		className: "list-disc space-y-2 pl-5",
		children: cr(e.fields, e.field_codes).map((e) => /* @__PURE__ */ (0, $.jsx)("li", { children: /* @__PURE__ */ (0, $.jsx)(N, { children: e }) }, e))
	}), /* @__PURE__ */ (0, $.jsx)(N, { children: K(e, "notice") })] });
}
function Co({ value: e }) {
	let t = e.participation, n = {
		"not-attempted": J("settings:librarySharing.notSent"),
		queued: J("settings:librarySharing.waiting"),
		accepted: J("settings:librarySharing.sent"),
		failed: J("settings:librarySharing.sendFailed"),
		unknown: J("settings:librarySharing.resultUnknown"),
		blocked: J("settings:librarySharing.blocked")
	}, r = {
		queued: "progress",
		accepted: "success",
		failed: "error",
		unknown: "warning",
		blocked: "warning"
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		e.consent_state === "needs-consent" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(gt, {
					tone: "warning",
					children: J("settings:librarySharing.needsConsent")
				})
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.fieldsChanged") })]
		}) : null,
		t ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)(ye, { children: /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:librarySharing.participation"),
				children: /* @__PURE__ */ (0, $.jsx)(gt, {
					"aria-label": J("settings:librarySharing.participation"),
					tone: t.pending_state ? "progress" : r[t.status] || "neutral",
					children: t.pending_state ? t.pending_state === "disabled" ? J("settings:librarySharing.pendingOff") : J("settings:librarySharing.pendingOn") : n[t.status] || J("settings:librarySharing.resultUnknown")
				})
			}) }), e.last_sent_at ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.lastSentAt", { date: new Date(e.last_sent_at).toLocaleDateString(xn) }) }) : null]
		}) : null,
		e.enabled && e.last_attempt?.snapshot_id ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, $.jsxs)(ye, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:librarySharing.snapshot"),
					children: /* @__PURE__ */ (0, $.jsx)(gt, {
						tone: r[e.last_attempt.status || ""] || "neutral",
						children: n[e.last_attempt.status || ""] || J("settings:librarySharing.waitingData")
					})
				}), /* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:librarySharing.snapshotId"),
					children: e.last_attempt.snapshot_id
				})] }),
				e.last_attempt.raw_bytes !== void 0 && e.last_attempt.compressed_bytes !== void 0 ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.snapshotSizes", {
					raw: (e.last_attempt.raw_bytes / 1024).toFixed(1),
					compressed: (e.last_attempt.compressed_bytes / 1024).toFixed(1)
				}) }) : null,
				e.last_attempt.status === "accepted" ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.acceptedHelp") }) : null
			]
		}) : null,
		e.enabled && e.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(gt, {
					tone: e.last_attempt.attempted ? "error" : "warning",
					children: e.last_attempt.attempted ? J("settings:librarySharing.uploadFailed") : J("settings:librarySharing.retryPending")
				})
			}), /* @__PURE__ */ (0, $.jsx)(A, { children: e.last_attempt.attempted ? J("settings:librarySharing.failedThisWeek") : J("settings:librarySharing.incomplete") })]
		}) : null,
		e.enabled && e.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(gt, { children: J("settings:librarySharing.waitingData") })
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.waitingDataHelp") })]
		}) : null,
		e.enabled && e.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(gt, {
					tone: "warning",
					children: J("settings:librarySharing.resultUnknown")
				})
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.resultUnknownHelp") })]
		}) : null
	] });
}
function wo({ preview: e }) {
	let t = JSON.stringify(e.data, null, 2);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.snapshotSizes", {
			raw: (e.bytes / 1024).toFixed(1),
			compressed: (e.compressed_bytes / 1024).toFixed(1)
		}) }),
		/* @__PURE__ */ (0, $.jsx)(Ur, {
			code: t,
			language: "json",
			label: J("settings:librarySharing.previewLabel"),
			maxCharacters: 24e3
		}),
		t.length > 24e3 ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.truncated") }) : null
	] });
}
// src/react/settings/seed-sharing-details.tsx
function To() {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)("ul", {
			className: "list-disc space-y-2 pl-5",
			children: [
				"works",
				"entities",
				"decisions",
				"images",
				"sources"
			].map((e) => /* @__PURE__ */ (0, $.jsx)("li", { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J(`settings:seedSharing.${e}`) }) }, e))
		}),
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.excluded") }),
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.independent") }),
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.notice") })
	] });
}
function Eo({ value: e }) {
	let t = e.last_attempt.status;
	return /* @__PURE__ */ (0, $.jsxs)(V, {
		divided: !0,
		children: [
			/* @__PURE__ */ (0, $.jsx)(gt, {
				className: "self-start",
				tone: t === "failed" ? "error" : t === "accepted" ? "success" : "neutral",
				children: J(t ? `settings:seedSharing.status.${t}` : "settings:librarySharing.notSent")
			}),
			t === "accepted" ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.acceptedHelp") }) : null,
			e.name_candidates && Object.values(e.name_candidates).some(Boolean) ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.names", { ...e.name_candidates }) }) : null
		]
	});
}
function Do({ preview: e }) {
	let t = JSON.stringify(e.data, null, 2);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Ur, {
		code: t,
		language: "json",
		label: J("settings:seedSharing.previewData"),
		maxCharacters: 24e3
	}), t.length > 24e3 ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.truncated") }) : null] });
}
// src/react/settings/sharing-choice.tsx
function Oo({ label: e, description: t, selected: n, available: r, disabled: i, busy: a = !1, onChange: o }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
		label: e,
		description: t,
		children: /* @__PURE__ */ (0, $.jsx)(H, {
			"aria-label": e,
			isSelected: n,
			isDisabled: i,
			onChange: o,
			...G(a)
		})
	}) }), r === !1 ? /* @__PURE__ */ (0, $.jsx)(V, {
		divided: !0,
		children: /* @__PURE__ */ (0, $.jsx)(gt, {
			className: "self-start",
			children: J("settings:librarySharing.unavailable")
		})
	}) : null] });
}
// src/react/settings/community-sharing-settings.tsx
var ko = "/api/configuration/community-sharing", Ao = ["community-sharing"];
async function jo(e) {
	let t = await U(ko, e);
	if (!t?.library || !t.metadata) throw Error(J("settings:communitySharing.readFailed"));
	return t;
}
function Mo(e) {
	let t = JSON.stringify({
		library: e.library.data,
		public_metadata: e.metadata.data
	}, null, 2), n = URL.createObjectURL(new Blob([t], { type: "application/json" })), r = document.createElement("a");
	r.href = n, r.download = "peach-community-sharing-preview.json", r.click(), setTimeout(() => URL.revokeObjectURL(n), 1e3);
}
function No({ title: e, children: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-body-semibold text-text-primary",
			children: e
		}), t]
	});
}
function Po({ active: e, receipt: t }) {
	let n = Mr(), r = X({
		queryKey: Ao,
		enabled: e,
		queryFn: ({ signal: e }) => jo(e)
	}), [i, a] = (0, Z.useState)(null), o = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => {
		i && o.current?.focus();
	}, [i]);
	let s = Y(), c = r.data, l = c?.library.enabled === !0, u = c?.metadata.enabled === !0, d = l && u, f = c ? c.library.available && c.metadata.available : void 0, m = l !== u, h = c?.library.participation, g = !!(c && (c.library.consent_state === "needs-consent" || c.library.last_sent_at || c.library.last_attempt?.status || h?.pending_state || h?.status && h.status !== "not-attempted" || c.metadata.last_attempt.status || Object.values(c.metadata.name_candidates ?? {}).some(Boolean))), _ = (e) => n.setQueryData(Ao, e), v = () => void s.run("refresh", jo, _), y = () => void s.run("preview", async (e) => {
		let [t, n] = await Promise.all([U("/api/configuration/library-sharing/preview", e), U("/api/configuration/seed-sharing/preview", e)]);
		return {
			library: t,
			metadata: n
		};
	}, a), b = (e) => void s.run("save", (t) => W(ko, {
		enabled: e,
		...e && i ? {
			consent: !0,
			library: {
				token: i.library.token,
				schema: i.library.schema
			},
			metadata: {
				token: i.metadata.token,
				schema: i.metadata.schema
			}
		} : {}
	}, "POST", t), (e) => {
		_(e), a(null), e.failed?.length || t(J("settings:communitySharing.saved"));
	}, (e) => {
		s.setError(q(e)), r.refetch();
	});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(Oo, {
			label: J("settings:communitySharing.enable"),
			description: J("settings:communitySharing.description"),
			selected: l || u,
			available: f,
			disabled: !c,
			busy: !!s.busy,
			onChange: (e) => e ? y() : b(!1)
		}),
		m ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(gt, {
				className: "self-start",
				tone: "warning",
				children: J(l ? "settings:communitySharing.onlyStudy" : "settings:communitySharing.onlyMetadata")
			})
		}) : null,
		c && i ? /* @__PURE__ */ (0, $.jsx)("section", {
			"aria-labelledby": "community-sharing-preview",
			children: /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					/* @__PURE__ */ (0, $.jsx)("h4", {
						id: "community-sharing-preview",
						ref: o,
						tabIndex: -1,
						className: "text-body-semibold text-text-primary",
						children: J("settings:communitySharing.previewTitle")
					}),
					/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.previewSummary", {
						count: i.library.data.library.length,
						uncoded: i.library.data.coverage.uncoded_items,
						size: (i.library.bytes / 1024).toFixed(1)
					}) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.summary", {
						count: i.metadata.data.claims.length,
						omitted: i.metadata.data.omitted,
						size: (i.metadata.bytes / 1024).toFixed(1)
					}) }),
					/* @__PURE__ */ (0, $.jsx)(ce, {
						summary: J("settings:communitySharing.previewDetails"),
						children: /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 flex-col gap-6",
							children: [/* @__PURE__ */ (0, $.jsxs)(No, {
								title: J("settings:communitySharing.study"),
								children: [/* @__PURE__ */ (0, $.jsx)(So, { value: c.library }), /* @__PURE__ */ (0, $.jsx)(wo, { preview: i.library })]
							}), /* @__PURE__ */ (0, $.jsxs)(No, {
								title: J("settings:seedSharing.title"),
								children: [/* @__PURE__ */ (0, $.jsx)(To, {}), /* @__PURE__ */ (0, $.jsx)(Do, { preview: i.metadata })]
							})]
						})
					})
				]
			})
		}) : null,
		c?.failed?.length || r.isError || s.error ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: s.error || (c?.failed?.length ? J("settings:communitySharing.saveFailed") : J("settings:communitySharing.readFailed")) })
		}) : null,
		c && !i && g ? /* @__PURE__ */ (0, $.jsx)("div", {
			id: "seedSharing",
			children: /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsxs)(ce, {
					summary: J("settings:communitySharing.deliveryStatus"),
					children: [/* @__PURE__ */ (0, $.jsx)(No, {
						title: J("settings:communitySharing.study"),
						children: /* @__PURE__ */ (0, $.jsx)(Co, { value: c.library })
					}), /* @__PURE__ */ (0, $.jsx)(No, {
						title: J("settings:seedSharing.title"),
						children: /* @__PURE__ */ (0, $.jsx)(Eo, { value: c.metadata })
					})]
				})
			})
		}) : null,
		/* @__PURE__ */ (0, $.jsx)(M, {
			status: c && !i && !g ? /* @__PURE__ */ (0, $.jsx)("span", {
				id: "seedSharing",
				children: /* @__PURE__ */ (0, $.jsx)(gt, {
					"aria-label": J("settings:communitySharing.deliveryStatus"),
					children: J("settings:librarySharing.notSent")
				})
			}) : void 0,
			children: i ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				/* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					onClick: () => a(null),
					children: J("settings:shared.cancel")
				}),
				/* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					onClick: () => Mo(i),
					children: J("settings:librarySharing.downloadPreview")
				}),
				d ? null : /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "primary",
					disabled: !f,
					onClick: () => b(!0),
					...G(s.busy === "save"),
					children: J("settings:communitySharing.agree")
				})
			] }) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [g || l || u || r.isError ? /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				onClick: v,
				...G(s.busy === "refresh"),
				children: J("settings:communitySharing.refresh")
			}) : null, /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				disabled: !c,
				onClick: y,
				...G(s.busy === "preview"),
				children: J(m ? "settings:communitySharing.complete" : "settings:communitySharing.preview")
			})] })
		})
	] });
}
// src/react/settings/remote-reporting-settings.tsx
function Fo({ value: e, onChange: t, busy: n = !1 }) {
	return /* @__PURE__ */ (0, $.jsx)(Oo, {
		label: J("settings:dataSharing.reportErrors"),
		description: J("settings:dataSharing.reportErrorsHelp"),
		selected: e.usage && e.errors,
		available: e.available,
		busy: n,
		onChange: (n) => t({
			...e,
			usage: n,
			errors: n
		})
	});
}
function Io({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = Y(), a = Object.values(n.delivery ?? {}).flatMap((e) => e.last_sent_at ? [Date.parse(e.last_sent_at)] : []).filter(Number.isFinite), o = a.length ? Math.max(...a) : null;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(Fo, {
			value: n,
			busy: i.busy === "save",
			onChange: (e) => {
				i.run("save", (t) => W("/api/configuration/remote-reporting", {
					usage: e.usage,
					errors: e.errors
				}, "POST", t), (e) => {
					r(e), t(J("settings:diagnosticsReporting.saved"));
				});
			}
		}),
		/* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsxs)(ce, {
				summary: J("settings:diagnosticsReporting.fieldsAndRules"),
				children: [
					/* @__PURE__ */ (0, $.jsx)(N, { children: sr(n.field_codes?.usage ?? "", n.fields.usage) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: sr(n.field_codes?.errors ?? "", n.fields.errors) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: K(n, "notice") })
				]
			}), o === null ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.lastSentAt", { date: new Date(o).toLocaleDateString(xn) }) })]
		}),
		i.error ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: i.error })
		}) : null
	] });
}
// src/react/evilcharts/registry/charts/recharts-pie-chart.tsx
var Lo = 5, Ro = 2e3, zo = 0, Bo = "80%", Vo = 0, Ho = 0, Uo = 0, Wo = 360, Go = [], Ko = (0, Z.createContext)(null);
function qo() {
	let e = (0, Z.use)(Ko);
	if (!e) throw Error("Pie chart parts (<Pie />, <Tooltip />, …) must be used within <EvilPieChart />");
	return e;
}
function Jo({ config: e, data: t, dataKey: n, nameKey: r, children: i, className: a, chartProps: o, defaultSelectedSector: s = null, onSelectionChange: c, isLoading: l = !1 }) {
	let [u, d] = (0, Z.useState)(s), f = (0, Z.useCallback)((e) => {
		if (d(e), e === null) {
			c?.(null);
			return;
		}
		let i = t.find((t) => t[r] === e);
		i && c?.({
			dataKey: e,
			value: i[n]
		});
	}, [
		t,
		n,
		r,
		c
	]), p = (0, Z.useMemo)(() => ({
		config: e,
		data: t,
		dataKey: n,
		nameKey: r,
		isLoading: l,
		selectedSector: u,
		selectSector: f
	}), [
		e,
		t,
		n,
		r,
		l,
		u,
		f
	]);
	return /* @__PURE__ */ (0, $.jsx)(Ko, {
		value: p,
		children: /* @__PURE__ */ (0, $.jsxs)(C, {
			className: a,
			config: e,
			children: [/* @__PURE__ */ (0, $.jsx)(Ae, { isLoading: l }), /* @__PURE__ */ (0, $.jsx)(pa, {
				id: "evil-charts-pie-chart",
				accessibilityLayer: !0,
				...o,
				children: i
			})]
		})
	});
}
var Yo = () => null, Xo = (e, t) => {
	let n = null;
	return Z.Children.forEach(e, (e) => {
		if (!(0, Z.isValidElement)(e) || e.type !== Yo) return;
		let { dataKey: r, labelListProps: i } = e.props;
		n = /* @__PURE__ */ (0, $.jsx)(Ee, {
			dataKey: r ?? t,
			stroke: "none",
			fontSize: 12,
			fontWeight: 500,
			fill: "currentColor",
			className: "fill-background",
			...i
		});
	}), n;
}, Zo = ({ id: e, config: t }) => /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: Object.entries(t).map(([t, n]) => {
	let r = ln(n);
	return /* @__PURE__ */ (0, $.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, $.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	}, `${e}-colors-${t}`);
}) }), Qo = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, $.jsxs)("filter", {
	id: `${e}-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, $.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, $.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, $.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, $.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, $.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}, `${e}-glow-${t}`)) }), $o = Array.from({ length: Lo }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / Lo
})), es = (e) => {
	let { index: t = 0, ...n } = e, r = t / Lo * (Ro / 1e3);
	return /* @__PURE__ */ (0, $.jsx)(Fn.g, {
		initial: { opacity: .15 },
		animate: { opacity: [
			.15,
			.5,
			.15
		] },
		transition: {
			duration: Ro / 1e3,
			delay: r,
			repeat: 1e400,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ (0, $.jsx)(it, {
			...n,
			fill: "currentColor"
		})
	});
};
Jo.Pie = function({ variant: e = "gradient", innerRadius: t = zo, outerRadius: n = Bo, cornerRadius: r = Vo, paddingAngle: i = Ho, startAngle: a = Uo, endAngle: o = Wo, isClickable: s = !1, glowingSectors: c = Go, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = qo(), v = (0, Z.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, $.jsx)(aa, {
		data: $o,
		dataKey: "value",
		nameKey: "name",
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !1,
		shape: (e) => /* @__PURE__ */ (0, $.jsx)(es, { ...e })
	});
	let y = Xo(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(aa, {
		data: b,
		dataKey: p,
		nameKey: m,
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !0,
		style: s ? { cursor: "pointer" } : void 0,
		onClick: (e, t) => {
			if (!s) return;
			let n = f[t]?.[m];
			_(g === n ? null : n);
		},
		shape: (e) => {
			let t = f[e.index ?? 0]?.[m], n = c.includes(t), r = s && g !== null && g !== t;
			return /* @__PURE__ */ (0, $.jsx)(it, {
				...e,
				fill: `url(#${v}-colors-${t})`,
				filter: n ? `url(#${v}-glow-${t})` : void 0,
				stroke: i < 0 ? "var(--background)" : "none",
				strokeWidth: i < 0 ? 5 : 0,
				opacity: r ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...u,
		children: y
	}), /* @__PURE__ */ (0, $.jsxs)("defs", { children: [/* @__PURE__ */ (0, $.jsx)(Zo, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, $.jsx)(Qo, {
		id: v,
		glowingSectors: c
	})] })] });
}, Jo.Label = Yo, Jo.Tooltip = function({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = qo();
	return r ? null : /* @__PURE__ */ (0, $.jsx)(D, {
		defaultIndex: n,
		content: /* @__PURE__ */ (0, $.jsx)(ee, {
			nameKey: i,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}, Jo.Legend = function({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, selectedSector: a, selectSector: o } = qo();
	return /* @__PURE__ */ (0, $.jsx)(w, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, $.jsx)(T, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}, Jo.Background = function({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, $.jsx)(S, { variant: e });
};
// src/react/settings/storage-charts.tsx
var ts = {
	database: "var(--color-chart-1)",
	backups: "var(--color-chart-2)",
	playback: "var(--color-chart-3)",
	thumbnails: "var(--color-chart-4)",
	previews: "var(--color-chart-5)",
	downloads: "var(--color-chart-6)",
	follow_snapshots: "var(--color-chart-7)",
	records: "var(--color-chart-8)",
	project_archives: "var(--color-chart-9)"
}, ns = "var(--color-text-tertiary)", rs = {
	database: "bg-chart-1",
	backups: "bg-chart-2",
	playback: "bg-chart-3",
	thumbnails: "bg-chart-4",
	previews: "bg-chart-5",
	downloads: "bg-chart-6",
	follow_snapshots: "bg-chart-7",
	records: "bg-chart-8",
	project_archives: "bg-chart-9"
}, is = (e) => rn(e);
function as(e) {
	let t = e.filter((e) => ts[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: ts[e.key]
	})), n = e.filter((e) => !ts[e.key]).reduce((e, t) => e + t.bytes, 0);
	return n > 0 ? [...t, {
		key: "rest",
		label: J("settings:storageCharts.rest"),
		bytes: n,
		color: ns
	}] : t;
}
function os({ storage: e }) {
	let t = e.usage, n = as(t.categories), r = Object.fromEntries(n.map((e) => [e.key, {
		label: e.label,
		colors: _r(e.color)
	}])), i = n.map((e) => ({
		slice: e.key,
		value: e.bytes
	}));
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-5 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "relative mx-auto size-48 flex-none",
			role: "img",
			"aria-label": J("settings:storageCharts.categoryShare", { size: is(t.total_bytes) }),
			children: [/* @__PURE__ */ (0, $.jsxs)(Jo, {
				data: i,
				dataKey: "value",
				nameKey: "slice",
				config: r,
				className: "aspect-square size-48 flex-none",
				children: [/* @__PURE__ */ (0, $.jsx)(Jo.Pie, {
					innerRadius: "68%",
					outerRadius: "100%",
					paddingAngle: 1,
					cornerRadius: 3
				}), /* @__PURE__ */ (0, $.jsx)(E, {
					nameKey: "slice",
					hideLabel: !0,
					format: is
				})]
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, $.jsx)("b", {
					className: "text-title-2-medium tabular-nums text-text-primary",
					children: is(t.total_bytes)
				}), /* @__PURE__ */ (0, $.jsx)("small", {
					className: "text-caption-1-regular tabular-nums text-text-secondary",
					children: J("settings:storageCharts.fileCount", { count: t.total_files })
				})]
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-wrap gap-x-4 gap-y-1.5",
				"aria-label": J("settings:storageCharts.legend"),
				children: n.map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
					className: "flex items-center gap-1.5 text-caption-1-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, $.jsx)("i", {
							"aria-hidden": !0,
							className: `${vt} ${rs[e.key] || "bg-text-tertiary"}`
						}),
						e.label,
						/* @__PURE__ */ (0, $.jsx)("span", {
							className: "tabular-nums text-text-primary",
							children: is(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, $.jsx)(ss, { storage: e })]
		})]
	});
}
function ss({ storage: e }) {
	if (e.total_bytes === null || e.free_bytes === null || !e.usage) return null;
	let t = Math.min(e.usage.total_bytes, e.total_bytes), n = e.free_bytes, r = Math.max(0, e.total_bytes - n - t), i = {
		peach: {
			label: J("settings:storageCharts.peachData"),
			colors: _r("var(--color-border-focus-ring)")
		},
		others: {
			label: J("settings:storageCharts.otherFiles"),
			colors: _r(ns)
		},
		free: {
			label: J("settings:storageCharts.free"),
			colors: _r("var(--color-background-tertiary-default)")
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: J("settings:storageCharts.diskSummary", {
				total: is(e.total_bytes),
				systemDrive: e.system_drive ? J("settings:storageCharts.systemDrive") : "",
				share: ((t) => {
					let n = t / e.total_bytes * 100;
					return n < .1 ? J("settings:storageCharts.underTenthPercent") : `${n.toFixed(+(n < 10))}%`;
				})(t),
				free: is(n)
			})
		}), /* @__PURE__ */ (0, $.jsxs)(me, {
			data: [{
				disk: J("settings:libraryIcons.hardDrive"),
				peach: t,
				others: r,
				free: n
			}],
			config: i,
			layout: "horizontal",
			stackType: "percent",
			barRadius: 4,
			chartProps: { margin: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			} },
			className: "aspect-auto h-6 flex-none",
			children: [
				/* @__PURE__ */ (0, $.jsx)(me.YAxis, {
					dataKey: "disk",
					hide: !0
				}),
				/* @__PURE__ */ (0, $.jsx)(me.XAxis, { hide: !0 }),
				/* @__PURE__ */ (0, $.jsx)(me.Bar, { dataKey: "peach" }),
				/* @__PURE__ */ (0, $.jsx)(me.Bar, { dataKey: "others" }),
				/* @__PURE__ */ (0, $.jsx)(me.Bar, { dataKey: "free" }),
				/* @__PURE__ */ (0, $.jsx)(E, {
					hideLabel: !0,
					format: is
				})
			]
		})]
	});
}
// src/react/components/configuration-fields.tsx
function cs({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: s, children: c }) {
	let l = `${e}-label`;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, $.jsx)(Te, {
				id: l,
				elementType: "span",
				children: t
			}),
			/* @__PURE__ */ (0, $.jsx)(at, {
				id: e,
				"aria-labelledby": l,
				orientation: "horizontal",
				className: $e,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: s,
				children: i.map((e) => /* @__PURE__ */ (0, $.jsx)(o, {
					value: e.value,
					className: Qe,
					children: e.label
				}, e.value))
			}),
			c
		]
	});
}
function ls({ prefix: e, suffix: t, unit: n, fieldClassName: r, ...i }) {
	let a = () => /* @__PURE__ */ (0, $.jsx)("span", {
		"aria-hidden": n ? !0 : void 0,
		className: Wt("shrink-0 text-body-regular text-text-secondary", n ? "w-10" : "pr-1"),
		children: n ? /* @__PURE__ */ (0, $.jsx)("span", {
			className: "absolute inset-y-0 right-0 flex items-center border-l border-border-button-default px-2",
			children: n
		}) : t
	});
	return /* @__PURE__ */ (0, $.jsx)(P, {
		...i,
		fieldClassName: r,
		leadingAddon: e ? /* @__PURE__ */ (0, $.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: n || t ? a : void 0
	});
}
// src/react/settings/storage-budget-settings.tsx
var us = [
	[
		"minimum_free_gib",
		J("settings:storageLimits.reservedSpace"),
		J("settings:storageLimits.reservedSpaceHelp")
	],
	[
		"data_max_gib",
		J("settings:storageLimits.dataLimit"),
		J("settings:storageLimits.dataLimitHelp")
	],
	[
		"cache_max_gib",
		J("settings:storageLimits.cacheLimit"),
		J("settings:storageLimits.cacheLimitHelp")
	]
], ds = (e) => cr(e.reasons, e.reason_codes?.map((e) => e?.code ?? null), e.reason_codes?.map((e) => e?.params ?? null));
function fs({ initial: e, after: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(e.policy), a = Y(K(e, "error")), [o, s] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		if (!r?.enabled || e.policy?.external_cache_path) return;
		let t = new AbortController();
		return s(J("settings:storageLimits.readingCloudDrive")), U("/api/configuration/storage/external-cache", t.signal).then((e) => {
			if (t.signal.aborted) return;
			let n = e.path;
			n ? (i((e) => e && !e.external_cache_path ? {
				...e,
				external_cache_path: n
			} : e), s(J("settings:storageLimits.cacheDetected"))) : s(J("settings:storageLimits.cloudDriveMissing"));
		}).catch((e) => {
			t.signal.aborted || s(J("settings:storageLimits.cacheReadFailed", { error: q(e) }));
		}), () => t.abort();
	}, [r?.enabled, e.policy?.external_cache_path]);
	let c = (e, t) => i((n) => n && {
		...n,
		[e]: t
	}), l = e.last_check;
	return r ? /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "storageBudgetSettings",
		title: J("settings:storageLimits.title"),
		onSubmit: (e) => {
			e.preventDefault(), a.run("save", (e) => W("/api/configuration/storage/policy", r, "POST", e), (e) => {
				s(""), t(e), n(J("settings:storageLimits.saved"));
			});
		},
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:storageLimits.enable"),
				description: J("settings:storageLimits.enableHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": J("settings:storageLimits.enable"),
					isSelected: r.enabled,
					isDisabled: !!a.busy,
					onChange: (e) => c("enabled", e)
				})
			}), r.enabled ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [us.map(([e, t, n]) => /* @__PURE__ */ (0, $.jsx)(B, {
				label: t,
				description: n,
				children: /* @__PURE__ */ (0, $.jsx)(ls, {
					"aria-label": J("settings:storageLimits.limitGib", { label: t }),
					unit: "GiB",
					inputMode: "numeric",
					pattern: "[0-9]*",
					size: "small",
					className: "w-32 shrink-0",
					placeholder: J(e === "minimum_free_gib" ? "settings:shared.auto" : "settings:shared.noLimit"),
					value: r[e] ? String(r[e]) : "",
					onChange: (t) => c(e, Number(t)),
					isDisabled: !!a.busy
				})
			}, e)), /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:storageLimits.autoClean"),
				description: J("settings:storageLimits.autoCleanHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": J("settings:storageLimits.autoClean"),
					isSelected: r.auto_clean,
					isDisabled: !!a.busy,
					onChange: (e) => c("auto_clean", e)
				})
			})] }) : null] }),
			r.enabled ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:storageLimits.externalCache"),
					hint: o || J("settings:storageLimits.externalCacheHelp"),
					value: r.external_cache_path,
					size: "small",
					className: "w-full",
					placeholder: J("settings:shared.notSet"),
					onChange: (e) => c("external_cache_path", e),
					isDisabled: !!a.busy
				})
			}) : null,
			r.enabled && r.external_cache_path ? /* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:storageLimits.externalCacheLimit"),
				description: J("settings:storageLimits.externalCacheLimitHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(ls, {
					"aria-label": J("settings:storageLimits.externalCacheLimitGib"),
					unit: "GiB",
					size: "small",
					className: "w-32 shrink-0",
					placeholder: J("settings:shared.noLimit"),
					inputMode: "numeric",
					pattern: "[0-9]*",
					value: r.external_cache_max_gib ? String(r.external_cache_max_gib) : "",
					onChange: (e) => c("external_cache_max_gib", Number(e)),
					isDisabled: !!a.busy
				})
			}) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					r.enabled ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:storageLimits.limitsHelp") }) : null,
					r.enabled && l?.paused ? /* @__PURE__ */ (0, $.jsx)(A, { children: J("settings:storageLimits.pausedWithReasons", { reasons: ds(l).join(J("shell:format.semicolonSeparator")) }) }) : null,
					a.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: a.error }) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				...G(a.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	}) : /* @__PURE__ */ (0, $.jsx)(L, {
		title: J("settings:storageLimits.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: a.error || J("settings:storageLimits.loadFailed") }) })
	});
}
// src/react/settings/storage-settings.tsx
var ps = "/api/configuration/storage", ms = 1500, hs = 36e5, gs = 864e5, _s = (e) => e instanceof f && Mt(e.body)?.target || q(e);
function vs(e) {
	if (e.free_bytes === null || e.total_bytes === null) return J("settings:shared.notFound");
	let t = J("settings:storageSpace.diskFreeOfTotal", {
		free: rn(e.free_bytes),
		total: rn(e.total_bytes)
	});
	return e.system_drive ? J("settings:storageSpace.systemDriveSuffix", { summary: t }) : t;
}
var ys = (e) => e.cleanable && e.reclaimable > 0, bs = (e) => ({
	...e,
	label: sr(`storage.category.${e.key}.label`, e.label),
	description: sr(`storage.category.${e.key}.description`, e.description),
	note: sr(`storage.category.${e.key}.note`, e.note)
}), xs = (e) => [K(e, "message"), ...(e.notes ?? []).map((t, n) => sr(e.note_codes?.[n]?.code ?? "", t, e.note_codes?.[n]?.params))], Ss = (e) => ({
	text: K(e, "text"),
	command: K(e, "command")
});
function Cs({ job: e }) {
	let t = e.files || 0, n = e.expected_files || 0, r = {
		files: /* @__PURE__ */ (0, $.jsx)(d, { value: t }),
		size: /* @__PURE__ */ (0, $.jsx)(d, {
			value: e.bytes || 0,
			format: rn
		})
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [n ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Ke, {
			label: J("settings:storageSpace.measureProgress"),
			value: Math.min(t, n * .99),
			max: n
		}), /* @__PURE__ */ (0, $.jsx)(N, { children: vr("settings:storageSpace.measuringOfLast", {
			count: t,
			expected: n
		}, r) })] }) : /* @__PURE__ */ (0, $.jsx)(l, {
			kind: "radar",
			label: J("settings:storageSpace.measuringLabel")
		}), n ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: vr("settings:storageSpace.measuring", { count: t }, r) })]
	});
}
var ws = /* @__PURE__ */ new Set([
	"follow_snapshots",
	"source_snapshots",
	"project_archives"
]);
function Ts({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = ys(e), a = e.key === "follow_snapshots", o = a || e.key === "project_archives", s = e.cleanable ? e.reclaimable > 0 ? J("settings:storageSpace.afterCleanup", { effect: e.note }) : J("settings:storageSpace.nothingToClean") : o ? e.note : J("settings:storageSpace.cannotClean", { reason: e.note });
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-category": e.key,
		className: "flex min-h-13 w-full items-start gap-3 border-b border-separator-border py-2.5 pr-3 last:border-b-0",
		children: [
			e.cleanable ? /* @__PURE__ */ (0, $.jsx)(O, {
				"aria-label": J("settings:storageSpace.cleanCategory", { category: e.label }),
				isSelected: t,
				isDisabled: !i || n,
				onChange: r,
				className: "mt-0.5"
			}) : /* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: "w-4 shrink-0"
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("p", {
						className: "flex items-center gap-2 text-body-regular text-text-primary",
						children: [/* @__PURE__ */ (0, $.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2.5 shrink-0 rounded-xs ${rs[e.key] || "bg-text-tertiary"}`
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `storage.category.${e.key}.label`,
							children: e.label
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						"data-copy-key": `storage.category.${e.key}.description`,
						className: "text-body-2-regular text-text-secondary",
						children: e.description
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						"data-copy-key": `storage.category.${e.key}.${e.cleanable && !i ? "empty" : "note"}`,
						className: "text-caption-1-regular text-text-tertiary",
						children: s
					}),
					a ? /* @__PURE__ */ (0, $.jsx)(ke, {
						href: `${qe}#repair-item-follow-evidence`,
						size: "xs",
						trailingIcon: yn,
						className: "mt-1 self-start whitespace-normal",
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": "storageSpace.reviewFollowSnapshots",
							children: J("settings:storageSpace.reviewFollowSnapshots")
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5 text-right",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					value: e.bytes,
					format: rn,
					className: "text-body-regular text-text-primary"
				}), i ? /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: [
						J("settings:storageSpace.canFree"),
						" ",
						rn(e.reclaimable)
					]
				}) : null]
			})
		]
	});
}
function Es({ initial: e, receipt: t, active: n = !0 }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(/* @__PURE__ */ new Set()), l = Y(), u = r.job.state !== "idle", d = (0, Z.useRef)(u), f = (0, Z.useRef)(!1);
	(0, Z.useEffect)(() => {
		n && !f.current && (f.current = !0, e.usage || e.job.state !== "idle" || document.body.classList.contains("peach-guiding") || l.run("measure", (e) => W(`${ps}/measure`, {}, "POST", e), i));
	}, [
		n,
		e,
		l.run
	]), (0, Z.useEffect)(() => {
		if (!u) return;
		let e = new AbortController();
		return Bn({
			signal: e.signal,
			everyMs: ms,
			limitMs: hs,
			read: (e) => U(ps, e),
			apply: i,
			done: (e) => e.job.state === "idle"
		}), () => e.abort();
	}, [u]), (0, Z.useEffect)(() => {
		u ? d.current = !0 : d.current && (d.current = !1, c(/* @__PURE__ */ new Set()), r.job.error || t(K(r.job, "message") || J("settings:storageSpace.measured")));
	}, [u]);
	let m = () => void l.run("measure", (e) => W(`${ps}/measure`, {}, "POST", e), i), h = r.usage && {
		...r.usage,
		categories: r.usage.categories.map(bs)
	}, g = h?.categories.filter(ys) ?? [], _ = g.filter((e) => s.has(e.key)), v = (e, t) => {
		if (!e.length) return;
		let n = e.reduce((e, t) => e + t.reclaimable, 0);
		Bt({
			title: t,
			body: J("settings:storageSpace.cleanBody", {
				size: rn(n),
				items: On(e.map((e) => J("settings:storageSpace.cleanItem", {
					label: e.label,
					size: rn(e.reclaimable),
					effect: e.note
				})))
			}),
			confirmLabel: J("settings:storageSpace.cleanSize", { size: rn(n) }),
			holdToConfirm: !0,
			danger: e.some((e) => e.key === "backups"),
			onConfirm: async () => i(await W(`${ps}/clean`, { categories: e.map((e) => e.key) }))
		});
	}, y = () => void l.run("relocate", async (e) => {
		let t = await Rn(r.data_root, (t) => W(Le, t, "POST", e), "data");
		if (!t) return;
		let n = r.usage ? rn(r.usage.total_bytes) : "";
		await Bt({
			title: J("settings:storageSpace.moveDataDirectory"),
			body: J("settings:storageSpace.moveConfirm", {
				size: n,
				from: r.data_root,
				to: t
			}),
			confirmLabel: J("settings:storageSpace.moveDataDirectory"),
			onConfirm: async () => {
				try {
					o(lr(await W(`${ps}/relocate`, { target: t })));
				} catch (e) {
					throw Error(_s(e));
				}
			}
		});
	}, () => void 0), b = r.relocation.last, x = b && (b.state === "error" || (b.notes?.length ?? 0) > 0 || Date.now() - b.finished_at * 1e3 < gs), S = h?.categories.find((e) => e.key === r.job.category)?.label, C = a || (r.job.state === "cleaning" ? J("settings:storageSpace.cleaningCategory", { category: S || "" }) : r.job.state === "measuring" ? J("settings:storageSpace.measuringStatus") : _.length ? J("settings:storageSpace.selectedSummary", {
		count: _.length,
		size: rn(_.reduce((e, t) => e + t.reclaimable, 0))
	}) : h ? J("settings:storageSpace.measuredAt", { time: (/* @__PURE__ */ new Date(h.measured_at * 1e3)).toLocaleString(xn) }) : ""), w = u || !!a, T = (e) => (t) => c((n) => {
		let r = new Set(n);
		return t ? r.add(e) : r.delete(e), r;
	});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)(L, {
		id: "storageSettings",
		guide: "storage",
		title: J("settings:diskUsage.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(ye, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:shared.dataDirectory"),
				children: /* @__PURE__ */ (0, $.jsx)(He, {
					path: r.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:diskUsage.disk"),
				children: vs(r)
			})] }),
			/* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					r.job.state === "measuring" ? /* @__PURE__ */ (0, $.jsx)(Cs, { job: r.job }) : null,
					h?.capacity_error ? /* @__PURE__ */ (0, $.jsxs)(A, { children: [J("settings:storageSpace.capacityIncomplete"), h.capacity_error] }) : null,
					h?.allocated_bytes == null ? null : /* @__PURE__ */ (0, $.jsxs)(N, { children: [
						J("settings:storageSpace.allocatedOnDisk"),
						" ",
						rn(h.allocated_bytes)
					] }),
					h ? /* @__PURE__ */ (0, $.jsxs)("div", {
						"data-storage-result": "",
						className: Pt({
							variant: "outlined",
							padding: "none",
							className: "flex flex-col"
						}),
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "border-b border-separator-border p-4",
							children: /* @__PURE__ */ (0, $.jsx)(os, { storage: h ? {
								...r,
								usage: h
							} : r })
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-col pl-4",
							children: h.categories.filter((e) => e.files > 0 || !ws.has(e.key)).map((e) => /* @__PURE__ */ (0, $.jsx)(Ts, {
								category: e,
								selected: s.has(e.key),
								disabled: w,
								onToggle: T(e.key)
							}, e.key))
						})]
					}) : r.job.state === "measuring" ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:diskUsage.emptyHelp") }),
					r.relocation.available ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: K(r.relocation, "message") }),
					!r.relocation.available && r.relocation.steps?.length ? /* @__PURE__ */ (0, $.jsx)(te, {
						label: J("settings:storageSpace.moveOnHost"),
						steps: r.relocation.steps.map(Ss)
					}) : null,
					r.job.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: K(r.job, "message") }) : null,
					l.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: l.error }) : null,
					x && b ? b.state === "error" ? /* @__PURE__ */ (0, $.jsx)(A, { children: xs(b).join(J("shell:format.semicolonSeparator")) }) : /* @__PURE__ */ (0, $.jsx)(N, { children: xs(b).join(J("shell:format.semicolonSeparator")) }) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: C ? /* @__PURE__ */ (0, $.jsx)("p", {
					role: a ? "status" : void 0,
					children: C
				}) : null,
				children: [
					h ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(p, {
						variant: "secondary",
						disabled: w || !_.length,
						...G(r.job.state === "cleaning" && _.length > 0),
						onClick: () => v(_, J("settings:storageSpace.cleanSelectedTitle")),
						children: J("settings:storageSpace.cleanSelected")
					}), /* @__PURE__ */ (0, $.jsx)(p, {
						variant: "secondary",
						disabled: w || !g.length,
						onClick: () => v(g, J("settings:storageSpace.cleanAllTitle")),
						children: J("settings:storageSpace.cleanAll")
					})] }) : null,
					/* @__PURE__ */ (0, $.jsx)(p, {
						variant: "secondary",
						disabled: w || !r.relocation.available || !h,
						onClick: y,
						...G(l.busy === "relocate"),
						children: J("settings:diskUsage.changeLocation")
					}),
					/* @__PURE__ */ (0, $.jsx)(p, {
						disabled: !!a || r.job.state === "cleaning",
						onClick: m,
						...G(l.busy === "measure" || r.job.state === "measuring"),
						children: J(h ? "settings:diskUsage.measureAgain" : "settings:diskUsage.measure")
					})
				]
			})
		]
	}), r.budget ? /* @__PURE__ */ (0, $.jsx)(fs, {
		initial: r.budget,
		after: i,
		receipt: t
	}) : null] });
}
// src/react/settings/upgrade-repairs.tsx
var Ds = {
	idle: J("settings:upgradeRepairs.idle"),
	paused: J("settings:upgradeRepairs.paused"),
	pending: J("settings:upgradeRepairs.pending"),
	running: J("settings:upgradeRepairs.repairing"),
	failed: J("settings:repairCenter.needsRetry"),
	deferred: J("settings:repairCenter.deferred"),
	review: J("settings:upgradeRepairs.needsReview"),
	complete: J("settings:shared.completed"),
	unavailable: J("settings:upgradeRepairs.unavailable")
}, Os = (e) => vr("settings:upgradeRepairs.itemCount", { count: e }, { value: /* @__PURE__ */ (0, $.jsx)(d, { value: e }) });
function ks({ lastCapacityCheckPassed: e = !1 } = {}) {
	let { snapshot: t } = Sr(), [n, r] = (0, Z.useState)(null), i = Y();
	(0, Z.useEffect)(() => r(null), [t]);
	let a = n ?? t?.repairs, o = a?.state || "pending", s = a?.message_code === "labels.upgradeRepairs.mediaPaused" && e, c = a?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, l = a?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, u = a?.items.reduce((e, t) => e + (t.deferred || 0), 0) || 0, d = a?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0, f = (e) => void i.run(e, (t) => W(e === "retry" ? "/api/configuration/upgrade-repairs/retry" : "/api/configuration/upgrade-repairs", e === "retry" ? {} : { action: e }, "POST", t), (e) => {
		r(e), Ft();
	});
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "upgradeRepairs",
		title: J("settings:upgradeRepairs.title"),
		aside: /* @__PURE__ */ (0, $.jsx)(gt, {
			tone: o === "failed" ? "error" : o === "running" ? "progress" : o === "review" ? "warning" : o === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, $.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${o}.status`,
				children: Ds[o] || J("settings:shared.notFound")
			}, o)
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(ye, { children: [
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:upgradeRepairs.toDo"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: Os(c) })
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:shared.failed"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: Os(l) })
				}),
				u ? /* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:upgradeRepairs.deferred"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: Os(u) })
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:upgradeRepairs.toReview"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: Os(d) })
				})
			] }),
			s && !i.error ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:upgradeRepairs.capacityReady") }) }) : a?.message || i.error ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: i.error || K(a, "message") }) }) : null,
			o === "running" ? /* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:upgradeRepairs.runningHelp") }), /* @__PURE__ */ (0, $.jsx)(yt, {})] }) : null,
			o === "deferred" ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:upgradeRepairs.deferredHelp") }) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: d ? /* @__PURE__ */ (0, $.jsx)(he, {
					href: "/api/configuration/upgrade-repairs/review",
					children: J("settings:upgradeRepairs.downloadReviewLog")
				}) : null,
				children: [
					/* @__PURE__ */ (0, $.jsx)(ke, {
						href: qe,
						size: "small",
						trailingIcon: yn,
						children: J("settings:upgradeRepairs.repairCenterLink")
					}),
					/* @__PURE__ */ (0, $.jsx)(p, {
						size: "small",
						disabled: !a?.available || !!i.busy,
						onClick: () => f(a?.enabled ? "pause" : "start"),
						children: a?.enabled ? J("settings:upgradeRepairs.pause") : a?.started ? J("settings:upgradeRepairs.resume") : J("settings:upgradeRepairs.start")
					}),
					/* @__PURE__ */ (0, $.jsx)(p, {
						size: "small",
						variant: "secondary",
						disabled: !a?.available || o === "running" || !!i.busy || !l && o !== "failed",
						onClick: () => f("retry"),
						children: J("settings:upgradeRepairs.retryFailed")
					})
				]
			})
		]
	});
}
// src/react/settings/maintenance-settings.tsx
var As = [
	["6", J("settings:automaticUpdates.every6Hours")],
	["24", J("settings:automaticUpdates.daily")],
	["168", J("settings:automaticUpdates.weekly")]
];
function js({ entry: e, children: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: e.id,
		"aria-labelledby": `${e.id}-title`,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("h3", {
			id: `${e.id}-title`,
			className: "px-3 text-title-3-medium text-text-primary",
			children: /* @__PURE__ */ (0, $.jsx)("span", { children: e.label })
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex min-w-0 flex-col gap-6",
			children: t
		})]
	});
}
function Ms({ data: e, receipt: t, reopenTutorial: n, active: r }) {
	let i = {
		id: "maintenance-updates",
		label: J("settings:maintenanceGroups.updates")
	}, a = {
		id: "maintenance-runtime",
		label: J("settings:maintenanceGroups.runtime")
	}, o = {
		id: "maintenance-backups",
		label: J("settings:maintenanceGroups.backups")
	}, s = {
		id: "maintenance-privacy",
		label: J("settings:maintenanceGroups.privacy")
	}, c = [
		i,
		a,
		...e.storage ? [o] : [],
		s,
		...e.uninstall ? [{
			id: "uninstallPeach",
			label: J("settings:uninstall.title")
		}] : []
	];
	return /* @__PURE__ */ (0, $.jsxs)(rt, {
		inline: !0,
		label: J("settings:configurationPage.contents"),
		entries: c,
		children: [
			/* @__PURE__ */ (0, $.jsxs)(js, {
				entry: i,
				children: [
					e.updates ? /* @__PURE__ */ (0, $.jsx)(ho, {
						initial: e.updates,
						initialJob: e.update_job
					}) : null,
					e.automatic_updates ? /* @__PURE__ */ (0, $.jsx)(Ps, {
						initial: e.automatic_updates,
						receipt: t
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(ks, { lastCapacityCheckPassed: e.storage?.budget?.last_check?.paused === !1 })
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(js, {
				entry: a,
				children: [
					/* @__PURE__ */ (0, $.jsx)(Ga, {
						active: r,
						initial: e.startup,
						receipt: t
					}),
					e.storage ? /* @__PURE__ */ (0, $.jsx)(Es, {
						initial: e.storage,
						receipt: t,
						active: r
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(Fs, {
						facts: e.facts,
						receipt: t
					}),
					/* @__PURE__ */ (0, $.jsx)(Ns, {
						receipt: t,
						reopenTutorial: n
					})
				]
			}),
			e.storage ? /* @__PURE__ */ (0, $.jsxs)(js, {
				entry: o,
				children: [/* @__PURE__ */ (0, $.jsx)($a, { receipt: t }), /* @__PURE__ */ (0, $.jsx)(xo, { receipt: t })]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(js, {
				entry: s,
				children: [e.remote_reporting ? /* @__PURE__ */ (0, $.jsx)(L, {
					guide: "diagnostics-reporting",
					title: J("settings:dataSharing.diagnosticsTitle"),
					children: /* @__PURE__ */ (0, $.jsx)(Io, {
						initial: e.remote_reporting,
						receipt: t
					})
				}) : null, /* @__PURE__ */ (0, $.jsx)(L, {
					id: "librarySharing",
					guide: "reporting",
					title: J("settings:dataSharing.communityTitle"),
					children: /* @__PURE__ */ (0, $.jsx)(Po, {
						active: r,
						receipt: t
					})
				})]
			}),
			e.uninstall ? /* @__PURE__ */ (0, $.jsx)(Is, {
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
function Ns({ reopenTutorial: e }) {
	return /* @__PURE__ */ (0, $.jsx)("section", {
		"aria-label": J("settings:tour.guidedTour"),
		className: "w-full",
		children: /* @__PURE__ */ (0, $.jsx)(ut, { children: /* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:tour.guidedTour"),
			description: J("settings:tour.reopenDescription"),
			children: /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				onClick: () => void e(),
				children: J("settings:tour.reopen")
			})
		}) }) })
	});
}
function Ps({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.mode), [i, a] = (0, Z.useState)(e.interval_hours), o = Y(e.error ? K(e, "error") : e.error), s = (r) => {
		r.preventDefault(), e.available && o.run("save", (e) => W("/api/configuration/automatic-updates", {
			mode: n,
			interval_hours: i
		}, "POST", e), () => t(J("settings:shared.settingsSaved")));
	}, c = e.available ? e.download_available ? J("settings:automaticUpdates.confirmInstall") : void 0 : J("settings:automaticUpdates.needsTray");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "automaticUpdates",
		guide: "automatic-updates",
		title: J("settings:autoUpdate.title"),
		onSubmit: s,
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:autoUpdate.autoCheck"),
					description: J("settings:autoUpdate.autoCheckHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:autoUpdate.autoCheck"),
						isSelected: n !== "off",
						isDisabled: !e.available,
						onChange: (e) => r(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:autoUpdate.autoDownload"),
					description: J("settings:autoUpdate.autoDownloadHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:autoUpdate.autoDownload"),
						isSelected: n === "download",
						isDisabled: !e.available || !e.download_available || n === "off",
						onChange: (e) => r(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:autoUpdate.frequency"),
					description: c,
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:autoUpdate.frequency"),
						selectedKey: String(i),
						isDisabled: !e.available || n === "off",
						onSelectionChange: (e) => {
							e !== null && a(Number(e));
						},
						children: As.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e,
							children: t
						}, e))
					})
				})
			] }),
			o.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: o.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				disabled: !e.available,
				...G(o.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
function Fs({ facts: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(null), i = n ?? e, a = Y(), o = (e) => void a.run(e, (t) => W("/api/configuration/media-tools", { tool: e }, "POST", t), (e) => {
		r(e.facts.map(jn)), t(lr(e) || e.message);
	});
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "facts",
		title: J("settings:runtimeInfo.title"),
		children: [/* @__PURE__ */ (0, $.jsx)(ye, { children: i.map(({ term: e, value: t, install_tool: n, download_url: r, download_label: i }) => /* @__PURE__ */ (0, $.jsx)(j, {
			term: e,
			children: n ? /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0",
					children: t
				}), /* @__PURE__ */ (0, $.jsx)(p, {
					size: "small",
					className: "shrink-0",
					onClick: () => o(n),
					...G(a.busy === n),
					children: J("settings:shared.install")
				})]
			}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [t, r ? /* @__PURE__ */ (0, $.jsx)(he, {
				href: r,
				children: i
			}) : null] })
		}, e)) }), a.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: a.error }) : null]
	});
}
function Is({ uninstall: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(!1), [i, a] = (0, Z.useState)(""), o = () => void Bt({
		title: J("settings:uninstall.title"),
		holdToConfirm: !0,
		danger: !0,
		body: J(n ? "settings:uninstall.confirmFull" : "settings:uninstall.confirmAppOnly"),
		confirmLabel: J("settings:uninstall.title"),
		onConfirm: async () => {
			let e = await W("/api/configuration/uninstall", {
				delete_data: n,
				confirmation: "uninstall-peach"
			});
			a(lr(e) || e.message);
		}
	}), s = i || K(e, "message"), c = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "uninstallPeach",
		guide: "uninstall",
		title: J("settings:uninstall.title"),
		children: [
			e.available ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:uninstall.help") }) }) : null,
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:uninstall.full"),
				description: J("settings:uninstall.fullHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": J("settings:uninstall.full"),
					isSelected: n,
					isDisabled: !e.full_available || !!i,
					onChange: r
				})
			}) }),
			/* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(ce, {
					summary: J("settings:shared.dataDirectory"),
					children: c.map((e) => /* @__PURE__ */ (0, $.jsx)(He, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(M, {
				status: s ? /* @__PURE__ */ (0, $.jsx)("p", {
					role: i ? "status" : void 0,
					children: s
				}) : null,
				children: /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "danger",
					disabled: !e.available || !!i,
					onClick: o,
					children: J("settings:uninstall.title")
				})
			})
		]
	});
}
// src/react/restart-redirect.ts
var Ls = 8e3, Rs = [
	{
		name: J("settings:cloudDriveGuide.tierHdd"),
		cache: "10–20 GiB",
		read: "256 / 128 KB",
		task: J("settings:cloudDriveGuide.tasksOne")
	},
	{
		name: J("settings:cloudDriveGuide.tierSata"),
		cache: "20–50 GiB",
		read: "256 / 128 KB",
		task: J("settings:cloudDriveGuide.tasksOneToTwo")
	},
	{
		name: J("settings:cloudDriveGuide.tierNvme"),
		cache: "50–100 GiB",
		read: "256 / 128 KB",
		task: J("settings:cloudDriveGuide.tasksTwoPlus")
	}
], zs = [
	["cache", J("settings:cloudDriveGuide.cacheLimit")],
	["read", J("settings:cloudDriveGuide.readLength")],
	["task", J("settings:cloudDriveGuide.concurrentVideos")]
];
function Bs() {
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, $.jsxs)(ce, {
			summary: J("settings:cloudDriveGuide.title"),
			children: [
				/* @__PURE__ */ (0, $.jsxs)(N, { children: [J("settings:cloudDriveGuide.mountFirst"), /* @__PURE__ */ (0, $.jsx)(he, {
					href: "https://www.clouddrive2.com/help.html",
					children: J("settings:cloudDriveGuide.mountHelp")
				})] }),
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDriveGuide.cacheHelp") }),
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDriveGuide.writeAccess") }),
				/* @__PURE__ */ (0, $.jsx)("ul", {
					"aria-label": J("settings:cloudDriveGuide.tiersLabel"),
					className: "flex flex-col gap-2",
					children: Rs.map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, $.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
							children: zs.map(([t, n]) => /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, $.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, $.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, $.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, $.jsx)("li", { children: J("settings:cloudDriveGuide.cacheSettingsTip") }),
						/* @__PURE__ */ (0, $.jsx)("li", { children: J("settings:cloudDriveGuide.readLengthTip") }),
						/* @__PURE__ */ (0, $.jsx)("li", { children: J("settings:cloudDriveGuide.cacheTypesTip") })
					]
				}),
				/* @__PURE__ */ (0, $.jsx)(N, { children: /* @__PURE__ */ (0, $.jsx)(he, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: J("settings:cloudDriveGuide.fullGuide")
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
var Vs = "/api/configuration/cloud-proxies", Hs = [
	["direct", J("settings:cloudProxy.direct")],
	["system", J("settings:shared.followSystem")],
	["http", J("settings:cloudProxy.http")],
	["socks5", J("settings:cloudProxy.socks5")]
];
function Us({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(!0), a = (0, Z.useRef)(/* @__PURE__ */ new Set()), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(() => void 0), u = Y(), { checked: d, checkFailed: f } = Vr(), m = (e) => {
		o.current.size || u.run("refresh", (e) => U(Vs, e), (t) => {
			a.current.clear(), n(t), i(!1), e && d(J("settings:cloudProxy.refreshed"));
		}, (t) => {
			let n = t instanceof Error ? t.message : J("settings:cloudProxy.loadFailed");
			i(!1), u.setError(n), e && f(J("settings:cloudProxy.title"), n);
		});
	};
	return l.current = () => m(!1), (0, Z.useEffect)(() => {
		l.current();
		let e = () => {
			a.current.size || l.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, Z.useEffect)(() => {
		if (!t) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		qn("cloudProxy", {
			configured: t.configured !== !1,
			unlinked: t.unlinked?.length ?? 0,
			accounts: t.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [t]), r ? /* @__PURE__ */ (0, $.jsx)(nt, {
		label: J("settings:cloudProxy.loading"),
		html: It
	}) : /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "cloud-proxy",
		title: J("settings:cloudProxy.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: g }), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				u.error ? /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "error",
					title: J("settings:cloudProxy.readFailedTitle"),
					action: /* @__PURE__ */ (0, $.jsx)(ke, {
						href: "/settings/downloads",
						size: "small",
						children: J("settings:cloudProxy.downloadSettingsLink")
					}),
					children: u.error
				}) : null,
				t?.configured === !1 ? /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "neutral",
					action: /* @__PURE__ */ (0, $.jsx)(ke, {
						href: "/settings/downloads",
						size: "small",
						children: J("settings:cloudProxy.downloadSettingsLink")
					}),
					children: J("settings:cloudProxy.notConfigured")
				}) : t?.accounts.length === 0 && !t.unlinked?.length ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudProxy.noLibraries") }) : null,
				t?.unlinked?.map((e) => /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(be, { children: /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(ht, { mark: ti(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudProxy.unmatched") })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, $.jsx)(Ws, {
					initial: t,
					receipt: e,
					onDirty: () => a.current.add(t.id),
					onSaving: (e) => {
						e ? o.current.add(t.id) : o.current.delete(t.id), c(!!o.current.size);
					},
					onSaved: (e) => {
						a.current.delete(e.id), n((t) => t && {
							...t,
							accounts: t.accounts.map((t) => t.id === e.id ? e : t)
						});
					}
				}, t.id + t.revision))
			]
		})] }), /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
			variant: "secondary",
			disabled: s,
			onClick: () => m(!0),
			...G(u.busy === "refresh"),
			children: J("settings:shared.reload")
		}) })]
	});
}
function Ws({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)([]), l = On(a.libraries?.map((e) => e.name) ?? []) || a.name, u = Y(), d = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), c((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		"aria-label": J("settings:cloudProxy.accountForm", { name: l }),
		onSubmit: (e) => {
			e.preventDefault(), i(!0), u.run("save", (e) => W(Vs, {
				id: a.id,
				revision: a.revision,
				...s.includes("api") ? { api: a.api } : {},
				...s.includes("data") ? { data: a.data } : {}
			}, "POST", e), (e) => {
				o(e), c([]), r(e), t(J("settings:cloudProxy.saved"));
			}).finally(() => i(!1));
		},
		className: "flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(be, { children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(ht, { mark: ti(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), l]
			}) }),
			/* @__PURE__ */ (0, $.jsxs)(N, { children: [
				a.name,
				" · ",
				a.path
			] }),
			/* @__PURE__ */ (0, $.jsx)(Gs, {
				label: J("settings:cloudProxy.dataProxy"),
				value: a.data,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("data", e)
			}),
			/* @__PURE__ */ (0, $.jsx)(Gs, {
				label: J("settings:cloudProxy.apiProxy"),
				value: a.api,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("api", e)
			}),
			a.writable ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudProxy.needsWritePermission") }),
			u.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: u.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, $.jsx)(p, {
					type: "submit",
					disabled: !a.writable || !s.length,
					...G(u.busy === "save"),
					children: J("settings:shared.saveSettings")
				})
			})
		]
	});
}
function Gs({ label: e, value: t, disabled: n, onChange: r }) {
	let i = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)(be, { children: e }),
			/* @__PURE__ */ (0, $.jsxs)(R, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, $.jsx)(z, {
					id: "unknown",
					children: J("settings:cloudProxy.unknownType")
				}) : null, Hs.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
					id: e,
					children: t
				}, e))]
			}),
			i ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)(P, {
					className: "min-w-40 flex-1",
					label: J("settings:cloudProxy.host", { label: e }),
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, $.jsx)(P, {
					className: "w-full sm:w-28",
					label: J("settings:cloudProxy.port", { label: e }),
					value: t.port ? String(t.port) : "",
					inputMode: "numeric",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						port: Number(e)
					})
				})]
			}), /* @__PURE__ */ (0, $.jsxs)(ce, {
				summary: J("settings:cloudProxy.authentication"),
				children: [
					/* @__PURE__ */ (0, $.jsx)(P, {
						label: J("settings:cloudProxy.username", { label: e }),
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(P, {
						label: J("settings:cloudProxy.password", { label: e }),
						type: "password",
						value: t.password || "",
						autoComplete: "new-password",
						isDisabled: n,
						placeholder: t.password_set ? J("settings:shared.savedLeaveBlank") : J("settings:shared.optional"),
						onChange: (e) => r({
							...t,
							password: e
						})
					}),
					t.password_set ? /* @__PURE__ */ (0, $.jsx)(O, {
						isSelected: !!t.clear_password,
						isDisabled: n,
						onChange: (e) => r({
							...t,
							clear_password: e
						}),
						children: J("settings:cloudProxy.clearPassword")
					}) : null
				]
			})] }) : null
		]
	});
}
// src/react/settings/code-pattern-settings.tsx
var Ks = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function qs({ receipt: e }) {
	let t = X({
		queryKey: et,
		queryFn: ({ signal: e }) => Qt(e)
	}), [n, r] = (0, Z.useState)(null), i = Y(), a = n ?? (t.data?.codePatterns ?? []).join("\n"), o = i.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "codes",
		title: J("settings:codePatterns.title"),
		onSubmit: (t) => {
			t.preventDefault();
			let n = a.split("\n").map((e) => e.trim()).filter(Boolean);
			i.run("save", (e) => W(tt, { codePatterns: n }, "POST", e), (t) => {
				Wn.setQueryData(et, t), r(null), e(J("settings:shared.settingsSaved"));
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:codePatterns.help") }), /* @__PURE__ */ (0, $.jsx)(St, {
			id: "codePatternSetting",
			"aria-label": J("settings:codePatterns.title"),
			rows: 3,
			autoResize: !0,
			maxRows: 12,
			spellCheck: "false",
			autoComplete: "off",
			placeholder: Ks,
			value: a,
			isDisabled: !t.data,
			isInvalid: !!o,
			hint: o || void 0,
			onChange: r
		})] }), /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) })]
	});
}
// src/react/settings/service-preferences.tsx
var Js = [
	["off", J("settings:timelineThumbnails.off")],
	["precise", J("settings:timelineThumbnails.precise")],
	["coarse", J("settings:timelineThumbnails.coarse")]
], Ys = [
	{
		key: "sourceBudgetRequests",
		fallback: 6e3,
		choices: [
			1500,
			3e3,
			6e3,
			12e3,
			24e3,
			48e3
		],
		label: () => J("settings:sourceBudget.requests"),
		help: () => J("settings:sourceBudget.requestsHelp"),
		option: (e) => J("settings:sourceBudget.requestCount", { count: e })
	},
	{
		key: "sourceBudgetHours",
		fallback: 4,
		choices: [
			1,
			2,
			4,
			8,
			12,
			24
		],
		label: () => J("settings:sourceBudget.hours"),
		help: () => void 0,
		option: (e) => J("settings:sourceBudget.hourCount", { count: e })
	},
	{
		key: "sourceBudgetGigabytes",
		fallback: 1,
		choices: [
			1,
			2,
			4,
			8,
			16
		],
		label: () => J("settings:sourceBudget.gigabytes"),
		help: () => void 0,
		option: (e) => J("settings:sourceBudget.gigabyteCount", { count: e })
	}
];
function Xs({ receipt: e }) {
	let t = X({
		queryKey: et,
		queryFn: ({ signal: e }) => Qt(e)
	}), n = Fr(), r = n.error || t.error, i = !t.data || n.isPending;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:taskSpeed.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:taskSpeed.defaultSpeed"),
			description: J("settings:taskSpeed.defaultSpeedHelp"),
			children: /* @__PURE__ */ (0, $.jsx)(Ge, {
				value: t.data?.taskSpeedMode || "standard",
				busy: i,
				onChange: (t) => n.mutate({ taskSpeedMode: t }, { onSuccess: () => e(J("settings:taskSpeed.saved")) })
			})
		}), Ys.map((r) => /* @__PURE__ */ (0, $.jsx)(B, {
			label: r.label(),
			description: r.help(),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: `${r.key}Setting`,
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": r.label(),
					selectedKey: String(t.data?.[r.key] ?? r.fallback),
					isDisabled: i,
					onSelectionChange: (t) => {
						t !== null && n.mutate({ [r.key]: Number(t) }, { onSuccess: () => e(J("settings:sourceBudget.saved")) });
					},
					children: r.choices.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: r.option(e)
					}, e))
				})
			})
		}, r.key))] }), r ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(r) })
		}) : null]
	});
}
function Zs({ epoch: e = 0, disabled: t = !1 }) {
	let n = X({
		queryKey: _t,
		queryFn: ({ signal: e }) => en(e),
		refetchOnMount: "always"
	}), r = Ir(), i = r.reset;
	(0, Z.useEffect)(() => {
		i();
	}, [e, i]);
	let a = n.data, o = r.error || n.error;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:videoPreviews.timeline"),
			description: J("settings:videoPreviews.timelineHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "videoThumbnailSetting",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:timelineThumbnails.interval"),
					selectedKey: a?.mode || "off",
					isDisabled: t || !a || n.isFetching || r.isPending,
					onSelectionChange: (e) => {
						e !== null && r.mutate(String(e));
					},
					children: Js.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: e,
						children: t
					}, e))
				})
			})
		}) }),
		r.isPending || a?.status === "running" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [r.isPending ? /* @__PURE__ */ (0, $.jsx)(bt, {
				embedded: !0,
				kind: "gather",
				label: J("settings:shared.saving")
			}) : /* @__PURE__ */ (0, $.jsx)(bt, {
				embedded: !0,
				kind: Dt("timeline-thumbnails"),
				label: J("settings:timelineThumbnails.generating")
			}), r.isPending ? null : /* @__PURE__ */ (0, $.jsx)(yt, {})]
		}) : null,
		o ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(o) })
		}) : null
	] });
}
function Qs({ receipt: e }) {
	let t = kt();
	(0, Z.useSyncExternalStore)(t.subscribe, t.version);
	let n = X({
		queryKey: et,
		queryFn: ({ signal: e }) => Qt(e),
		refetchOnMount: "always"
	}), r = Fr(), i = n.data?.followInitialDays ?? t.value.followInitialDays, a = r.error || n.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "follow-options",
		title: J("settings:followFetch.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(I, { children: [
			/* @__PURE__ */ (0, $.jsx)(ec, { kind: "follow" }),
			/* @__PURE__ */ (0, $.jsx)(ec, { kind: "feed" }),
			/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:followFetch.initialRange"),
				description: J("settings:followFetch.initialRangeHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "followInitialDaysSetting",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:followFetch.initialRange"),
						selectedKey: String(i),
						isDisabled: n.isFetching || r.isPending,
						onSelectionChange: (n) => {
							n !== null && r.mutate({ followInitialDays: Number(n) }, { onSuccess: (n) => {
								typeof n.followInitialDays == "number" && (t.value.followInitialDays = n.followInitialDays), t.save(), e(J("settings:followSchedule.initialRangeSaved"));
							} });
						},
						children: ve.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e,
							children: t
						}, e))
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:followFetch.avatarRefresh"),
				description: J("settings:followFetch.avatarRefreshHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0",
					children: J("settings:followSchedule.avatarRefresh")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:followFetch.faviconRefresh"),
				description: J("settings:followFetch.faviconRefreshHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0",
					children: J("settings:followSchedule.faviconRefresh")
				})
			})
		] }), a ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(a) })
		}) : null]
	});
}
var $s = {
	follow: {
		id: "followScheduleSetting",
		label: () => J("settings:followFetch.autoCheck"),
		help: () => J("settings:followSchedule.autoCheckHelp"),
		input: () => J("settings:followSchedule.autoCheckInterval"),
		name: "follow-interval",
		running: () => J("settings:followSchedule.checking"),
		activity: "follow-check",
		failure: () => J("settings:followSchedule.lastCheckFailed")
	},
	feed: {
		id: "feedScheduleSetting",
		label: () => J("settings:followFetch.feedSchedule"),
		help: () => J("settings:followSchedule.feedScheduleHelp"),
		input: () => J("settings:followSchedule.feedScheduleInterval"),
		name: "feed-interval",
		running: () => J("settings:followSchedule.fetchingFeeds"),
		activity: "feed-check",
		failure: () => J("settings:followSchedule.lastFetchFailed")
	}
};
function ec({ kind: e }) {
	let t = $s[e], { key: n, fetch: r, fallback: i } = Ye[e], a = X({
		queryKey: n,
		queryFn: ({ signal: e }) => r(e),
		refetchOnMount: "always",
		refetchInterval: er
	}), o = Pr(e), s = a.data, c = `peach.number.${t.id}`, l = (0, Z.useRef)(Nt(Number(localStorage.getItem(c)), 15, 10080, i)), [u, d] = (0, Z.useState)(String(i)), [f, p] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
		s?.enabled && (l.current = s.interval_minutes, d(String(s.interval_minutes)));
	}, [s]);
	let m = !s?.available || a.isFetching || o.isPending, h = () => {
		let e = Number(u);
		!Number.isInteger(e) || e < 15 || e > 10080 ? p(!0) : (p(!1), s?.enabled && !m && e !== s.interval_minutes && (l.current = e, localStorage.setItem(c, String(e)), o.mutate(e)));
	}, g = o.error || a.error, _ = s && !s.available ? J("settings:followSchedule.primaryOnly") : t.help();
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(B, {
			label: t.label(),
			description: _,
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				id: t.id,
				className: "flex min-h-9 shrink-0 flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": t.label(),
					isSelected: s?.enabled === !0,
					isDisabled: m,
					onChange: (e) => {
						localStorage.setItem(c, String(l.current)), o.mutate(e ? l.current : 0);
					}
				}), s?.enabled ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, $.jsx)(P, {
						type: "number",
						inputMode: "numeric",
						name: t.name,
						autoComplete: "off",
						"aria-label": t.input(),
						className: "w-21 sm:w-24",
						value: u,
						onChange: (e) => {
							d(e), p(!1);
						},
						onBlur: h,
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), h());
						},
						isDisabled: m,
						isInvalid: f
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: J("settings:numberSetting.unitMinutes")
					})]
				}) : null]
			})
		}),
		f ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: J("settings:followSchedule.invalidInterval") }) }) : null,
		o.isPending || s?.running ? /* @__PURE__ */ (0, $.jsx)(V, { children: o.isPending ? /* @__PURE__ */ (0, $.jsx)(bt, {
			embedded: !0,
			kind: "gather",
			label: J("settings:shared.saving")
		}) : /* @__PURE__ */ (0, $.jsx)(bt, {
			embedded: !0,
			kind: Dt(t.activity),
			label: t.running()
		}) }) : null,
		/* @__PURE__ */ (0, $.jsx)(tc, {
			kind: e,
			status: s,
			title: t.failure()
		}),
		g ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(g) }) }) : null
	] });
}
function tc({ kind: e, status: t, title: n }) {
	let r = Nr(e);
	if (!t?.enabled || t.running || !t.last_error) return null;
	let i = t.consecutive_failures ?? 0, a = Pn(t.next_run_at), o = [i > 1 ? J("settings:followSchedule.consecutiveFailures", { count: i }) : "", a ? J("settings:followSchedule.nextRun", { time: a }) : ""].filter(Boolean).join(J("shell:format.clauseSeparator")), s = [
		t.last_error,
		o,
		r.error ? J("settings:followSchedule.retryFailed", { error: q(r.error) }) : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(F, {
		tone: "error",
		title: n,
		action: /* @__PURE__ */ (0, $.jsx)(p, {
			variant: "secondary",
			size: "small",
			disabled: !t.available,
			...G(r.isPending),
			onClick: () => r.mutate(),
			children: J("settings:shared.retryNow")
		}),
		children: s
	}) });
}
// src/react/settings/media-processing-settings.tsx
function nc({ receipt: e }) {
	let t = X({
		queryKey: Me,
		queryFn: ({ signal: e }) => Zt(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "preview",
		title: J("settings:videoPreviews.title"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:videoPreviews.generate"),
				description: J("settings:videoPreviews.generateHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": J("settings:videoPreviews.generate"),
					isSelected: !!t.data && !t.data.metadata_only,
					isDisabled: i,
					onChange: (t) => void n.run("save", (e) => W(Ne, { metadata_only: !t }, "POST", e), (t) => {
						Wn.setQueryData(Me, t), Wn.invalidateQueries({ queryKey: _t }), Wn.invalidateQueries({ queryKey: we }), e(t.metadata_only ? J("settings:videoPreview.turnedOff") : J("settings:videoPreview.turnedOn"));
					})
				})
			}) }),
			/* @__PURE__ */ (0, $.jsx)(Zs, { disabled: !t.data || t.data.metadata_only || !!n.busy }),
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:videoPreviews.decoder"),
				description: J("settings:videoPreviews.decoderHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "previewAccelerationSetting",
					children: /* @__PURE__ */ (0, $.jsxs)(R, {
						"aria-label": J("settings:videoPreviews.decoder"),
						selectedKey: t.data?.preview_acceleration || "auto",
						isDisabled: i || !!t.data?.metadata_only,
						onSelectionChange: (t) => {
							t !== null && n.run("preview_acceleration", (e) => W(Ne, { preview_acceleration: String(t) }, "POST", e), (t) => {
								Wn.setQueryData(Me, t), e(J("settings:videoPreview.decodingSaved"));
							});
						},
						children: [/* @__PURE__ */ (0, $.jsx)(z, {
							id: "auto",
							children: J("settings:videoProcessing.autoHardwareFirst")
						}), /* @__PURE__ */ (0, $.jsx)(z, {
							id: "software",
							children: J("settings:videoPreview.softwareDecoding")
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(bt, {
					embedded: !0,
					kind: "gather",
					label: J("settings:shared.saving")
				})
			}) : null,
			r ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: r })
			}) : null
		]
	});
}
var rc = [
	0,
	1080,
	720,
	480
];
function ic({ receipt: e }) {
	let t = X({
		queryKey: Me,
		queryFn: ({ signal: e }) => Zt(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "transcode",
		title: J("settings:transcoding.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:transcoding.mode"),
				description: J("settings:transcoding.modeHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "playbackAccelerationSetting",
					children: /* @__PURE__ */ (0, $.jsxs)(R, {
						"aria-label": J("settings:transcoding.mode"),
						selectedKey: t.data?.playback_acceleration || "auto",
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_acceleration", (e) => W(Ne, { playback_acceleration: String(t) }, "POST", e), (t) => {
								Wn.setQueryData(Me, t), e(J("settings:playbackTranscode.saved"));
							});
						},
						children: [/* @__PURE__ */ (0, $.jsx)(z, {
							id: "auto",
							children: J("settings:videoProcessing.autoHardwareFirst")
						}), /* @__PURE__ */ (0, $.jsx)(z, {
							id: "software",
							children: J("settings:playbackTranscode.software")
						})]
					})
				})
			}), /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:transcoding.quality"),
				description: J("settings:transcoding.qualityHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "playbackQualitySetting",
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:transcoding.quality"),
						selectedKey: String(t.data?.playback_max_height ?? 0),
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_max_height", (e) => W(Ne, { playback_max_height: Number(t) }, "POST", e), (t) => {
								Wn.setQueryData(Me, t), e(J("settings:playbackTranscode.qualitySaved"));
							});
						},
						children: rc.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: String(e),
							children: e ? J("settings:transcoding.qualityHeight", { height: e }) : J("settings:transcoding.original")
						}, e))
					})
				})
			})] }),
			n.busy ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(bt, {
					embedded: !0,
					kind: "gather",
					label: J("settings:shared.saving")
				})
			}) : null,
			r ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: r })
			}) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
var ac = [
	["", J("settings:libraryIcons.auto")],
	["hard-drive", J("settings:libraryIcons.hardDrive")],
	["database", J("settings:libraryIcons.database")],
	["heart", J("settings:libraryIcons.crush")],
	["heart-hand", J("settings:libraryIcons.intimate")],
	["flame", J("settings:libraryIcons.passion")],
	["cherry", J("settings:libraryIcons.cherry")],
	["lollipop", J("settings:libraryIcons.sweetie")],
	["candy", J("settings:libraryIcons.candy")],
	["banana", J("settings:libraryIcons.banana")],
	["droplets", J("settings:libraryIcons.wet")],
	["venus", J("settings:libraryIcons.female")],
	["mars", J("settings:libraryIcons.male")],
	["venus-and-mars", J("settings:libraryIcons.couple")],
	["gem", J("settings:libraryIcons.featured")],
	["crown", J("settings:libraryIcons.queen")],
	["ribbon", J("settings:libraryIcons.ribbon")],
	["shirt", J("settings:libraryIcons.uniform")],
	["graduation-cap", J("settings:libraryIcons.student")],
	["stethoscope", J("settings:libraryIcons.nurse")],
	["glasses", J("settings:libraryIcons.glasses")],
	["footprints", J("settings:libraryIcons.footprints")],
	["hand", J("settings:libraryIcons.hands")],
	["flower", J("settings:libraryIcons.flower")],
	["venetian-mask", J("settings:libraryIcons.cosplay")],
	["rabbit", J("settings:libraryIcons.bunnyGirl")],
	["paw-print", J("settings:libraryIcons.animalEars")],
	["dumbbell", J("settings:libraryIcons.fitness")],
	["bed-double", J("settings:libraryIcons.bedroom")],
	["bath", J("settings:libraryIcons.bathroom")],
	["key-round", J("settings:libraryIcons.private")],
	["wine", J("settings:libraryIcons.tipsy")],
	["cigarette", J("settings:libraryIcons.smoking")],
	["moon", J("settings:libraryIcons.night")],
	["sparkles", J("settings:libraryIcons.fantasy")],
	["camera", J("settings:libraryIcons.photoShoot")],
	["video", J("settings:libraryIcons.videos")],
	["film", J("settings:libraryIcons.movies")],
	["image", J("settings:libraryIcons.imageSets")],
	["gamepad-2", J("settings:libraryIcons.games")],
	["star", J("settings:libraryIcons.favorites")],
	["tags", J("settings:libraryIcons.topics")]
];
function oc(e) {
	let t = e === "local" ? "" : Pe[e];
	return t ? [t, J("settings:libraryIcons.auto")] : ["hard-drive", J("settings:libraryIcons.default")];
}
var sc = "auto";
function cc({ value: n, label: r, kind: s = "local", onChange: c }) {
	let l = (0, Z.useRef)(null), [u, d] = (0, Z.useState)(!1), [f, m] = (0, Z.useState)(n), [h, g] = oc(s);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(p, {
		ref: l,
		variant: "secondary",
		className: "self-start",
		"aria-label": r,
		"aria-haspopup": "dialog",
		"aria-expanded": u,
		onClick: () => {
			m(n), d(!0);
		},
		children: /* @__PURE__ */ (0, $.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(ht, { mark: n || h }), ((e) => e && ac.find(([t]) => t === e)?.[1] || g)(n)]
		})
	}), /* @__PURE__ */ (0, $.jsx)(t, {
		triggerRef: l,
		isOpen: u,
		onOpenChange: d,
		placement: "bottom start",
		offset: 4,
		className: Fe,
		children: /* @__PURE__ */ (0, $.jsxs)(i, {
			"aria-label": J("settings:libraryIcons.dialogLabel", { label: r }),
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, $.jsx)(e, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: J("settings:libraryIcons.title")
				}),
				/* @__PURE__ */ (0, $.jsx)(a, {
					"aria-label": J("settings:libraryIcons.choices"),
					value: f || sc,
					onChange: (e) => m(e === sc ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: ac.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(o, {
						value: e || sc,
						"aria-label": e ? t : g,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, $.jsx)(ht, { mark: e || h })
					}, e || sc))
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, $.jsx)(p, {
						variant: "secondary",
						onClick: () => d(!1),
						children: J("settings:shared.cancel")
					}), /* @__PURE__ */ (0, $.jsx)(p, {
						disabled: f === n,
						onClick: () => {
							c(f), d(!1);
						},
						children: J("settings:shared.apply")
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
var lc = [
	["probe", J("settings:libraryPolicy.stepProbe")],
	["metadata", J("settings:libraryPolicy.stepMetadata")],
	["cover", J("settings:libraryPolicy.stepCovers")],
	["people", J("settings:libraryPolicy.stepAvatars")],
	["preview", J("settings:libraryPolicy.stepContactSheet")]
], uc = [
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
], dc = [
	[
		"auto",
		J("settings:libraryPolicy.auto"),
		J("settings:libraryPolicy.autoHint")
	],
	[
		"local",
		J("settings:libraryPolicy.localOnly"),
		J("settings:libraryPolicy.localHint")
	],
	[
		"custom",
		J("settings:shared.custom"),
		J("settings:libraryPolicy.customHint")
	]
];
function fc() {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, $.jsx)(N, { children: Ve }), /* @__PURE__ */ (0, $.jsxs)(ce, {
			summary: J("settings:libraryPolicy.compare"),
			children: [/* @__PURE__ */ (0, $.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, $.jsx)("thead", { children: /* @__PURE__ */ (0, $.jsxs)("tr", { children: [/* @__PURE__ */ (0, $.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, $.jsx)(r, { children: J("settings:libraryPolicy.step") })
				}), Re.map((e) => /* @__PURE__ */ (0, $.jsx)("th", {
					scope: "col",
					children: e
				}, e))] }) }), /* @__PURE__ */ (0, $.jsx)("tbody", { children: Be.map(([e, ...t]) => /* @__PURE__ */ (0, $.jsxs)("tr", { children: [/* @__PURE__ */ (0, $.jsx)("th", {
					scope: "row",
					children: e
				}), t.map((e, t) => /* @__PURE__ */ (0, $.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-label": J("settings:libraryPolicy.included"),
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-label": J("settings:libraryPolicy.notIncluded"),
						children: "—"
					}) : e
				}, Re[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: ze })]
		})]
	});
}
function pc({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, $.jsx)(ot, {
		"data-guide-target": "library-policy",
		className: "w-full",
		"aria-label": J("settings:libraryPolicy.modeLabel", { name: e }),
		selectedKey: t,
		prefix: J("settings:libraryPolicy.mode"),
		renderValue: /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate",
			children: dc.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: dc.map(([e, t, n]) => /* @__PURE__ */ (0, $.jsx)(z, {
			id: e,
			textValue: t,
			children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, $.jsx)("span", { children: t }), /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: n
				})]
			})
		}, e))
	});
}
function mc({ name: e, value: t, onChange: n, previewsOff: r = !1 }) {
	return /* @__PURE__ */ (0, $.jsxs)(ce, {
		defaultOpen: !0,
		summary: J("settings:libraryPolicy.stepsSummary", {
			name: e,
			selected: t.length,
			total: lc.length
		}),
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": J("settings:libraryPolicy.stepsLabel", { name: e }),
			children: lc.map(([e, i]) => /* @__PURE__ */ (0, $.jsx)(O, {
				isSelected: t.includes(e),
				isDisabled: r && e === "preview",
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: i
			}, e))
		}), r ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:libraryPolicy.previewsOff") }) : null]
	});
}
function hc({ id: e, name: r, value: a, onChange: o }) {
	let c = (0, Z.useRef)(null), [l, u] = (0, Z.useState)(!1), d = s.find(([e]) => e === a)?.[1] || J("settings:libraryColor.none"), f = (t) => {
		o(t), Vn(e, t), u(!1);
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("button", {
		ref: c,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": l,
		"aria-label": J("settings:libraryColor.triggerLabel", {
			name: r || J("settings:mediaLibraries.untitled"),
			color: d
		}),
		title: d,
		onClick: () => u(!0),
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: J("settings:libraryColor.label")
			}),
			a ? /* @__PURE__ */ (0, $.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": a
			}) : /* @__PURE__ */ (0, $.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, $.jsx)("span", { children: d })
		]
	}), /* @__PURE__ */ (0, $.jsx)(n, {
		getContainer: () => In(c.current),
		children: /* @__PURE__ */ (0, $.jsx)(t, {
			triggerRef: c,
			isOpen: l,
			onOpenChange: u,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: Fe,
			children: /* @__PURE__ */ (0, $.jsxs)(i, {
				"aria-label": J("settings:libraryColor.dialogLabel", { name: r || J("settings:mediaLibraries.untitled") }),
				className: "outline-none",
				children: [/* @__PURE__ */ (0, $.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: J("settings:libraryColor.choose")
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !a,
						title: J("settings:libraryColor.none"),
						"aria-label": J("settings:libraryColor.none"),
						onClick: () => f(""),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), s.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === a,
						title: t,
						"aria-label": t,
						onClick: () => f(e),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-glow-ball": "",
							"aria-hidden": "true",
							"data-accent-ball": e
						})
					}, e))]
				})]
			})
		})
	})] });
}
// src/react/settings/push-discovery-settings.tsx
var gc = "/api/configuration/push-discovery", _c = "/api/configuration/push-discovery/secret";
function vc({ label: e, help: t, status: n, children: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-h-13 w-full items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-primary",
				children: e
			}), /* @__PURE__ */ (0, $.jsxs)(N, { children: [/* @__PURE__ */ (0, $.jsx)("span", { children: t }), n ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block",
				children: n
			}) : null] })]
		}), r]
	});
}
function yc({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.prefixes), [o, s] = (0, Z.useState)(""), c = Y(), l = n.media_roots, [u, d] = (0, Z.useState)(e), f = (e, n) => {
		r(e), d(e), a(e.prefixes), s(""), t(n);
	}, m = (e, t) => a((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), h = (e) => {
		e.preventDefault();
		let t = {
			enabled: n.enabled,
			watch_local: n.watch_local,
			cloud: n.cloud,
			prefixes: i
		};
		c.run("save", (e) => W(gc, t, "POST", e), (e) => f(e, J("settings:shared.settingsSaved")), (e) => s(q(e)));
	}, g = () => {
		c.run("secret", (e) => W(_c, {}, "POST", e), (e) => f(e, J("settings:pushDiscovery.secretRotated")), (e) => s(q(e)));
	}, _ = [
		J("settings:pushDiscovery.ingestedCount", { count: u.queue.ingested }),
		u.queue.failed ? J("settings:pushDiscovery.failedCount", { count: u.queue.failed }) : "",
		u.queue.pending ? J("settings:pushDiscovery.pendingCount", { count: u.queue.pending }) : ""
	].filter(Boolean).join(J("shell:format.clauseSeparator")), v = u.local_running ? J("settings:pushDiscovery.monitoring", { paths: On(u.local_roots) }) : (u.local_message ? K(u, "local_message") : "") || J("settings:pushDiscovery.notRunningDetail");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "pushDiscovery",
		guide: "discovery",
		title: J("settings:fileDiscovery.title"),
		onSubmit: h,
		children: [
			/* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: J("settings:pushDiscovery.localMonitoring")
				}), /* @__PURE__ */ (0, $.jsx)(gt, {
					tone: !u.enabled || !u.watch_local ? "neutral" : u.local_running ? "progress" : "warning",
					children: !u.enabled || !u.watch_local ? J("settings:shared.notEnabled") : u.local_running ? J("settings:shared.running") : J("settings:pushDiscovery.notRunning")
				})]
			}) }),
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [
				/* @__PURE__ */ (0, $.jsx)(vc, {
					label: J("settings:fileDiscovery.autoImport"),
					help: J("settings:fileDiscovery.autoImportHelp"),
					status: u.enabled ? _ : void 0,
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:fileDiscovery.autoImport"),
						isSelected: n.enabled,
						isDisabled: !n.available,
						onChange: (e) => r({
							...n,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(vc, {
					label: J("settings:fileDiscovery.monitorLocal"),
					help: J("settings:fileDiscovery.monitorLocalHelp"),
					status: u.enabled && u.watch_local ? v : void 0,
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:fileDiscovery.monitorLocal"),
						isSelected: n.watch_local,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:fileDiscovery.cloudNotify"),
					description: J("settings:fileDiscovery.cloudNotifyHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": J("settings:fileDiscovery.cloudNotify"),
						isSelected: n.cloud,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							cloud: e
						})
					})
				}),
				u.enabled && u.cloud ? /* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:fileDiscovery.webhookConfig"),
					description: u.config_toml ? J("settings:pushDiscovery.webhookHelp") : u.origin ? J("settings:pushDiscovery.noSecret") : J("settings:pushDiscovery.needsLanUrl")
				}) : null
			] }),
			u.enabled && u.queue.last_error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "error",
					title: J("settings:pushDiscovery.lastImportFailed"),
					children: u.queue.last_error
				})
			}) : null,
			u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, $.jsxs)(ce, {
						summary: J("settings:fileDiscovery.viewConfig"),
						children: [/* @__PURE__ */ (0, $.jsx)(Ur, {
							code: u.config_toml,
							language: "toml",
							label: J("settings:pushDiscovery.configLabel"),
							bounded: !1,
							copyLabel: J("settings:pushDiscovery.copyConfig"),
							onCopy: () => t(J("settings:pushDiscovery.configCopied"))
						}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:pushDiscovery.invalidPasteHelp") })]
					})
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, $.jsx)(be, { children: J("settings:pushDiscovery.cloudPrefixes") }),
						/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:pushDiscovery.cloudPrefixesHelp") }),
						/* @__PURE__ */ (0, $.jsx)("div", {
							role: "group",
							"aria-label": J("settings:pushDiscovery.cloudPrefixes"),
							className: "flex flex-col gap-3",
							children: i.map((e, t) => /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, $.jsx)(P, {
										className: "min-w-0 flex-1",
										"aria-label": J("settings:pushDiscovery.prefixLabel", { index: t + 1 }),
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => m(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(ot, {
										"aria-label": J("settings:pushDiscovery.prefixRootLabel", { index: t + 1 }),
										prefix: J("settings:pushDiscovery.mapsTo"),
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && m(t, { root: String(e) });
										},
										children: l.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, $.jsx)(p, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: je,
										"aria-label": J("settings:pushDiscovery.removeRow"),
										onClick: () => a((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(p, {
							variant: "secondary",
							onClick: () => a((e) => [...e, {
								prefix: "",
								root: l[0] ?? ""
							}]),
							children: J("settings:pushDiscovery.addPrefix")
						}) })
					]
				})
			}),
			o || c.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: o || c.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, { children: [u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				onClick: g,
				disabled: !n.available,
				...G(c.busy === "secret"),
				children: J("settings:fileDiscovery.rotateSecret")
			}) : null, /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				disabled: !n.available,
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
async function bc(e) {
	let t;
	try {
		t = await Xt();
	} catch {
		return !0;
	}
	if (!Hn(t)) return !0;
	let { confirmed: n } = await Bt({
		title: J("settings:mediaLibraries.processingRunning"),
		body: Qn(t, e),
		confirmLabel: J("settings:mediaLibraries.saveAnyway")
	});
	return n;
}
var xc = (e) => Xr.find(([t]) => t === e)?.[1] ?? e, Sc = [...Xr, ["smb", J("settings:mediaLibraries.smbShare")]], Cc = (e) => e.library_icon || oc(e.transport === "smb" ? "smb" : e.location)[0], wc = async (e) => Rn(e, (e) => W(Le, e)), Tc = (e) => ({
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
}), Ec = (e) => e.library_stages ? uc.filter((t) => e.library_stages.split(",").includes(t)) : [], Dc = (e = "") => ({
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: Gn(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
function Oc(e) {
	let t = e.media_sources?.filter((e) => Xr.some(([t]) => t === e.location));
	return t?.length ? t.map((e) => ({
		transport: e.transport === "smb" || e.path.startsWith("smb://") ? "smb" : "filesystem",
		smb_username: e.smb_username,
		smb_password: "",
		smb_encrypt: e.smb_encrypt,
		smb_password_saved: e.smb_password_saved,
		path: e.path,
		location: e.location,
		root: e.root,
		library: e.library || "",
		library_icon: e.library_icon || "",
		library_color: e.library_color || "",
		library_policy: e.library_policy || "auto",
		library_stages: e.library_stages || "",
		root_id: e.root_id,
		library_id: e.library_id || Gn(),
		cost: e.cost ?? fr(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => Dc(e));
}
var kc = (e) => !(e instanceof f) || e.status !== 400 ? null : Mt(e.body) ?? null;
function Ac({ data: e, receipt: t }) {
	let n = !e.section_errors?.media_sources && !e.section_errors?.library_count, r = !!e.media_sources?.some((e) => ei(e.location));
	return (0, Z.useEffect)(() => {
		if (n && e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of Oc(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			qn("media", {
				folders: [...t.values()],
				cloud: r
			});
		}
		let t = e.push_discovery;
		n && t && qn("discovery", {
			enabled: t.enabled,
			watchLocal: t.watch_local,
			cloud: t.cloud,
			webhook: t.enabled && t.cloud && !!t.config_toml,
			prefixes: t.prefixes.length
		});
	}, [
		e,
		r,
		n
	]), /* @__PURE__ */ (0, $.jsx)(ma, { entries: [
		n && {
			id: "library-folders",
			label: J("settings:libraryFolders.title"),
			content: e.editable ? /* @__PURE__ */ (0, $.jsx)(jc, {
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "neutral",
				title: J("settings:mediaLibraries.readOnly"),
				children: e.notice
			})
		},
		n && !e.editable && !!e.media_sources && {
			id: "library-mounts",
			label: J("settings:mountStatus.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Nc, { data: e })
		},
		n && r && {
			id: "library-cloud-proxy",
			label: J("settings:cloudProxy.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Us, { receipt: t })
		},
		n && e.push_discovery && {
			id: "library-discovery",
			label: J("settings:fileDiscovery.title"),
			content: /* @__PURE__ */ (0, $.jsx)(yc, {
				initial: e.push_discovery,
				receipt: t
			})
		},
		{
			id: "library-code-patterns",
			label: J("settings:codePatterns.title"),
			content: /* @__PURE__ */ (0, $.jsx)(qs, { receipt: t })
		},
		{
			id: "library-video-previews",
			label: J("settings:videoPreviews.title"),
			content: /* @__PURE__ */ (0, $.jsx)(nc, { receipt: t })
		},
		{
			id: "library-transcoding",
			label: J("settings:transcoding.title"),
			content: /* @__PURE__ */ (0, $.jsx)(ic, { receipt: t })
		},
		{
			id: "library-task-speed",
			label: J("settings:taskSpeed.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Xs, { receipt: t })
		}
	] });
}
function jc({ data: e, receipt: t }) {
	let { checked: n, checkFailed: r } = Vr(), { rows: i, edit: a, add: o, remove: s, errors: c, setErrors: l, picking: u, pick: d, inputRef: f } = ni({
		initial: () => Oc(e),
		blank: () => Dc(),
		pickFolder: wc,
		describe: q
	}), [m, h] = (0, Z.useState)(!1), g = X({
		queryKey: Me,
		queryFn: ({ signal: e }) => Zt(e)
	}, Wn).data?.metadata_only === !0, [_, v] = (0, Z.useState)(!1), [b, x] = (0, Z.useState)(""), [S, C] = (0, Z.useState)({}), [w, T] = (0, Z.useState)(null), E = (0, Z.useRef)(e.revision), D = (0, Z.useRef)(!1), ee = Y();
	Tr();
	let k = (e, t) => {
		i.forEach((n, r) => {
			n.library_id === i[e].library_id && a(r, t);
		});
	}, te = Ar([...i.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], (e) => e.library_id), [ne, re] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		if (!ne) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(ne)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), re(null);
	}, [ne]);
	let ie = (e, t) => {
		let n = i.find((e) => e.library_id === t);
		if (n) {
			a(e, Tc(n));
			return;
		}
		let r = Gn();
		a(e, {
			library_id: r,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), re(r);
	};
	(0, Z.useEffect)(() => {
		if (!w) return;
		let e = setTimeout(() => location.assign(w.url), Ls);
		return () => clearTimeout(e);
	}, [w]);
	let ae = (e) => {
		e.preventDefault();
		let t = i.findIndex((e) => !e.cost);
		if (t >= 0) {
			v(!0);
			let n = e.currentTarget;
			requestAnimationFrame(() => n.querySelector(`[data-media-read-policy="${t}"] button`)?.focus());
		} else ee.busy || D.current || (x(""), D.current = !0, bc(m).then((e) => {
			D.current = !1, e && oe();
		}));
	}, oe = () => {
		ee.run("save", (t) => W(y, {
			revision: E.current,
			media_dirs: i.map((e) => e.path),
			...e.media_sources ? { media_sources: i } : {},
			port: String(e.port),
			scan_now: m
		}, "POST", t), (e) => {
			E.current = e.revision, l([]), t(J("settings:shared.settingsSaved")), T(e);
		}, (e) => {
			let t = kc(e);
			l(t?.media_dirs ?? []), (!t || t.port) && x(t?.port || q(e));
		});
	};
	if (w) return /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "media",
		title: J("settings:libraryFolders.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsxs)(F, {
			tone: "success",
			title: J("settings:shared.configSaved"),
			children: [
				J("settings:mediaLibraries.restartingRedirect"),
				/* @__PURE__ */ (0, $.jsx)(ke, {
					href: w.url,
					size: "small",
					children: J("settings:mediaLibraries.goToCollection")
				}),
				J("shell:format.period")
			]
		}) })
	});
	let se = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), ce = i.some((e) => ei(e.location)), le = ce ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "media",
		title: J("settings:libraryFolders.title"),
		onSubmit: ae,
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			/* @__PURE__ */ (0, $.jsx)(fc, {}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				role: "group",
				"aria-label": J("settings:libraryFolders.title"),
				className: "flex flex-col gap-4",
				children: te.map((e) => {
					let t = i.findIndex((t) => t.library_id === e.library_id), l = i.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), m = e.library_policy, h = e.library || J("settings:mediaLibraries.untitled");
					return /* @__PURE__ */ (0, $.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: Pt({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-library-head": "",
								children: [
									/* @__PURE__ */ (0, $.jsx)(cc, {
										label: J("settings:mediaLibraries.iconLabel", { name: h }),
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => k(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(P, {
										className: "w-full",
										"aria-label": J("settings:mediaLibraries.nameLabel", { name: h }),
										maxLength: 80,
										placeholder: J("settings:mediaLibraries.namePlaceholder"),
										value: e.library,
										onChange: (e) => k(t, { library: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(hc, {
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => k(t, { library_color: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(pc, {
										name: h,
										value: m,
										onChange: (n) => k(t, {
											library_policy: n,
											library_stages: n === "custom" ? e.library_stages || uc.join(",") : ""
										})
									})
								]
							}),
							m === "custom" ? /* @__PURE__ */ (0, $.jsx)(mc, {
								name: h,
								value: Ec(e),
								previewsOff: g,
								onChange: (e) => k(t, { library_stages: uc.filter((t) => e.includes(t)).join(",") })
							}) : null,
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": J("settings:mediaLibraries.directoriesLabel", { name: h }),
								children: [l.map(({ row: t, index: o }) => /* @__PURE__ */ (0, $.jsxs)(Yr, {
									label: J("settings:mediaLibraries.directoryLabel", { index: o + 1 }),
									path: t.path,
									onPath: (e) => a(o, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: c[o],
									inputRef: f(o),
									picking: u === o,
									onPick: () => void d(o),
									onRemove: i.length > 1 ? () => s(o) : void 0,
									status: se(t) ? /* @__PURE__ */ (0, $.jsx)(Mc, { online: se(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, $.jsxs)(Jr, { children: [
										/* @__PURE__ */ (0, $.jsx)($r, {
											index: o,
											value: t.transport === "smb" ? "smb" : t.location,
											options: Sc,
											onChange: (e) => {
												let n = e === "smb";
												a(o, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), C((e) => {
													let t = { ...e };
													return delete t[o], t;
												});
											}
										}),
										/* @__PURE__ */ (0, $.jsx)(Zr, {
											index: o,
											cost: t.cost,
											onChange: (e) => a(o, { cost: e }),
											error: _ && !t.cost ? J("settings:mediaLibraries.readPolicyRequired") : void 0
										}),
										t.root_id && !se(t) ? /* @__PURE__ */ (0, $.jsx)(qr, {
											label: J("settings:mediaLibraries.changeType"),
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, $.jsxs)(R, {
												className: "w-full",
												"aria-label": J("settings:mediaLibraries.changeTypeLabel", { index: o + 1 }),
												placeholder: J("settings:mediaLibraries.changeTypePlaceholder"),
												selectedKey: t.change_mode || null,
												onSelectionChange: (e) => {
													e === "add" ? a(o, {
														root_id: void 0,
														root: "",
														change_mode: ""
													}) : a(o, { change_mode: "relocate" });
												},
												children: [/* @__PURE__ */ (0, $.jsx)(z, {
													id: "relocate",
													children: J("settings:mediaLibraries.relocate")
												}), /* @__PURE__ */ (0, $.jsx)(z, {
													id: "add",
													children: J("settings:mediaLibraries.addAnother")
												})]
											})
										}) : null,
										te.length > 1 ? /* @__PURE__ */ (0, $.jsx)(qr, {
											label: J("settings:mediaLibraries.moveTo"),
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, $.jsxs)(R, {
												className: "w-full",
												"aria-label": J("settings:mediaLibraries.moveToLabel", { index: o + 1 }),
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, $.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
													children: [/* @__PURE__ */ (0, $.jsx)(ht, { mark: Cc(e) }), /* @__PURE__ */ (0, $.jsx)("span", {
														className: "truncate",
														children: h
													})]
												}),
												onSelectionChange: (e) => {
													e && ie(o, String(e));
												},
												children: [te.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
													id: e.library_id,
													textValue: e.library || J("settings:mediaLibraries.untitled"),
													children: /* @__PURE__ */ (0, $.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, $.jsx)(ht, { mark: Cc(e) }), /* @__PURE__ */ (0, $.jsx)("span", {
															className: "truncate",
															children: e.library || J("settings:mediaLibraries.untitled")
														})]
													})
												}, e.library_id)), l.length > 1 ? /* @__PURE__ */ (0, $.jsx)(z, {
													id: "new",
													textValue: J("settings:mediaLibraries.newLibrary"),
													children: /* @__PURE__ */ (0, $.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, $.jsx)(ht, { mark: "plus" }), /* @__PURE__ */ (0, $.jsx)("span", { children: J("settings:mediaLibraries.newLibrary") })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, $.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, $.jsxs)(Jr, { children: [/* @__PURE__ */ (0, $.jsx)(qr, {
												label: J("settings:smbShare.account"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, $.jsx)(P, {
													"aria-label": J("settings:smbShare.accountLabel", { index: o + 1 }),
													value: t.smb_username || "",
													autoComplete: "off",
													isDisabled: t.smb_clear,
													onChange: (e) => a(o, { smb_username: e })
												})
											}), /* @__PURE__ */ (0, $.jsx)(qr, {
												label: J("settings:smbShare.password"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, $.jsx)(P, {
													"aria-label": J("settings:smbShare.passwordLabel", { index: o + 1 }),
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? J("settings:smbShare.keepPassword") : "",
													isDisabled: t.smb_clear,
													onChange: (e) => a(o, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, $.jsx)(O, {
												isSelected: t.smb_encrypt || !1,
												isDisabled: t.smb_clear,
												onChange: (e) => a(o, { smb_encrypt: e }),
												children: J("settings:smbShare.requireEncryption")
											}),
											/* @__PURE__ */ (0, $.jsx)(O, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => a(o, { smb_clear: e }),
												children: J("settings:smbShare.removeAccount")
											}),
											/* @__PURE__ */ (0, $.jsx)(p, {
												className: "self-start",
												variant: "secondary",
												...G(ee.busy === `smb-${o}`),
												onClick: () => void ee.run(`smb-${o}`, (e) => W("/api/configuration/smb/test", t, "POST", e), (e) => {
													let t = J("settings:smbShare.readable");
													C((n) => ({
														...n,
														[o]: {
															message: t,
															directories: e.directories
														}
													})), n(t);
												}, (e) => {
													let t = q(e);
													C((e) => ({
														...e,
														[o]: {
															message: t,
															directories: []
														}
													})), r(J("settings:connectionCheck.action", { service: "SMB" }), t);
												}),
												children: J("settings:smbShare.testConnection")
											}),
											S[o] ? /* @__PURE__ */ (0, $.jsx)(N, { children: S[o].message }) : null,
											S[o]?.directories.length ? /* @__PURE__ */ (0, $.jsx)(R, {
												"aria-label": J("settings:smbShare.subdirectoryLabel", { index: o + 1 }),
												placeholder: J("settings:smbShare.openSubdirectory"),
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (a(o, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), C((e) => ({
														...e,
														[o]: {
															message: J("settings:smbShare.testSubdirectory"),
															directories: []
														}
													})));
												},
												children: S[o].directories.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:smbShare.help") })
										]
									}) : null]
								}, o)), /* @__PURE__ */ (0, $.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, $.jsx)(p, {
										variant: "secondary",
										"aria-label": J("settings:mediaLibraries.addDirectoryLabel", { name: h }),
										onClick: () => {
											o(), a(i.length, {
												...Tc(e),
												location: e.location,
												cost: e.cost
											});
										},
										children: J("settings:mediaLibraries.addDirectory")
									})
								})]
							})
						]
					}, e.library_id);
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				className: "self-start",
				onClick: o,
				children: J("settings:mediaLibraries.addLibrary")
			}),
			/* @__PURE__ */ (0, $.jsx)(N, { children: Ce }),
			ce ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Qr, {}), /* @__PURE__ */ (0, $.jsx)(Bs, {})] }) : null,
			le.map((e) => /* @__PURE__ */ (0, $.jsxs)(N, { children: [
				J("settings:mediaLibraries.dependencyMissingName", { name: e.name }),
				J("shell:format.sentenceGap"),
				/* @__PURE__ */ (0, $.jsxs)(he, {
					href: e.download_url,
					children: [
						J("settings:shared.download"),
						" ",
						e.name
					]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, $.jsx)(O, {
				isSelected: m,
				onChange: h,
				children: J("settings:mediaLibraries.scanAfterSave")
			}),
			b ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: b
			}) : null
		] }), /* @__PURE__ */ (0, $.jsx)(M, {
			status: J("settings:libraryFolders.restartNotice"),
			children: /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				...G(ee.busy === "save"),
				children: J("settings:shared.saveSettings")
			})
		})]
	});
}
function Mc({ online: e }) {
	return /* @__PURE__ */ (0, $.jsx)(Hr, { online: e });
}
function Nc({ data: e }) {
	let t = e.media_sources, n = Y(), { checked: r, checkFailed: i } = Vr();
	return t ? /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "mounts",
		title: J("settings:mountStatus.title"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(ye, { children: t.map((e, t) => /* @__PURE__ */ (0, $.jsxs)(j, {
				term: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(ht, { mark: ti(e.location) }), xc(e.location)] }),
				children: [e.path || J("settings:mountStatus.notConfigured"), /* @__PURE__ */ (0, $.jsx)(Mc, { online: e.online })]
			}, t)) }),
			n.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: n.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				onClick: () => void n.run("refresh", (e) => Jt(e), (e) => {
					Wn.setQueryData(_, e), !e.section_errors?.media_sources && e.media_sources ? r(J("settings:mountStatus.refreshed")) : i(J("settings:mountStatus.refresh"), e.section_errors?.media_sources?.message || J("settings:shared.notFound"));
				}, (e) => {
					let t = q(e);
					n.setError(t), i(J("settings:mountStatus.refresh"), t);
				}),
				...G(n.busy === "refresh"),
				children: J("settings:mountStatus.refresh")
			}) })
		]
	}) : null;
}
// src/react/settings/password-pair.tsx
function Pc({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(P, {
		id: "access-password",
		type: "password",
		label: e,
		autoComplete: "new-password",
		maxLength: 256,
		value: t,
		onChange: r,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && !!o,
		hint: a ? s : o || s
	}), /* @__PURE__ */ (0, $.jsx)(P, {
		id: "access-confirm",
		type: "password",
		label: J("settings:accessPassword.confirm"),
		autoComplete: "new-password",
		maxLength: 256,
		value: n,
		onChange: i,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && (!!c || l),
		hint: a ? void 0 : c
	})] });
}
// src/react/settings/access-settings.tsx
var Fc = {
	legacy: J("settings:accessPassword.legacyHelp"),
	locked: J("settings:accessPassword.lockedHelp"),
	password: J("settings:accessPassword.passwordHelp")
};
function Ic({ initial: e, receipt: t, devices: n, after: r, onSaved: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)(""), [l, u] = (0, Z.useState)(""), [d, m] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(!1), [_, v] = (0, Z.useState)({}), y = (0, Z.useRef)(null), b = Y(), x = (e) => {
		e.preventDefault();
		let n = {};
		a.mode === "password" && !s && (n.current_password = J("settings:accessPassword.enterCurrent")), h || ((l.length < 8 || l.length > 256) && (n.password = J("settings:accessPassword.lengthError")), l !== d && (n.confirmation = J("settings:accessPassword.mismatch"))), v(n), Object.keys(n).length ? requestAnimationFrame(() => y.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : b.run("save", (e) => W("/api/configuration/access", {
			revision: a.revision,
			action: h ? "disable" : "set",
			confirm_disable: h,
			current_password: s,
			password: h ? "" : l,
			confirmation: h ? "" : d
		}, "POST", e), (e) => {
			o(e), c(""), u(""), m(""), g(!1), v({}), i?.(e), t(e.mode === "open" ? J("settings:accessPassword.turnedOff") : J("settings:shared.settingsSaved"));
		}, (e) => {
			let t = e instanceof f ? e.body : null, n = Mt(t) || Mt(t?.detail);
			n ? v(n) : b.setError(q(e));
		});
	}, S = Fc[a.mode], C = a.mode !== "locked";
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)(L, {
			guide: "access",
			title: J("settings:accessPassword.title"),
			onSubmit: x,
			children: [/* @__PURE__ */ (0, $.jsx)("div", {
				ref: y,
				children: /* @__PURE__ */ (0, $.jsxs)(V, { children: [
					S ? /* @__PURE__ */ (0, $.jsx)(N, { children: S }) : null,
					a.mode === "open" ? /* @__PURE__ */ (0, $.jsx)(F, {
						tone: "warning",
						title: J("settings:accessPassword.notSet"),
						children: J("settings:accessPassword.openWarning")
					}) : null,
					a.mode === "password" || a.mode === "legacy" ? /* @__PURE__ */ (0, $.jsx)(O, {
						isSelected: h,
						onChange: g,
						children: J("settings:accessPassword.turnOff")
					}) : null,
					a.mode === "password" ? /* @__PURE__ */ (0, $.jsx)(P, {
						id: "access-current",
						type: "password",
						label: J("settings:accessPassword.current"),
						autoComplete: "current-password",
						maxLength: 256,
						value: s,
						onChange: c,
						isRequired: !0,
						validationBehavior: "aria",
						isInvalid: !!_.current_password,
						hint: _.current_password
					}) : null,
					C && !h ? /* @__PURE__ */ (0, $.jsx)(Pc, {
						label: a.mode === "password" ? J("settings:accessPassword.new") : J("settings:accessPassword.set"),
						password: l,
						confirmation: d,
						onPassword: u,
						onConfirmation: m,
						passwordError: _.password,
						confirmationError: _.confirmation,
						passwordHint: J("settings:accessPassword.newHelp")
					}) : null,
					h ? /* @__PURE__ */ (0, $.jsx)(F, {
						tone: "warning",
						title: J("settings:accessPassword.scope"),
						children: J("settings:accessPassword.disableWarning")
					}) : null,
					b.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: b.error }) : null
				] })
			}), C ? /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				...G(b.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) }) : null]
		}),
		n && (a.mode === "password" || a.mode === "legacy") ? n(a) : null,
		r ? r(a) : null
	] });
}
// src/react/settings/api-token-settings.tsx
var Lc = "/api/configuration/access/token/rotate";
function Rc(e, t) {
	let n = J("settings:accessToken.scriptsInvalidated"), r = J(e === "legacy" ? "settings:accessToken.rotateEffectLegacy" : e === "open" ? "settings:accessToken.rotateEffectOpen" : "settings:accessToken.rotateEffectPassword", { scripts: n });
	return t ? J("settings:accessToken.rotateEffectPaired", { sentence: r }) : r;
}
function zc({ initial: e, mode: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(null), s = Y(), c = Mr();
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:accessToken.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:accessToken.help") }),
			a ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(P, {
							className: "min-w-0 flex-1",
							label: J("settings:accessToken.newToken"),
							value: a.token,
							isReadOnly: !0,
							autoComplete: "off"
						}), /* @__PURE__ */ (0, $.jsx)(p, {
							variant: "secondary",
							"aria-label": J("settings:accessToken.copyNew"),
							onClick: () => void s.run("copy", () => navigator.clipboard.writeText(a.token), () => n(J("settings:accessToken.copied"))),
							children: J("settings:accessToken.copy")
						})]
					}),
					s.error ? /* @__PURE__ */ (0, $.jsx)(N, {
						role: "status",
						children: J("settings:accessToken.copyFailed")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(F, {
						tone: "info",
						title: J("settings:accessToken.shownOnce"),
						children: J("settings:accessToken.shownOnceHelp")
					})
				]
			}) : null,
			a?.relogin ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "warning",
				title: J("settings:accessToken.reloginTitle"),
				children: J("settings:accessToken.reloginHelp")
			}) : null,
			r.rotatable ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: r.reason })
		] }), r.rotatable ? /* @__PURE__ */ (0, $.jsx)(M, {
			status: J("settings:accessToken.immediate"),
			children: /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				onClick: () => void Bt({
					title: J("settings:accessToken.rotateTitle"),
					body: Rc(t, r.paired),
					confirmLabel: J("settings:accessToken.rotate"),
					onConfirm: async () => {
						let e = await W(Lc, {});
						i(e), o(e), e.mode === "legacy" && c.invalidateQueries({ queryKey: ["access-sessions"] }), n(e.signed_out ? J("settings:accessToken.rotatedSignedOut", { count: e.signed_out }) : J("settings:accessToken.rotated"));
					}
				}),
				children: J("settings:accessToken.rotate")
			})
		}) : null]
	});
}
// src/react/settings/certificate-trust.tsx
function Bc({ rows: e, label: t }) {
	let n = e.length + 8, r = e.flatMap((e, t) => [...e].flatMap((e, n) => e === "1" ? [`M${n + 4} ${t + 4}h1v1h-1z`] : [])).join("");
	return /* @__PURE__ */ (0, $.jsx)("svg", {
		role: "img",
		"aria-label": t,
		viewBox: `0 0 ${n} ${n}`,
		shapeRendering: "crispEdges",
		className: "size-40 shrink-0 rounded-lg bg-white text-black",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			d: r,
			fill: "currentColor"
		})
	});
}
var Vc = [
	[J("settings:certificateTrust.iosDevices"), J("settings:certificateTrust.iosSteps")],
	["Android", J("settings:certificateTrust.androidSteps")],
	[J("settings:certificateTrust.computer"), J("settings:certificateTrust.computerSteps")]
];
function Hc({ initial: e }) {
	let t = X({
		queryKey: ["ca-certificate"],
		initialData: e,
		queryFn: ({ signal: e }) => U("/api/configuration/certificate", e),
		staleTime: 1e400,
		refetchInterval: Math.max(60, e.expires_in - 60) * 1e3
	}).data, n = t.fingerprint.split(":"), r = [
		0,
		8,
		16,
		24
	].map((e) => n.slice(e, e + 8).join(":"));
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:certificateTrust.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:certificateTrust.help") }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-wrap items-start gap-4",
				children: [/* @__PURE__ */ (0, $.jsx)(Bc, {
					rows: t.qr,
					label: J("settings:certificateTrust.qrLabel")
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex min-w-0 flex-1 basis-64 flex-col gap-2",
					children: [/* @__PURE__ */ (0, $.jsxs)(ye, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:certificateTrust.fingerprint"),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							className: "flex max-w-sm flex-wrap justify-end gap-x-2 font-mono text-caption-1-regular",
							children: r.map((e, t) => /* @__PURE__ */ (0, $.jsx)("span", {
								className: "whitespace-nowrap",
								children: e
							}, t))
						})
					}), /* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:certificateTrust.validUntil"),
						children: t.not_after
					})] }), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:certificateTrust.qrHelp") })]
				})]
			})] }),
			/* @__PURE__ */ (0, $.jsx)(I, { children: Vc.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(B, {
				label: e,
				description: t
			}, e)) }),
			/* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:certificateTrust.verifyHelp") })
			}),
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
				href: t.download,
				download: "peach-local-ca.crt",
				leadingIcon: Rr,
				children: J("settings:certificateTrust.download")
			}) })
		]
	});
}
// src/react/settings/device-sessions.tsx
var Uc = "/api/configuration/access/sessions", Wc = (e) => e.device || J("settings:deviceSessions.unknownBrowser"), Gc = {
	glyph: Se,
	brand: "apple"
}, Kc = {
	glyph: kn,
	brand: "android"
}, qc = {
	iPhone: {
		platform: Gc,
		terminal: Et
	},
	iPad: {
		platform: Gc,
		terminal: pe
	},
	Android: {
		platform: Kc,
		terminal: Et
	},
	"Android tablet": {
		platform: Kc,
		terminal: pe,
		label: () => J("settings:deviceSessions.androidTablet")
	},
	ChromeOS: {
		platform: { browser: "chrome" },
		terminal: Br
	},
	Windows: {
		platform: {
			glyph: Ct,
			brand: "windows"
		},
		terminal: Br
	},
	macOS: {
		platform: Gc,
		terminal: Br
	},
	Linux: { terminal: Br }
}, Jc = "inline size-4 -mt-0.5 mr-1 align-middle";
function Yc({ platform: e }) {
	if ("browser" in e) return /* @__PURE__ */ (0, $.jsx)(ri, {
		name: e.browser,
		className: Jc
	});
	let { glyph: t, brand: n } = e;
	return /* @__PURE__ */ (0, $.jsx)(t, {
		"aria-hidden": !0,
		"data-platform-mark": n,
		className: Jc
	});
}
function Xc({ row: e }) {
	if (!e.device) return Wc(e);
	let t = e.device.split(" · "), n = qc[t.at(-1) ?? ""] ? t.pop() : "", r = t.join(" · "), i = n ? qc[n].platform : void 0;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		r ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [ii(r) ? /* @__PURE__ */ (0, $.jsx)(ri, {
			name: r,
			className: Jc
		}) : null, r] }) : null,
		r && n ? " · " : null,
		n ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i ? /* @__PURE__ */ (0, $.jsx)(Yc, { platform: i }) : null, qc[n].label?.() ?? n] }) : null
	] });
}
function Zc({ row: e }) {
	let t = qc[e.device.split(" · ").at(-1) ?? ""]?.terminal ?? Gt;
	return /* @__PURE__ */ (0, $.jsx)(t, {
		"aria-hidden": !0,
		className: "size-5 shrink-0 text-foreground-icon-secondary"
	});
}
function Qc({ row: e, children: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-h-13 w-full items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(Zc, { row: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-body-regular text-text-primary",
					children: /* @__PURE__ */ (0, $.jsx)(Xc, { row: e })
				}), /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: tl(e)
				})]
			})]
		}), t]
	});
}
function $c(e, t = Date.now() / 1e3) {
	let n = Math.max(0, t - e);
	return n < 60 ? J("settings:deviceSessions.justNow") : n < 3600 ? J("settings:deviceSessions.minutesAgo", { count: Math.floor(n / 60) }) : n < 86400 ? J("settings:deviceSessions.hoursAgo", { count: Math.floor(n / 3600) }) : n < 2592e3 ? J("settings:deviceSessions.daysAgo", { count: Math.floor(n / 86400) }) : (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString(xn);
}
function el(e) {
	return e.network === "loopback" ? J("settings:deviceSessions.loopback") : e.network ? e.remote ? J("settings:deviceSessions.viaRemoteAccess", { network: e.network }) : e.network : "";
}
var tl = (e) => [J("settings:deviceSessions.lastActive", { time: $c(e.last_seen) }), el(e)].filter(Boolean).join(" · ");
function nl({ revision: e, receipt: t }) {
	let n = X({
		queryKey: ["access-sessions", e],
		refetchOnMount: "always",
		queryFn: ({ signal: e }) => U(Uc, e)
	});
	return n.error ? /* @__PURE__ */ (0, $.jsx)(L, {
		title: J("settings:signedInDevices.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(n.error) }) })
	}) : n.isFetching || !n.data ? /* @__PURE__ */ (0, $.jsx)(nt, {
		label: J("settings:deviceSessions.loading"),
		html: Kt
	}) : /* @__PURE__ */ (0, $.jsx)(rl, {
		initial: n.data,
		receipt: t
	});
}
function rl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e);
	(0, Z.useEffect)(() => r(e), [e]);
	let i = n.sessions.filter((e) => !e.current);
	(0, Z.useEffect)(() => {
		qn("devices", {
			rows: Math.min(n.sessions.length, 8),
			manageable: n.manageable && i.length > 0
		});
	}, [n, i.length]);
	let a = (e) => void Bt({
		title: J("settings:deviceSessions.revokeTitle"),
		body: J("settings:deviceSessions.revokeBody", {
			device: Wc(e),
			details: tl(e)
		}),
		confirmLabel: J("settings:deviceSessions.revokeConfirm"),
		onConfirm: async () => {
			r(await W(`${Uc}/revoke`, {
				revision: n.revision,
				id: e.id
			})), t(J("settings:deviceSessions.revoked"));
		}
	});
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:signedInDevices.title"),
		children: [
			n.sessions.length ? /* @__PURE__ */ (0, $.jsx)(I, { children: n.sessions.map((e) => /* @__PURE__ */ (0, $.jsx)(Qc, {
				row: e,
				children: e.current ? /* @__PURE__ */ (0, $.jsx)(k, {
					color: "blue",
					variant: "caption",
					children: J("settings:deviceSessions.thisDevice")
				}) : n.manageable ? /* @__PURE__ */ (0, $.jsx)(p, {
					size: "small",
					variant: "secondary",
					"aria-label": J("settings:deviceSessions.revokeDevice", { device: Wc(e) }),
					onClick: () => a(e),
					children: J("settings:deviceSessions.revoke")
				}) : null
			}, e.id)) }) : /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:deviceSessions.empty") }) }),
			!n.manageable && i.length ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:deviceSessions.serverOnly") })
			}) : null,
			n.manageable && i.length ? /* @__PURE__ */ (0, $.jsx)(M, {
				status: J("settings:signedInDevices.passwordChangeNotice"),
				children: /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "secondary",
					onClick: () => void Bt({
						title: J("settings:deviceSessions.revokeOthersTitle"),
						body: J("settings:deviceSessions.revokeOthersBody", { count: i.length }),
						confirmLabel: J("settings:deviceSessions.revokeConfirm"),
						onConfirm: async () => {
							let e = await W(`${Uc}/revoke`, {
								revision: n.revision,
								scope: "others"
							});
							r(e), t(J("settings:deviceSessions.revokedCount", { count: e.removed }));
						}
					}),
					children: J("settings:signedInDevices.revokeOthers")
				})
			}) : null
		]
	});
}
// src/react/settings/port-settings.tsx
var il = [{
	value: "0.0.0.0",
	label: J("settings:accessAddress.lanDevices")
}, {
	value: "127.0.0.1",
	label: J("settings:accessAddress.thisComputerOnly")
}];
function al({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, Z.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, Z.useState)(n?.mdns_name ?? "peach"), [c, l] = (0, Z.useState)(String(e.port)), [u, d] = (0, Z.useState)({}), [m, h] = (0, Z.useState)(null), g = Y();
	return (0, Z.useEffect)(() => {
		if (!m) return;
		let e = setTimeout(() => location.assign(m.url), Ls);
		return () => clearTimeout(e);
	}, [m]), m ? /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "port",
		title: J("settings:accessUrls.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsxs)(F, {
			tone: "success",
			title: J("settings:shared.configSaved"),
			children: [J("settings:accessAddress.restarting"), /* @__PURE__ */ (0, $.jsx)(ke, {
				href: m.url,
				size: "small",
				children: J("settings:accessAddress.backToNetwork")
			})]
		}) })
	}) : /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "port",
		title: J("settings:accessUrls.title"),
		onSubmit: r ? (r) => {
			r.preventDefault(), d({}), g.run("save", (t) => W(y, {
				revision: e.revision,
				media_dirs: e.media_dirs,
				...e.media_sources ? { media_sources: e.media_sources } : {},
				port: c,
				scan_now: !1,
				...n?.editable ? {
					host: i,
					...i === "0.0.0.0" ? { mdns_name: o } : {}
				} : {}
			}, "POST", t), (e) => {
				h({ url: new URL("/settings/network", e.url).href }), t(J("settings:shared.settingsSaved"));
			}, (e) => {
				let t = e instanceof f && e.status === 400 ? Mt(e.body) : null;
				t && (t.port || t.host || t.mdns_name) ? d(t) : g.setError(q(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			n ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(ol, {
				label: J("settings:accessAddress.localUrl"),
				value: n.local_url,
				receipt: t
			}), n.lan_url || n.ip_url ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				/* @__PURE__ */ (0, $.jsx)(ol, {
					label: J("settings:accessAddress.phoneUrl"),
					value: n.lan_url || n.ip_url,
					receipt: t
				}),
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, $.jsx)(ol, {
					label: J("settings:accessAddress.alternateIp"),
					value: n.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)(N, { children: [J("settings:accessAddress.sameWifi"), n.ip_url && n.lan_url ? J("settings:accessAddress.tryIp") : ""] })
			] }) : /* @__PURE__ */ (0, $.jsx)(N, { children: n.scope === "local" ? J("settings:accessAddress.localOnly") : J("settings:accessAddress.lanUnavailable") })] }) : null,
			r ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(cs, {
				id: "configHost",
				label: J("settings:accessAddress.whoCanConnect"),
				value: i,
				onChange: a,
				options: il,
				isDisabled: !!g.busy,
				isInvalid: !!u.host,
				children: u.host ? /* @__PURE__ */ (0, $.jsx)(A, { children: u.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, $.jsx)(ls, {
				id: "configMdnsName",
				label: J("settings:accessUrls.lanUrl"),
				value: o,
				onChange: s,
				prefix: n.local_url.startsWith("https:") ? "https://" : "http://",
				suffix: ".local",
				autoComplete: "off",
				spellCheck: "false",
				maxLength: 63,
				isDisabled: !!g.busy,
				validationBehavior: "aria",
				isInvalid: !!u.mdns_name,
				hint: u.mdns_name || void 0
			}) : null] }) : null, /* @__PURE__ */ (0, $.jsx)(ls, {
				id: "configPort",
				label: J("settings:accessUrls.port"),
				prefix: "localhost:",
				inputMode: "numeric",
				value: c,
				onChange: l,
				isDisabled: !!g.busy,
				validationBehavior: "aria",
				isInvalid: !!u.port,
				hint: u.port
			})] }) : /* @__PURE__ */ (0, $.jsx)(N, { children: e.notice || J("settings:accessAddress.managedByStartup") }),
			n?.editable && i === "0.0.0.0" && n.scope === "local" ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:accessAddress.phoneUrlAfterRestart") }) : null,
			g.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: g.error
			}) : null
		] }), r ? /* @__PURE__ */ (0, $.jsx)(M, {
			status: J("settings:accessUrls.restartNotice"),
			children: /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				...G(g.busy === "save"),
				children: J("settings:shared.saveSettings")
			})
		}) : null]
	});
}
function ol({ label: e, value: t, receipt: n }) {
	let r = Y();
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(P, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				"aria-label": J("settings:accessAddress.copyLabel", { label: e }),
				onClick: () => void r.run("copy", () => navigator.clipboard.writeText(t), () => n(J("settings:accessAddress.copied"))),
				children: J("settings:accessAddress.copyUrl")
			})]
		}), r.error ? /* @__PURE__ */ (0, $.jsx)(N, {
			role: "status",
			children: J("settings:accessAddress.copyFailed")
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
var sl = [
	["environment", J("settings:peachProxy.environment")],
	["direct", J("settings:cloudProxy.direct")],
	["proxy", J("settings:shared.custom")]
];
function cl({ mode: e, onChange: t, labelledBy: n }) {
	return /* @__PURE__ */ (0, $.jsx)(R, {
		"aria-label": n ? void 0 : J("settings:peachProxy.mode"),
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
		children: sl.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
			id: e,
			children: t
		}, e))
	});
}
function ll({ id: e, value: t, onChange: n, saved: r = !1, required: i, error: a }) {
	return /* @__PURE__ */ (0, $.jsx)(P, {
		id: e,
		type: "password",
		label: J("settings:peachProxy.url"),
		autoComplete: "off",
		spellCheck: "false",
		value: t,
		onChange: n,
		placeholder: r ? J("settings:peachProxy.savedPlaceholder") : "http://127.0.0.1:7890",
		validationBehavior: "aria",
		isRequired: i,
		isInvalid: !!a,
		hint: a
	});
}
// src/react/settings/tunnel-settings.tsx
var ul = 2e3, dl = 3e5, fl = [["quick", J("settings:cloudflareTunnel.quick")], ["named", J("settings:cloudflareTunnel.named")]], pl = {
	quick: J("settings:remoteAccess.quickHelp"),
	named: J("settings:remoteAccess.namedHelp")
};
function ml({ revision: e, initial: t, receipt: n, blocked: r = !1 }) {
	let [i, a] = (0, Z.useState)(t);
	(0, Z.useEffect)(() => {
		r && a((e) => e.state === "stopped" ? e : {
			...e,
			enabled: !1,
			state: "stopped",
			url: ""
		});
	}, [r]);
	let [s, c] = (0, Z.useState)(e), [l, u] = (0, Z.useState)(t.mode), [d, m] = (0, Z.useState)(t.hostname), [h, g] = (0, Z.useState)(""), [v, y] = (0, Z.useState)({}), b = Y(), x = i.state === "starting" || i.state === "running", S = i.named_available && l === "named";
	(0, Z.useEffect)(() => {
		if (i.state !== "starting") return;
		let e = new AbortController();
		return Bn({
			signal: e.signal,
			everyMs: ul,
			limitMs: dl,
			read: (e) => Jt(e),
			apply: (e) => {
				e.tunnel && (Wn.setQueryData(_, e), a(e.tunnel), c(e.revision));
			},
			done: (e) => !!e.tunnel && e.tunnel.state !== "starting"
		}), () => e.abort();
	}, [i.state]);
	let C = (e, t, n) => {
		y({}), b.run(e, (e) => W("/api/configuration/tunnel", {
			revision: s,
			enabled: t,
			mode: l,
			hostname: d,
			token: h
		}, "POST", e), (e) => {
			a(e), c(e.revision), u(e.mode), m(e.hostname), g(""), n(e);
		}, (e) => {
			let t = e instanceof f ? e.body : null, n = Mt(t) || Mt(t?.detail);
			n ? y(n) : b.setError(q(e));
		});
	};
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "tunnel",
		guide: "tunnel",
		title: J("settings:remoteAccess.title"),
		onSubmit: (e) => {
			e.preventDefault(), C("save", x, () => n(J("settings:shared.settingsSaved")));
		},
		aside: /* @__PURE__ */ (0, $.jsx)(gt, {
			tone: i.error ? "error" : x ? "progress" : "neutral",
			children: i.error ? J("settings:cloudflareTunnel.connectionFailed") : i.state === "running" ? J("settings:shared.running") : i.state === "starting" ? J("settings:cloudflareTunnel.connectingStatus") : J("settings:shared.stopped")
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			i.named_available ? /* @__PURE__ */ (0, $.jsx)(at, {
				"aria-label": J("settings:cloudflareTunnel.modeLabel"),
				value: l,
				isDisabled: x || r,
				onChange: (e) => u(e),
				className: $e,
				children: fl.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(o, {
					value: e,
					className: Qe,
					children: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(N, { children: pl[S ? "named" : "quick"] }),
			S ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(P, {
				id: "tunnel-hostname",
				label: J("settings:remoteAccess.hostname"),
				autoComplete: "off",
				maxLength: 253,
				value: d,
				onChange: m,
				isDisabled: x || r,
				validationBehavior: "aria",
				isInvalid: !!v.hostname,
				hint: v.hostname || J("settings:remoteAccess.hostnameHelp")
			}), /* @__PURE__ */ (0, $.jsx)(P, {
				id: "tunnel-token",
				type: "password",
				label: J("settings:remoteAccess.tunnelToken"),
				autoComplete: "off",
				maxLength: 2048,
				value: h,
				onChange: g,
				isDisabled: x || r,
				validationBehavior: "aria",
				hint: i.token_set ? J("settings:cloudflareTunnel.tokenSaved") : J("settings:cloudflareTunnel.tokenHint")
			})] }) : null,
			i.available ? null : /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "warning",
				title: J("settings:cloudflareTunnel.binaryMissing"),
				children: J("settings:cloudflareTunnel.binaryMissingHelp")
			}),
			i.state === "running" && i.url ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "info",
				title: J("settings:cloudflareTunnel.publicUrl"),
				children: /* @__PURE__ */ (0, $.jsx)(he, {
					href: i.url,
					children: i.url
				})
			}) : null,
			i.state === "starting" ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "info",
				title: J("settings:cloudflareTunnel.connectingTitle"),
				children: J("settings:cloudflareTunnel.connectingHelp")
			}) : null,
			i.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: K(i, "error") }) : null,
			b.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: b.error }) : null
		] }), /* @__PURE__ */ (0, $.jsxs)(M, { children: [/* @__PURE__ */ (0, $.jsx)(p, {
			variant: i.named_available ? "secondary" : "primary",
			onClick: () => C("toggle", !x, (e) => n(e.enabled ? J("settings:cloudflareTunnel.started") : J("settings:cloudflareTunnel.stopped"))),
			...G(b.busy === "toggle"),
			disabled: r && !x,
			children: J(x ? "settings:cloudflareTunnel.stop" : "settings:remoteAccess.start")
		}), i.named_available ? /* @__PURE__ */ (0, $.jsx)(p, {
			type: "submit",
			...G(b.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) : null] })]
	});
}
// src/react/settings/network-settings.tsx
function hl({ data: e, receipt: t, issues: n }) {
	let [r, i] = (0, Z.useState)(e.access?.mode), a = r === "open" || r === "locked";
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n, /* @__PURE__ */ (0, $.jsx)(ma, { entries: [
		(!!e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources) && {
			id: "network-addresses",
			label: J("settings:accessUrls.title"),
			content: /* @__PURE__ */ (0, $.jsx)(al, {
				data: e,
				receipt: t
			})
		},
		e.access && {
			id: "network-access",
			label: J("settings:accessPassword.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Ic, {
				initial: e.access,
				receipt: t,
				onSaved: (e) => i(e.mode),
				devices: (e) => /* @__PURE__ */ (0, $.jsx)(nl, {
					revision: e.revision,
					receipt: t
				}),
				after: e.api_token ? (n) => /* @__PURE__ */ (0, $.jsx)(zc, {
					initial: e.api_token,
					mode: n.mode,
					receipt: t
				}) : void 0
			})
		},
		e.certificate && {
			id: "network-certificate",
			label: J("settings:certificateTrust.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Hc, { initial: e.certificate })
		},
		e.tunnel && {
			id: "network-tunnel",
			label: J("settings:remoteAccess.title"),
			content: /* @__PURE__ */ (0, $.jsx)(ml, {
				revision: e.revision,
				initial: e.tunnel,
				receipt: t,
				blocked: a
			})
		},
		e.peach_proxy && {
			id: "peachProxy",
			label: J("settings:peachProxy.title"),
			content: /* @__PURE__ */ (0, $.jsx)(gl, {
				initial: e.peach_proxy,
				receipt: t
			})
		}
	] })] });
}
function gl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.mode), [o, s] = (0, Z.useState)(""), c = Y();
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "proxy",
		title: J("settings:peachProxy.title"),
		onSubmit: (e) => {
			e.preventDefault(), c.run("save", (e) => W("/api/configuration/peach-proxy", {
				mode: i,
				proxy: o
			}, "POST", e), (e) => {
				r(e), s(""), t(J("settings:shared.settingsSaved"));
			});
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:peachProxy.mode"),
				description: J("settings:peachProxy.modeHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(cl, {
					mode: i,
					onChange: a
				})
			}) }),
			i === "proxy" || n.needs_selection || c.error ? /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					i === "proxy" ? /* @__PURE__ */ (0, $.jsx)(ll, {
						id: "peachProxyAddress",
						value: o,
						onChange: s,
						saved: n.proxy_saved
					}) : null,
					n.needs_selection ? /* @__PURE__ */ (0, $.jsx)(F, {
						tone: "warning",
						title: J("settings:peachProxy.chooseMode"),
						children: J("settings:peachProxy.modeConflict")
					}) : null,
					c.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: c.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
				type: "submit",
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
// src/react/follow-manage/credentials.tsx
var _l = J("follow:sourceCredentials.clearBody"), vl = J("follow:sourceCredentials.worldReadable"), yl = [_e, ge];
function bl(e, t) {
	return (e.shared_fields || []).includes(t) ? J("follow:sourceCredentials.fromSharedHint") : e.fields.includes(t) ? J("follow:sourceCredentials.savedHint") : J("follow:sourceCredentials.notSet");
}
function xl({ row: e }) {
	if (Ht(e)) return /* @__PURE__ */ (0, $.jsx)(k, {
		variant: "caption",
		color: "lime",
		children: J("follow:sourceCredentials.configured")
	});
	let t = e.requirement === "required" ? "yellow" : e.requirement === "blocked" ? "rose" : "neutral";
	return /* @__PURE__ */ (0, $.jsx)(k, {
		variant: "caption",
		color: t,
		children: b[e.requirement] || ""
	});
}
function Sl({ row: e, readOnly: t, open: n, toast: r }) {
	let [i, a] = (0, Z.useState)({}), [o, s] = (0, Z.useState)(""), c = Ht(e), l = e.browser_login === !0 && !t, u = ci(si(e.provider), l && n, yl), d = kr({
		mutationFn: (t) => $n(e.provider, t),
		onSuccess: (e, t) => {
			if (e.note) s(sr(e.note_code ?? "", e.note));
			else {
				s(""), a({});
				for (let e of yl) Wn.invalidateQueries({
					queryKey: e,
					exact: !0
				});
				r(Object.keys(t).length ? J("follow:sourceCredentials.saved") : J("follow:sourceCredentials.cleared"));
			}
		},
		onError: (e) => s(q(e))
	}), f = () => {
		if (u.busy) return;
		let e = Object.fromEntries(Object.entries(i).map(([e, t]) => [e, t.trim()]).filter(([, e]) => e));
		Object.keys(e).length ? d.mutate(e) : s(J("follow:sourceCredentials.nothingEntered"));
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsxs)(N, { children: [K(e, "why"), e.where ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [" ", /* @__PURE__ */ (0, $.jsx)(he, {
				href: e.where,
				children: J("follow:sourceCredentials.getCredentials")
			})] }) : null] }),
			l ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(ai, {
					login: u,
					disabled: d.isPending,
					onStart: () => s("")
				})
			}), /* @__PURE__ */ (0, $.jsx)(oi, {
				login: u,
				saved: c
			})] }) : null,
			e.howto ? /* @__PURE__ */ (0, $.jsx)(N, { children: K(e, "howto") }) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex w-full flex-col gap-3",
				children: (e.needs || []).map((n) => /* @__PURE__ */ (0, $.jsx)(P, {
					type: "password",
					label: n,
					placeholder: bl(e, n),
					autoComplete: "off",
					spellCheck: "false",
					isDisabled: t || u.busy,
					value: i[n] || "",
					onChange: (e) => a({
						...i,
						[n]: e
					}),
					className: "w-full min-w-0"
				}, n))
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "danger",
					disabled: t,
					...G(d.isPending || u.busy),
					onClick: () => void Bt({
						title: J("follow:sourceCredentials.clearTitle"),
						body: _l,
						confirmLabel: J("follow:sourceCredentials.clearTitle"),
						danger: !0,
						holdToConfirm: !0,
						onConfirm: () => d.mutateAsync({})
					}),
					children: J("follow:shared.clear")
				}) : null, /* @__PURE__ */ (0, $.jsx)(p, {
					variant: "primary",
					disabled: t,
					...G(d.isPending || u.busy),
					onClick: f,
					children: J("follow:shared.saveSettings")
				})]
			}),
			o || u.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: o || u.error }) : null,
			(e.shared_fields || []).length ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("follow:sourceCredentials.sharedFieldsHint", {
				count: e.shared_fields.length,
				fields: On(e.shared_fields)
			}) }) : null,
			e.path ? /* @__PURE__ */ (0, $.jsx)(ce, {
				summary: J("follow:sourceCredentials.credentialsFile"),
				children: /* @__PURE__ */ (0, $.jsx)(He, {
					path: e.path,
					className: "font-mono text-caption-1-regular text-text-tertiary",
					onRevealed: r
				})
			}) : null
		]
	});
}
function Cl({ row: e, readOnly: t, toast: n }) {
	let [r, i] = (0, Z.useState)(e.requirement === "required" && !Ht(e)), a = /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "inline-flex size-3.5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ (0, $.jsx)(li, { provider: e.provider })
			}),
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
				children: e.provider_label
			}),
			/* @__PURE__ */ (0, $.jsx)(xl, { row: e }),
			e.missing.map((e) => /* @__PURE__ */ (0, $.jsx)(k, {
				variant: "caption",
				color: "rose",
				children: J("follow:sourceCredentials.missingField", { field: e })
			}, e))
		]
	});
	return e.requirement === "none" || e.requirement === "blocked" ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [a, e.requirement === "blocked" ? /* @__PURE__ */ (0, $.jsx)(N, { children: K(e, "why") }) : null]
	}) : /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-credential-provider": e.provider,
		className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [
			a,
			/* @__PURE__ */ (0, $.jsx)(ce, {
				summary: Ht(e) ? J("follow:sourceCredentials.editCredentials") : J("follow:sourceCredentials.enterCredentials"),
				isOpen: r,
				onOpenChange: i,
				children: /* @__PURE__ */ (0, $.jsx)(Sl, {
					row: e,
					readOnly: t,
					open: r,
					toast: n
				})
			}),
			e.world_readable ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("follow:sourceCredentials.permissionsTooOpen"),
				children: vl
			}) : null
		]
	});
}
function wl({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = e.providers || [], a = i.filter((e) => e.requirement === "required" && !Ht(e));
	if ((0, Z.useEffect)(() => {
		qn("credentials", { done: i.filter(Ht).map((e) => e.provider) });
	}, [e]), !i.length) return /* @__PURE__ */ (0, $.jsx)(fe, {
		size: "compact",
		icon: Rt,
		title: J("follow:sourceCredentials.emptyTitle"),
		children: J("follow:sourceCredentials.emptyHint")
	});
	let o = a.length ? /* @__PURE__ */ (0, $.jsx)("span", {
		className: "text-body-2-regular text-text-error-primary",
		children: J("follow:sourceCredentials.pendingCount", { count: a.length })
	}) : null, s = /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: [
		{
			title: J("follow:sourceCredentials.groupSupported"),
			rows: i.filter((e) => e.requirement !== "none" && e.requirement !== "blocked")
		},
		{
			title: J("follow:sourceCredentials.groupNotNeeded"),
			rows: i.filter((e) => e.requirement === "none")
		},
		{
			title: J("follow:sourceCredentials.groupUnsupported"),
			rows: i.filter((e) => e.requirement === "blocked")
		}
	].filter((e) => e.rows.length).map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": e.title,
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)("h4", {
			className: "text-body-medium text-text-secondary",
			children: e.title
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: Pt({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: e.rows.map((e) => /* @__PURE__ */ (0, $.jsx)(Cl, {
				row: e,
				readOnly: t,
				toast: n
			}, e.provider))
		})]
	}, e.title)) });
	return r ? /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "credentials",
		title: J("follow:sourceCredentials.sectionTitle"),
		aside: o || void 0,
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-col gap-4",
			children: s
		}) })
	}) : /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Pt({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "mr-auto text-title-2-medium text-text-primary",
				children: J("follow:sourceCredentials.sectionTitle")
			}), o]
		}), s]
	});
}
// src/react/settings/entry-links-settings.tsx
function Tl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.sites), i = Y(), a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		host: t
	} : n));
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "entry-links",
		title: J("settings:entryLinks.title"),
		onSubmit: (e) => {
			e.preventDefault();
			let a = { sites: Object.fromEntries(n.map((e) => [e.key, { host: e.host }])) };
			i.run("save", (e) => W("/api/configuration/entry-links", a, "POST", e), (e) => {
				r(e.sites), t(J("settings:shared.settingsSaved"));
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			/* @__PURE__ */ (0, $.jsx)(N, { children: ue }),
			n.map((e) => /* @__PURE__ */ (0, $.jsx)(P, {
				id: `entry-link-${e.key}`,
				label: /* @__PURE__ */ (0, $.jsx)(ft, {
					site: e.key,
					label: J("settings:entryLinks.siteAddress", { site: e.label })
				}),
				autoComplete: "off",
				maxLength: 100,
				value: e.host,
				placeholder: e.default_host,
				onChange: (t) => a(e.key, t),
				validationBehavior: "aria",
				hint: de
			}, e.key)),
			i.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: i.error }) : null
		] }), /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(p, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) })]
	});
}
// src/react/settings/indexer-settings.tsx
var El = "/api/configuration/indexers";
function Dl({ receipt: e }) {
	let t = X({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => U(El, e),
		refetchOnMount: "always"
	});
	return t.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: q(t.error) }) : t.isFetching ? /* @__PURE__ */ (0, $.jsx)(nt, {
		label: J("settings:indexers.loading"),
		html: bn
	}) : t.data ? /* @__PURE__ */ (0, $.jsx)(Al, {
		initial: t.data,
		receipt: e
	}) : null;
}
function Ol(e) {
	try {
		return new globalThis.URL(e).host;
	} catch {
		return e;
	}
}
function kl({ row: e, index: t }) {
	let n = [
		e.url ? Ol(e.url) : J("settings:indexers.noUrl"),
		e.enabled ? J("settings:shared.enabled") : J("settings:shared.disabled"),
		e.api_key_set && !e.clear_api_key ? J("settings:indexers.apiKeySaved") : e.api_key ? J("settings:indexers.apiKeyUnsaved") : J("settings:indexers.noApiKey")
	];
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-baseline gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "shrink-0 text-text-primary",
			children: e.name || J("settings:indexers.defaultName", { index: t + 1 })
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate text-body-2-regular text-text-secondary",
			children: n.join(" · ")
		})]
	});
}
function Al({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.indexers), i = Y();
	(0, Z.useEffect)(() => {
		qn("indexers", { open: e.indexers.map((e) => !e.url) });
	}, [e]);
	let a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "indexers",
		title: J("settings:indexers.title"),
		onSubmit: (e) => {
			e.preventDefault(), i.run("save", (e) => W(El, { indexers: n }, "POST", e), (e) => {
				r(e.indexers), t(J("settings:indexers.saved"));
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(ce, {
				summary: J("settings:indexers.connectHelp"),
				children: /* @__PURE__ */ (0, $.jsxs)(N, { children: [
					J("settings:indexers.helpText"),
					" ",
					/* @__PURE__ */ (0, $.jsx)(he, {
						href: "https://github.com/peach-mitao/peach/blob/master/docs/RESOURCE_SEARCH.md",
						children: J("settings:indexers.setupGuide")
					})
				] })
			}), n.map((e, t) => /* @__PURE__ */ (0, $.jsx)("div", {
				className: "min-w-0 border-t border-separator-border pt-2",
				children: /* @__PURE__ */ (0, $.jsx)(ce, {
					defaultOpen: !e.url,
					summary: /* @__PURE__ */ (0, $.jsx)(kl, {
						row: e,
						index: t
					}),
					children: /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, $.jsx)(P, {
								label: J("settings:shared.name"),
								"aria-label": J("settings:indexers.nameLabel", { index: t + 1 }),
								value: e.name,
								maxLength: 80,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { name: t })
							}),
							/* @__PURE__ */ (0, $.jsx)(P, {
								label: J("settings:indexers.torznabUrl"),
								"aria-label": J("settings:indexers.torznabUrlLabel", { index: t + 1 }),
								value: e.url,
								type: "url",
								autoComplete: "off",
								placeholder: J("settings:indexers.urlPlaceholder"),
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { url: t })
							}),
							/* @__PURE__ */ (0, $.jsx)(P, {
								label: "API key",
								"aria-label": J("settings:indexers.apiKeyLabel", { index: t + 1 }),
								type: "password",
								autoComplete: "new-password",
								value: e.api_key || "",
								placeholder: e.api_key_set ? J("settings:shared.savedLeaveBlank") : void 0,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { api_key: t })
							}),
							/* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-6 gap-y-2",
								children: [
									/* @__PURE__ */ (0, $.jsx)(O, {
										isSelected: e.enabled,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { enabled: t }),
										children: J("settings:shared.enable")
									}),
									e.api_key_set ? /* @__PURE__ */ (0, $.jsx)(O, {
										isSelected: !!e.clear_api_key,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { clear_api_key: t }),
										children: J("settings:indexers.clearApiKey")
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(p, {
										variant: "danger",
										type: "button",
										size: "small",
										disabled: !!i.busy,
										"aria-label": J("settings:indexers.removeLabel", { index: t + 1 }),
										onClick: () => r(n.filter((t) => t.key !== e.key)),
										children: J("settings:shared.remove")
									})
								]
							})
						]
					})
				})
			}, e.key))]
		}), i.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: i.error }) : null] }), /* @__PURE__ */ (0, $.jsxs)(M, { children: [/* @__PURE__ */ (0, $.jsx)(p, {
			variant: "secondary",
			type: "button",
			disabled: !!i.busy || n.length >= e.max_indexers,
			onClick: () => r([...n, {
				key: Gn(),
				name: "",
				url: "",
				enabled: !0,
				api_key_set: !1
			}]),
			children: J("settings:indexers.add")
		}), /* @__PURE__ */ (0, $.jsx)(p, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		})] })]
	});
}
// src/react/settings/scraping-browser-settings.tsx
var jl = ["window", "headless"], Ml = (e) => J(e === "headless" ? "settings:scrapingBrowser.headless" : "settings:scrapingBrowser.window");
function Nl({ receipt: e }) {
	let t = X({
		queryKey: Xe,
		queryFn: ({ signal: e }) => $t(e),
		refetchOnMount: "always"
	}), n = kr({
		mutationFn: (e) => W(Ze, { browser_mode: e }),
		onSuccess: (t) => {
			Wn.setQueryData(Xe, (e) => e && {
				...e,
				browser_mode: t.browser_mode
			}), e(J("settings:shared.settingsSaved"));
		}
	}, Wn), r = n.error || t.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:scrapingBrowser.title"),
		children: [/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:scrapingBrowser.mode"),
			description: J("settings:scrapingBrowser.modeHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "scrapingBrowserModeSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:scrapingBrowser.mode"),
					selectedKey: t.data?.browser_mode ?? "window",
					isDisabled: !t.data || n.isPending,
					onSelectionChange: (e) => {
						e !== null && n.mutate(String(e));
					},
					children: jl.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: e,
						children: Ml(e)
					}, e))
				})
			})
		}) }), r ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(r) })
		}) : null]
	});
}
// src/react/settings/want-search-settings.tsx
var Pl = [
	1,
	3,
	7,
	14,
	30
], Fl = [
	1,
	3,
	5,
	10,
	0
], Il = (e) => e === 1 ? J("settings:wantSearch.daily") : J("settings:wantSearch.everyDays", { count: e }), Ll = (e) => e === 0 ? J("settings:wantSearch.never") : J("settings:wantSearch.attempts", { count: e });
function Rl({ receipt: e }) {
	let t = X({
		queryKey: et,
		queryFn: ({ signal: e }) => Qt(e),
		refetchOnMount: "always"
	}), n = Fr("want-search"), r = !t.data || n.isPending, i = (t) => n.mutate(t, { onSuccess: () => e(J("settings:shared.settingsSaved")) }), a = n.error || t.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:wantSearch.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:wantSearch.interval"),
			description: J("settings:wantSearch.intervalHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "wantStaleSearchDaysSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:wantSearch.interval"),
					selectedKey: String(t.data?.wantStaleSearchDays ?? 7),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ wantStaleSearchDays: Number(e) });
					},
					children: Pl.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: Il(e)
					}, e))
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:wantSearch.giveUp"),
			description: J("settings:wantSearch.giveUpHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "wantStaleAttemptLimitSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:wantSearch.giveUp"),
					selectedKey: String(t.data?.wantStaleAttemptLimit ?? 3),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ wantStaleAttemptLimit: Number(e) });
					},
					children: Fl.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: Ll(e)
					}, e))
				})
			})
		})] }), a ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(a) })
		}) : null]
	});
}
// src/react/settings/cover-fallback-settings.tsx
function zl({ receipt: e }) {
	let t = X({
		queryKey: et,
		queryFn: ({ signal: e }) => Qt(e),
		refetchOnMount: "always"
	}), n = Fr("cover-fallback"), r = n.error || t.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:coverFallback.title"),
		children: [/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:coverFallback.javdb"),
			description: J("settings:coverFallback.javdbHelp"),
			children: /* @__PURE__ */ (0, $.jsx)(H, {
				"aria-label": J("settings:coverFallback.javdb"),
				isSelected: t.data?.javdbCoverFallback === !0,
				isDisabled: !t.data || n.isPending,
				onChange: (t) => n.mutate({ javdbCoverFallback: t }, { onSuccess: () => e(J("settings:shared.settingsSaved")) })
			})
		}) }), r ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(r) })
		}) : null]
	});
}
// src/react/settings/source-settings.tsx
function Bl({ data: e, receipt: t, active: n, issues: r }) {
	let i = X({
		queryKey: _e,
		queryFn: ({ signal: e }) => Yt(e),
		enabled: n,
		refetchOnMount: "always"
	});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [r, /* @__PURE__ */ (0, $.jsx)(ma, { entries: [
		{
			id: "sources-credentials",
			label: J("follow:sourceCredentials.sectionTitle"),
			content: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
				"data-guide-target": "sources",
				children: /* @__PURE__ */ (0, $.jsx)(m, {
					href: "/sources",
					variant: "secondary",
					children: J("settings:sourceSettings.sourcesLink")
				})
			}), i.data ? /* @__PURE__ */ (0, $.jsx)(wl, {
				data: i.data,
				readOnly: !!e.ledger_read_only,
				toast: t,
				embedded: !0
			}) : i.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:sourceSettings.credentialsFailed"),
				children: q(i.error)
			}) : n ? /* @__PURE__ */ (0, $.jsx)(nt, {
				label: J("settings:sourceSettings.loadingCredentials"),
				html: Ut
			}) : null] })
		},
		{
			id: "sources-follow-fetch",
			label: J("settings:followFetch.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Qs, { receipt: t })
		},
		{
			id: "sources-scraping-browser",
			label: J("settings:scrapingBrowser.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Nl, { receipt: t })
		},
		{
			id: "sources-covers",
			label: J("settings:coverFallback.title"),
			content: /* @__PURE__ */ (0, $.jsx)(zl, { receipt: t })
		},
		e.entry_links && {
			id: "sources-entry-links",
			label: J("settings:entryLinks.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Tl, {
				initial: e.entry_links,
				receipt: t
			})
		},
		{
			id: "sources-indexers",
			label: J("settings:indexers.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Dl, { receipt: t })
		},
		{
			id: "sources-want-search",
			label: J("settings:wantSearch.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Rl, { receipt: t })
		}
	] })] });
}
// src/react/settings/configuration-panel.ts
var Vl = "flex flex-col gap-6";
function Hl(e) {
	return {
		className: e.active ? `${Vl} ui-board-group-active` : Vl,
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
	};
}
// src/react/settings/configuration-shape.ts
function Ul(e) {
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => h.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available,
		localDownload: !0
	};
}
function Wl(e) {
	let t = e.tunnel;
	return {
		port: !!(e.editable && e.port_editable !== !1),
		addresses: e.network ? 1 + Number(!!(e.network.lan_url || e.network.ip_url)) + Number(!!(e.network.lan_url && e.network.ip_url)) : 0,
		networkEditable: !!e.network?.editable,
		lan: e.network?.host === "0.0.0.0",
		proxyAddress: e.peach_proxy?.mode === "proxy" || !!e.peach_proxy?.needs_selection,
		access: e.access?.mode ?? "",
		tunnelNamed: !!t?.named_available,
		tunnelNamedMode: !!(t?.named_available && t.mode === "named"),
		tunnelNote: !!(t && (!t.available || t.state === "starting" || t.state === "running" && t.url))
	};
}
function Gl(e) {
	let t = e.updates, n = e.update_job?.state ?? "idle", r = !t || t.state === "unchecked" && !t.checked_at && n === "idle", i = +!!t?.package_kind + (r ? 0 : +!!t?.checked_at + (t?.state === "unchecked" ? 0 : 1) + (n === "idle" ? 0 : 1)), a = e.automatic_updates, o = e.storage;
	return {
		releaseFacts: t?.package_kind ? 5 : 4,
		releaseNotes: i,
		autoUpdateHelp: !(!a || a.available && !a.download_available),
		startupNote: !!e.startup?.message,
		desktopNote: !!e.startup?.desktop_message,
		storage: !!o,
		storageRows: o?.usage?.categories.length ?? 0,
		storageNotes: o && !o.relocation.available ? 1 : 0,
		reporting: !!e.remote_reporting,
		reportingIdle: !(!e.remote_reporting || e.remote_reporting.available),
		sharingIdle: !(!e.library_sharing || e.library_sharing.available),
		facts: e.facts.map((e) => e.term),
		uninstall: !!e.uninstall,
		uninstallHelp: !!e.uninstall?.available
	};
}
// src/react/settings/configuration-page.tsx
function Kl({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
	let i = X({
		queryKey: _,
		queryFn: ({ signal: e }) => Jt(e)
	}), a = i.data;
	return a ? /* @__PURE__ */ (0, $.jsx)(Xl, {
		data: a,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: i.isFetching,
		reload: () => {
			i.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, $.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "error",
			title: J("settings:configurationPage.loadFailedTitle"),
			children: i.error ? q(i.error) : J("settings:configurationPage.loadFailed")
		})
	});
}
function ql({ data: e, sections: t, reload: n, refreshing: r }) {
	return /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: t.map((t) => {
		let i = e.section_errors?.[t];
		return i ? /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "error",
			title: i.title,
			action: /* @__PURE__ */ (0, $.jsx)(p, {
				variant: "secondary",
				size: "small",
				onClick: n,
				...G(r),
				children: J("settings:shared.reload")
			}),
			children: i.message
		}, t) : null;
	}) });
}
var Jl = "(max-width:1100px)", Yl = 0;
function Xl({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, Z.useState)(() => `board-tabs-${++Yl}`), [l, u] = (0, Z.useState)(r), d = (0, Z.useRef)(null), f = (0, Z.useRef)(null), p = (0, Z.useRef)(l);
	(0, Z.useEffect)(() => {
		u(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = Ul(e);
		t && qn("downloads", t), qn("network", Wl(e)), qn("maintenance", Gl(e));
	}, [e]), (0, Z.useLayoutEffect)(() => {
		let e = f.current, t = d.current, n = () => t.style.setProperty("--settings-nav-height", `${e.offsetHeight}px`);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), () => r.disconnect();
	}, []), (0, Z.useLayoutEffect)(() => {
		if (p.current === l) return;
		p.current = l;
		let e = d.current?.querySelector(".ui-board-local-nav"), t = d.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia(Jl).matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [l]);
	let m = (e) => {
		u(e), dr(ur(e), {
			replace: !0,
			state: Ln.navigation.location.state
		});
	}, [h, g] = (0, Z.useState)(() => matchMedia(Jl).matches);
	(0, Z.useEffect)(() => {
		let e = matchMedia(Jl), t = () => g(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let _ = {
		data: e,
		receipt: t
	}, y = (t) => /* @__PURE__ */ (0, $.jsx)(ql, {
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), b = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], x = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || b.some((t) => e.section_errors?.[t])), S = e.downloads, C = [
		{
			id: "library",
			title: v.library,
			body: () => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [y([
				"media_sources",
				"library_count",
				"mount_dependencies"
			]), /* @__PURE__ */ (0, $.jsx)(Ac, { ..._ })] })
		},
		{
			id: "sources",
			title: v.subscriptions,
			body: (e) => /* @__PURE__ */ (0, $.jsx)(Bl, {
				..._,
				active: e,
				issues: y(["entry_links"])
			})
		},
		{
			id: "ai",
			title: v.ai,
			body: (e) => /* @__PURE__ */ (0, $.jsx)(c, {
				active: e,
				receipt: t
			})
		},
		...S || e.section_errors?.downloads ? [{
			id: "downloads",
			title: v.downloads,
			body: (e) => /* @__PURE__ */ (0, $.jsx)(Ia, {
				initial: S,
				receipt: t,
				active: e,
				issues: y(["downloads"])
			})
		}] : [],
		...x ? [{
			id: "network",
			title: v.network,
			body: () => /* @__PURE__ */ (0, $.jsx)(hl, {
				..._,
				issues: y(b)
			})
		}] : [],
		{
			id: "maintenance",
			title: v.maintenance,
			body: (e) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [y([
				"startup",
				"uninstall",
				"storage",
				"remote_reporting",
				"library_sharing",
				"updates",
				"update_job",
				"automatic_updates",
				"facts"
			]), /* @__PURE__ */ (0, $.jsx)(Ms, {
				..._,
				active: e,
				reopenTutorial: n
			})] })
		},
		{
			id: "diagnostics",
			title: v.diagnostics,
			body: (e) => e ? i : void 0
		}
	], w = Math.max(0, C.findIndex((e) => e.title === tr(l)));
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		ref: d,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			ref: f,
			className: "ui-board-local-nav",
			"data-section-nav": "",
			children: /* @__PURE__ */ (0, $.jsx)(pt, {
				group: "configuration",
				label: J("settings:configurationPage.sectionsLabel"),
				value: C[w].id,
				tabs: C.map(({ id: e, title: t }) => ({
					value: e,
					label: t
				})),
				sectionItems: !0,
				panelPrefix: s,
				orientation: h ? "horizontal" : "vertical",
				className: "",
				onChange: (e) => m(C.find((t) => t.id === e).title)
			})
		}), C.map(({ id: e, title: t, body: n }, r) => {
			let i = {
				index: r,
				id: `${s}-panel-${e}`,
				labelledBy: `${s}-tab-${e}`,
				active: r === w
			}, a = zt(e);
			return /* @__PURE__ */ (0, $.jsxs)("div", {
				...Hl(i),
				children: [/* @__PURE__ */ (0, $.jsxs)("header", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)("h2", {
						className: "text-title-2-medium text-text-primary",
						"data-copy-key": `navigation.configurationSections.${e === "sources" ? "feeds" : e}`,
						children: t
					}), /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary select-text",
						"data-copy-key": "settings." + a,
						children: J("settings:" + a)
					})]
				}), n(i.active)]
			}, e);
		})]
	});
}
export { Kl as ConfigurationPage };

//# debugId=d3f61815-0dbb-405a-9f9d-96679803587e