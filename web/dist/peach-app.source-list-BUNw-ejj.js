(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a14011d6-b402-46ba-90a8-86b469f85ed7", e._sentryDebugIdIdentifier = "sentry-dbid-a14011d6-b402-46ba-90a8-86b469f85ed7");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $ea3928288112382f$export$439d29a4e110a164 as ee, Button as a, Bx as te, COLUMN_SORT as o, Checkbox as s, ChevronSortDown as ne, CollapseChevron as re, CollapseRegion as ie, DataTableFooter as c, DataTableFrame as l, EmptyState as u, FOLLOW_CHECK_KEY as d, LAYOUTS as f, M6 as ae, Note as p, SORT_DEFAULT_DIR as oe, SORT_OPTIONS as se, Select as ce, SelectItem as le, SelectionDock as ue, SortDirectionIcon as de, Switch as fe, Table as pe, TableColumnControls as me, TableColumnResizer as he, TableSelectionHeader as ge, TaskProgress as _e, Un as ve, __toESM as m, authorGroups as ye, authorName as be, busyProps as h, cardClass as xe, checkEvidenceGap as Se, checkFailures as Ce, checkReceipt as we, checkSummary as Te, checkedText as Ee, clickedBlank as g, columnVisibilityFeature as _, confirmModal as v, createColumnHelper as De, dZ as y, dropSources as Oe, du as ke, errorHeadline as Ae, errorMessage as b, fetchCheckJob as je, fetchPending as Me, flexRender as Ne, isBroken as Pe, l7 as Fe, mapLimit as Ie, markItem as Le, pageWindow as Re, patchSource as ze, reloadFollowManage as Be, removeSource as Ve, require_jsx_runtime as x, require_react as S, rowPaginationFeature as C, rowSelectionFeature as w, rowSortingFeature as He, selectionState as Ue, setSourceEnabled as We, sortLabel as Ge, startCheck as Ke, tableFeatures as T, tableRows as qe, toggleGroup as E, useBackgroundJob as Je, useMutation as D, useTable as Ye, useTablePreferences as Xe } from "./peach-app.js";
import { createPaginatedRowModel as Ze } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { AuthorAvatar as Qe, ErrorLine as $e, SourceIcon as O, SourceLink as et, StatusBadge as tt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/follow-manage/source-list.tsx
var k = /* @__PURE__ */ m(S(), 1), A = x(), nt = T({
	rowPaginationFeature: C,
	rowSelectionFeature: w,
	rowSortingFeature: He,
	columnVisibilityFeature: _,
	paginatedRowModel: Ze()
}), j = (e) => (Number(e) || 0).toLocaleString(), rt = Object.fromEntries(Object.entries(o).map(([e, t]) => [t, e])), M = 740;
function it() {
	let [e, t] = (0, k.useState)(!1), n = (0, k.useRef)(null), r = (0, k.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < M));
		r.observe(e), n.current = r, t(e.clientWidth < M);
	}, []);
	return (0, k.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var at = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, ot = Object.entries(at).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function N({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, A.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			g(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, A.jsx)(s, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ (0, A.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, A.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, A.jsx)(O, { provider: e.provider })
				}), /* @__PURE__ */ (0, A.jsx)(et, { source: e })]
			}),
			/* @__PURE__ */ (0, A.jsx)(ee, { children: e.provider_label }),
			/* @__PURE__ */ (0, A.jsx)(tt, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, A.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, A.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, A.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, A.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, A.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, A.jsx)($e, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, A.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, A.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Ee(e)
					}),
					/* @__PURE__ */ (0, A.jsx)(fe, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, A.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, A.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: y,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...h(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, A.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ae,
							"aria-label": `移除 ${e.label}`,
							disabled: r.readOnly,
							onClick: () => r.remove(e)
						})]
					})
				]
			})
		]
	});
}
function st({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: te, onToggleGroup: o, onToggle: s }) {
	let ne = e.map((e) => e.id), c = e.filter((e) => e.enabled).map((e) => e.id), l = e.filter(Pe).length, u = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), d = `follow-author-${e[0].id}`, f = Ue(r, ne);
	return /* @__PURE__ */ (0, A.jsxs)("section", {
		"aria-label": `${t} 的关注来源`,
		className: xe({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, A.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, A.jsx)(Qe, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, A.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, A.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, A.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: u,
						children: [
							e.map((e) => /* @__PURE__ */ (0, A.jsx)(O, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, A.jsx)(ee, { children: `来源：${u}` }),
							l ? /* @__PURE__ */ (0, A.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${l} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, A.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: y,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !c.length || i.readOnly,
						...h(i.busy),
						onClick: () => i.check(c)
					}), /* @__PURE__ */ (0, A.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, A.jsx)(a, {
							variant: "secondary",
							size: "small",
							leadingIcon: Fe,
							"aria-pressed": f.all ? "true" : f.some ? "mixed" : "false",
							"aria-label": `${f.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => o(!f.all),
							children: f.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ (0, A.jsx)(a, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": d,
							leadingIcon: re,
							"aria-label": `${n ? "收起" : "展开"} ${t} 的来源`,
							onClick: () => te(!n),
							children: n ? "收起" : "展开"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, A.jsx)(ie, {
			id: d,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, A.jsx)(N, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => s(e.id, t)
			}, e.id))
		})]
	});
}
function ct(ie) {
	let { data: m, sort: g, dir: _, page: Pe, layout: Fe, pageSize: x, selected: S, readOnly: C, onSort: w, onPage: He, onLayout: T, onPageSize: Ze, onSelected: M, toast: N, openFollow: ct, onAdd: lt } = ie, P = m.sources, F = (0, k.useMemo)(() => m.author_aliases || [], [m.author_aliases]), I = m.counts || {}, [ut, dt] = (0, k.useState)(/* @__PURE__ */ new Set()), [ft, pt] = it(), [mt, L] = (0, k.useState)(""), R = (0, k.useMemo)(() => ye(P, g, _, F), [
		P,
		g,
		_,
		F
	]), ht = (0, k.useMemo)(() => qe(R, g, _, F), [
		R,
		g,
		_,
		F
	]), { job: z, running: B, outcome: V, start: gt } = Je({
		queryKey: d,
		queryFn: ({ signal: e }) => je(e),
		start: (e) => Ke(e),
		onError: (e) => L(b(e)),
		onFinish: (e) => {
			Be(), N(e.status === "failed" ? e.error || "检查失败" : we(e));
		}
	}), H = (e) => {
		B || gt.isPending || (L(""), gt.mutate(e));
	}, _t = (e, t) => M(E(S, [e], t)), vt = (e, t) => M(E(S, e, t)), yt = D({
		mutationFn: (e) => Ve(e),
		onSuccess: (e, t) => {
			Oe([t]), M(E(S, [t], !1)), N("已取消关注来源");
		},
		onError: (e) => L(b(e))
	}), bt = D({
		mutationFn: (e) => We(e.id, e.enabled),
		onSuccess: (e, t) => {
			ze(t.id, { enabled: t.enabled }), L("");
		},
		onError: (e) => L(b(e))
	}), xt = (e) => void v({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => yt.mutateAsync(e.id)
	}), U = D({
		mutationFn: async (e) => {
			let t = await Ie(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ve(t) : await We(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Oe(e.done);
			else for (let t of e.done) ze(t, { enabled: e.action === "enabled" });
			M(E(S, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				L(`${t.length}/${e.ids.length} 个来源未更新：${b(t[0]?.error)}`);
				return;
			}
			L("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			N(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => L(b(e))
	}), W = D({
		mutationFn: async (e) => {
			let t = ((await Me()).groups || []).flatMap((e) => [
				e.primary,
				...e.variants,
				...e.duplicates
			]).filter((e) => e.status === "new").map((e) => e.id);
			return {
				ids: t,
				failed: (await Ie(t, 6, (t) => Le(t, e))).filter((e) => !e.ok)
			};
		},
		onSuccess: (e) => {
			Be(), e.failed.length ? L(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (L(""), N(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => L(b(e))
	}), St = (e, t) => bt.mutate({
		id: e.id,
		enabled: t
	}), G = (0, k.useRef)({
		check: H,
		toggle: St,
		remove: xt,
		busy: !1,
		readOnly: C
	});
	G.current = {
		check: H,
		toggle: St,
		remove: xt,
		busy: B || gt.isPending,
		readOnly: C
	};
	let K = G.current, Ct = (0, k.useMemo)(() => {
		let e = De(), t = (e) => () => at[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, A.jsx)(ge, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, A.jsx)(s, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${e.row.original.source.label}`
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, A.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, A.jsx)(Qe, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, A.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, A.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, A.jsx)(et, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, A.jsx)($e, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, A.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, A.jsx)(O, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, A.jsx)(tt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Ee(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, A.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, A.jsx)(fe, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: K.readOnly,
							onChange: (t) => G.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, A.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: y,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || K.readOnly,
							...h(K.busy),
							onClick: () => G.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, A.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ae,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: K.readOnly,
							onClick: () => G.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [K]), q = (0, k.useMemo)(() => {
		let e = rt[g];
		return e ? [{
			id: e,
			desc: _ === "desc"
		}] : [];
	}, [g, _]), wt = (0, k.useMemo)(() => Object.fromEntries([...S].map((e) => [String(e), !0])), [S]), J = Fe === "table", Y = Xe("follow-sources", ot), X = Re(J ? ht.length : R.length, x, Pe), Z = Ye({
		features: nt,
		data: ht,
		columns: Ct,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: q,
			rowSelection: wt,
			pagination: {
				pageIndex: X.page - 1,
				pageSize: x
			},
			columnVisibility: Y.visibility
		},
		onColumnVisibilityChange: Y.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(q) : e)[0];
			if (!t) return;
			let n = o[t.id];
			n && w(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(wt) : e;
			M(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: X.page - 1,
				pageSize: x
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === x ? n.pageIndex !== t.pageIndex && He(n.pageIndex + 1) : Ze(n.pageSize);
		}
	}), Tt = Z.getRowModel().rows, Et = J ? Tt.map((e) => e.original.source.id) : R.slice(X.start, X.end).flatMap((e) => e.map((e) => e.id)), Dt = Ue(S, Et), Q = [...S], Ot = Ce(V), kt = P.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), At = Se(V), $ = R.length > 0 && ut.size >= R.length;
	return P.length ? /* @__PURE__ */ (0, A.jsxs)("div", {
		className: xe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, A.jsxs)("div", {
				ref: ft,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, A.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, A.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "关注列表"
					}), /* @__PURE__ */ (0, A.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: `${P.length.toLocaleString()} 个来源${I.new ? ` · ${j(I.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ (0, A.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						kt.length ? /* @__PURE__ */ (0, A.jsx)(a, {
							variant: "secondary",
							disabled: C,
							...h(K.busy),
							onClick: () => H(kt),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ (0, A.jsx)(a, {
							variant: "primary",
							leadingIcon: y,
							disabled: C,
							"aria-label": "检查全部",
							iconOnly: pt,
							...h(K.busy),
							onClick: () => H([]),
							children: "检查全部"
						}),
						/* @__PURE__ */ (0, A.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, A.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": "关注列表版式",
									children: [/* @__PURE__ */ (0, A.jsx)(a, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ve,
										"aria-label": f[0][1],
										"aria-pressed": !J,
										onClick: () => T("default")
									}), /* @__PURE__ */ (0, A.jsx)(a, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ke,
										"aria-label": f[1][1],
										"aria-pressed": J,
										onClick: () => T("table")
									})]
								}),
								J ? /* @__PURE__ */ (0, A.jsx)(me, {
									preferences: Y,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ (0, A.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, A.jsx)(ce, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: g,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											w(t, oe[t]);
										},
										children: se.map(([e, t]) => /* @__PURE__ */ (0, A.jsx)(le, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, A.jsx)(a, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: de,
										"data-icon-state": _ === "asc" ? "a" : "b",
										"aria-label": Ge(g, _),
										onClick: () => w(g, _ === "asc" ? "desc" : "asc")
									})]
								}),
								J ? null : /* @__PURE__ */ (0, A.jsx)(a, {
									variant: "secondary",
									iconOnly: pt,
									leadingIcon: re,
									"aria-expanded": !$,
									"aria-label": $ ? "全部展开" : "全部收起",
									onClick: () => dt($ ? /* @__PURE__ */ new Set() : new Set(R.map((e) => String(e[0].author_key || e[0].id)))),
									children: $ ? "全部展开" : "全部收起"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, A.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					B ? /* @__PURE__ */ (0, A.jsx)(_e, {
						embedded: !0,
						label: z?.message || (z?.total ? `${z.older ? "抓取历史" : "检查更新"}：已完成 ${z.checked || 0}/${z.total} 个来源` : "正在准备检查任务"),
						value: z?.checked,
						total: z?.total
					}) : null,
					mt ? /* @__PURE__ */ (0, A.jsx)(p, {
						tone: "error",
						title: "操作未完成",
						children: mt
					}) : null,
					!B && V?.results?.length ? /* @__PURE__ */ (0, A.jsx)(p, {
						tone: "neutral",
						title: "检查结果",
						children: Te(V)
					}) : null,
					Ot.length ? /* @__PURE__ */ (0, A.jsx)(p, {
						tone: "error",
						title: `${Ot.length} 个来源检查失败`,
						extra: /* @__PURE__ */ (0, A.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: Ot.map((e, t) => /* @__PURE__ */ (0, A.jsx)("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${Ae(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					At ? /* @__PURE__ */ (0, A.jsx)(p, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${At}`
					}) : null
				]
			}),
			/* @__PURE__ */ (0, A.jsxs)(ue, {
				label: "关注来源批量操作",
				visible: Q.length > 0,
				count: `已选 ${Q.length} 个来源`,
				children: [
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...h(K.busy),
						onClick: () => H(Q),
						children: "检查所选"
					}),
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...h(U.isPending),
						onClick: () => U.mutate({
							ids: Q,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...h(U.isPending),
						onClick: () => U.mutate({
							ids: Q,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "danger",
						size: "small",
						disabled: C,
						...h(U.isPending),
						onClick: () => void v({
							title: `删除 ${Q.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => U.mutateAsync({
								ids: Q,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "ghost",
						size: "small",
						onClick: () => M(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			J ? /* @__PURE__ */ (0, A.jsx)(l, {
				follow: !0,
				preferences: Y,
				onRowClick: (e) => _t(Number(e), !S.has(Number(e))),
				children: /* @__PURE__ */ (0, A.jsxs)(pe, {
					"aria-label": "关注来源",
					size: "sm",
					sortDescriptor: q[0] ? {
						column: q[0].id,
						direction: q[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Z.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, A.jsxs)(i, { children: [Z.getHeaderGroups()[0].headers.map((e) => {
						let n = e.column.id in o, r = Ne(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, A.jsx)(t, {
							id: e.id,
							allowsSorting: n,
							isRowHeader: e.column.id === "source",
							...Y.columnProps(e.id),
							children: ({ sortDirection: t }) => /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [e.id === "select" ? r : n ? /* @__PURE__ */ (0, A.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [r, /* @__PURE__ */ (0, A.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": t || void 0,
									children: /* @__PURE__ */ (0, A.jsx)(ne, {})
								})]
							}) : /* @__PURE__ */ (0, A.jsx)(ee, { children: r }), /* @__PURE__ */ (0, A.jsx)(he, {
								preferences: Y,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, A.jsx)(t, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: Y.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, A.jsx)(e, {
						renderEmptyState: () => "这一页没有来源",
						children: Tt.map((e) => /* @__PURE__ */ (0, A.jsxs)(n, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, A.jsx)(r, { children: Ne(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, A.jsx)(r, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(s, {
				isSelected: Dt.all,
				isIndeterminate: Dt.some,
				onChange: (e) => vt(Et, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ (0, A.jsx)("div", {
				className: "flex flex-col gap-3",
				children: R.slice(X.start, X.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, A.jsx)(st, {
						group: e,
						name: be(e, F),
						handlers: K,
						selected: S,
						open: !ut.has(t),
						onOpen: (e) => {
							let n = new Set(ut);
							e ? n.delete(t) : n.add(t), dt(n);
						},
						onToggleGroup: (t) => vt(e.map((e) => e.id), t),
						onToggle: _t
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, A.jsx)(c, {
				label: "关注列表",
				total: X.total,
				pagination: {
					pageIndex: X.page - 1,
					pageSize: x
				},
				unit: J ? "个来源" : "位创作者",
				pageUnit: J ? "条" : "位",
				onChange: (e) => {
					e.pageSize === x ? Z.setPageIndex(e.pageIndex) : Z.setPageSize(e.pageSize);
				}
			}),
			I.new ? /* @__PURE__ */ (0, A.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, A.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${j(I.new)} · 已看 ${j(I.seen)} · 已保存 ${j(I.saved)} · 已忽略 ${j(I.ignored)}`
					}),
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "secondary",
						size: "small",
						onClick: ct,
						children: "去看更新"
					}),
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...h(W.isPending),
						onClick: () => void v({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => W.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ (0, A.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...h(W.isPending),
						onClick: () => void v({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => W.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, A.jsx)(u, {
		icon: te,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ (0, A.jsx)(a, {
			variant: "primary",
			size: "small",
			onClick: lt,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
export { ct as SourceList };

//# debugId=a14011d6-b402-46ba-90a8-86b469f85ed7