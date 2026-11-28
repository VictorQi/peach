(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f9ea3f2f-df90-419d-ab5a-e61b83f1d616", e._sentryDebugIdIdentifier = "sentry-dbid-f9ea3f2f-df90-419d-ab5a-e61b83f1d616");
	} catch {}
})();
import { Button as e, LinkButton as t, Note as n, Progress as r, REPAIRS_KEY as i, RESULT_PANEL as a, RESULT_SECTION as o, SectionHeading as s, StatusLabel as c, Switch as l, apiSend as u, confirmModal as d, fetchRepairs as f, fmtSize as p, i2 as m, interfaceLanguage as h, localizeRepairs as g, queryClient as _, quoted as v, repairCenterPanelSkeleton as y, require_jsx_runtime as b, t as x, useAction as S, useQuery as C, withBackoff as w } from "./peach-app.js";
import { Page as T } from "./peach-app.page-QAncjzM1.js";
// src/react/settings/repair-center.tsx
var E = b(), D = {
	done: [x("settings:shared.completed"), "success"],
	succeeded: [x("settings:shared.completed"), "success"],
	complete: [x("settings:shared.completed"), "success"],
	running: [x("settings:shared.inProgress"), "progress"],
	pending: [x("settings:repairCenter.queued"), "neutral"],
	waiting: [x("settings:repairCenter.awaitingConfirmation"), "warning"],
	deferred: [x("settings:repairCenter.deferred"), "neutral"],
	failed: [x("settings:repairCenter.needsRetry"), "error"],
	none: [x("settings:repairCenter.nothingToDo"), "neutral"]
}, O = {
	files: x("settings:repairCenter.groups.files"),
	catalog: x("settings:repairCenter.groups.catalog"),
	people: x("settings:repairCenter.groups.people"),
	follow: x("settings:repairCenter.groups.follow"),
	records: x("settings:repairCenter.groups.records")
}, k = (e) => e.reduce((e, t) => {
	let n = e[e.length - 1];
	return n && n[0] === t.group ? n[1].push(t) : e.push([t.group, [t]]), e;
}, []), A = (e = 0) => e.toLocaleString(), j = (e) => (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString(h, {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit"
}), M = (e) => x("settings:repairCenter.filesAndSize", {
	count: e.files || 0,
	size: p(e.bytes || 0)
}), N = (e) => e.state === "running" && !!e.total, P = (e) => !!e.estimating || e.state === "running", F = w((e) => e?.items.some(P) ? 2e3 : !1), I = /* @__PURE__ */ new Set([
	"mount",
	"cooldown",
	"cost"
]), L = (e) => x(`settings:repairCenter.deferReasons.${I.has(e) ? e : "retry"}`);
function R(e) {
	let t = Object.entries(e.deferred || {}).filter(([, e]) => e > 0), n = t.reduce((e, [, t]) => e + t, 0), r = [];
	if (n) {
		let e = t.length === 1 ? L(t[0][0]) : t.map(([e, t]) => x("settings:repairCenter.deferReasonCount", {
			reason: L(e),
			count: t
		})).join(x("shell:format.clauseSeparator"));
		r.push(x("settings:repairCenter.deferredNote", {
			count: n,
			reason: e
		}));
	}
	return e.failed && r.push(x("settings:repairCenter.failedNote", {
		count: e.failed,
		place: v(x("settings:upgradeRepairs.title"))
	})), r.length ? /* @__PURE__ */ (0, E.jsx)("span", {
		className: "text-caption-1-regular text-text-secondary",
		children: r.join(x("shell:format.semicolonSeparator"))
	}) : null;
}
function z(e) {
	return e.estimating ? x("settings:repairCenter.estimating") : e.state === "failed" && e.error ? e.error : e.files ? x("settings:repairCenter.reclaimable", { size: p(e.bytes || 0) }) : e.state === "pending" && e.online ? x("settings:repairCenter.pendingChecks", { count: e.pending || 0 }) : e.state === "waiting" && e.backed_up ? x("settings:repairCenter.pendingFixes", { count: e.pending || 0 }) : e.covers ? x("settings:repairCenter.pendingCovers", { count: e.covers }) : e.state === "waiting" ? e.pending ? x("settings:repairCenter.pendingRecheck", { count: e.pending }) : "" : N(e) ? "" : e.total ? `${A(e.done)} / ${A(e.total)}` : e.changed ? x("settings:repairCenter.changedCount", { count: e.changed }) : "";
}
function B({ id: e, title: t, description: n, progress: r, options: i, children: a }) {
	return /* @__PURE__ */ (0, E.jsxs)("div", {
		id: e,
		className: `${o} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,
		children: [/* @__PURE__ */ (0, E.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ (0, E.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: t
				}),
				/* @__PURE__ */ (0, E.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: n
				}),
				i,
				r ? /* @__PURE__ */ (0, E.jsx)("div", {
					className: "pt-2",
					children: r
				}) : null
			]
		}), /* @__PURE__ */ (0, E.jsx)("div", {
			className: "flex shrink-0 items-center gap-3",
			children: a
		})]
	});
}
function V({ item: e }) {
	return /* @__PURE__ */ (0, E.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, E.jsx)("div", {
			className: "min-w-0 flex-1",
			children: /* @__PURE__ */ (0, E.jsx)(r, {
				label: x("settings:repairCenter.itemProgress", { title: e.title }),
				value: e.done || 0,
				max: e.total
			})
		}), /* @__PURE__ */ (0, E.jsxs)("span", {
			className: "shrink-0 text-caption-1-regular text-text-secondary tabular-nums",
			children: [
				A(e.done),
				" / ",
				A(e.total)
			]
		})]
	});
}
function H(e) {
	let t = R(e);
	return N(e) ? t ? /* @__PURE__ */ (0, E.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, E.jsx)(V, { item: e }), t]
	}) : /* @__PURE__ */ (0, E.jsx)(V, { item: e }) : t;
}
function U() {
	let r = C({
		queryKey: i,
		queryFn: ({ signal: e }) => f(e),
		refetchInterval: F
	}), o = r.data, p = S(), h = (e) => _.setQueryData(i, e), v = async (e, t) => g(await u(`/api/configuration/repairs/${e.id}`, {}, "POST", t)), b = (e) => void p.run("cover-automatic", async (t) => g(await u("/api/configuration/repairs/cover-artwork/automatic", { enabled: e }, "PUT", t)), h), w = (e) => e.backed_up ? void d({
		title: x("settings:repairCenter.applyTitle", { title: e.title }),
		body: x("settings:repairCenter.applyBody", { count: e.pending || 0 }),
		confirmLabel: x("settings:shared.start"),
		onConfirm: async () => h(await v(e))
	}) : e.files === void 0 ? void p.run(e.id, (t) => v(e, t), h) : void d({
		title: x("settings:repairCenter.deleteTitle", { title: e.title }),
		body: x("settings:repairCenter.deleteBody", { amount: M(e) }),
		confirmLabel: x("settings:repairCenter.deleteSnapshots"),
		danger: !0,
		holdToConfirm: !0,
		onConfirm: async () => h(await v(e))
	}), A = (e) => e.filter((e) => e.mode === "confirm" && e.state === "waiting" && !e.estimating), N = (e, t) => void d({
		title: t,
		body: e.some((e) => e.files !== void 0) ? x("settings:repairCenter.startManyBodyDelete") : x("settings:repairCenter.startManyBody"),
		items: e.map((e) => x("settings:repairCenter.startManyItem", {
			title: e.title,
			amount: e.files === void 0 ? z(e) : M(e)
		})),
		confirmLabel: x("settings:shared.start"),
		danger: e.some((e) => e.files !== void 0),
		holdToConfirm: e.some((e) => e.files !== void 0),
		onConfirm: async () => {
			for (let t of e) h(await v(t));
		}
	}), P = (e) => e.backups.length ? e.backups.some((e) => e.exists) ? /* @__PURE__ */ (0, E.jsx)(t, {
		href: "/settings/maintenance#ledgerBackups",
		size: "small",
		trailingIcon: m,
		children: x("settings:repairCenter.preRepairBackup")
	}) : /* @__PURE__ */ (0, E.jsx)("span", {
		className: "text-body-2-regular text-text-tertiary",
		children: x("settings:repairCenter.backupCleaned")
	}) : null, I = p.error || (r.error ? r.error.message : ""), L = o ? A(o.items) : [], R = new Set(L.map((e) => e.group)).size;
	return /* @__PURE__ */ (0, E.jsxs)(T, { children: [
		I ? /* @__PURE__ */ (0, E.jsx)(n, {
			tone: "error",
			children: I
		}) : null,
		o && R > 1 ? /* @__PURE__ */ (0, E.jsx)(n, {
			tone: "info",
			action: /* @__PURE__ */ (0, E.jsx)(e, {
				size: "small",
				disabled: !o.available || !!p.busy,
				onClick: () => N(L, x("settings:repairCenter.startAllTitle")),
				children: x("settings:repairCenter.startAll")
			}),
			children: x("settings:repairCenter.waitingCount", { count: L.length })
		}) : null,
		o?.items.length ? k(o.items).map(([t, n]) => /* @__PURE__ */ (0, E.jsxs)("section", {
			"aria-labelledby": `repair-group-${t}`,
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, E.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, E.jsx)(s, {
					id: `repair-group-${t}`,
					children: O[t] || t
				}), A(n).length > 1 ? /* @__PURE__ */ (0, E.jsx)(e, {
					size: "small",
					disabled: !o.available || !!p.busy,
					onClick: () => N(A(n), x("settings:repairCenter.startGroupTitle", { group: O[t] || t })),
					children: x("settings:repairCenter.startGroup")
				}) : null]
			}), /* @__PURE__ */ (0, E.jsx)("div", {
				className: a,
				children: n.map((t) => {
					let [n, r] = D[t.state] || D.none, i = z(t);
					return /* @__PURE__ */ (0, E.jsxs)(B, {
						id: `repair-item-${t.id}`,
						title: t.title,
						description: t.summary,
						options: t.automatic === void 0 ? null : /* @__PURE__ */ (0, E.jsxs)("div", {
							className: "flex flex-col gap-1 pt-2",
							children: [/* @__PURE__ */ (0, E.jsx)(l, {
								isSelected: t.automatic,
								isDisabled: !o.available || !!p.busy,
								onChange: b,
								"aria-describedby": "cover-automatic-help",
								children: x("settings:repairCenter.coverAutomatic")
							}), /* @__PURE__ */ (0, E.jsx)("span", {
								id: "cover-automatic-help",
								className: "text-body-2-regular text-text-secondary",
								children: x("settings:repairCenter.coverAutomaticHelp")
							})]
						}),
						progress: H(t),
						children: [i ? /* @__PURE__ */ (0, E.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: i
						}) : null, t.mode === "confirm" && t.state === "waiting" ? /* @__PURE__ */ (0, E.jsx)(e, {
							size: "small",
							disabled: !o.available || !!p.busy || t.estimating,
							onClick: () => w(t),
							children: x("settings:shared.start")
						}) : /* @__PURE__ */ (0, E.jsx)(c, {
							tone: r,
							children: n
						})]
					}, t.id);
				})
			})]
		}, t)) : /* @__PURE__ */ (0, E.jsxs)("section", {
			"aria-labelledby": "repair-items",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, E.jsx)(s, {
				id: "repair-items",
				children: x("settings:repairCenter.itemsHeading")
			}), o ? /* @__PURE__ */ (0, E.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: x("settings:repairCenter.empty")
			}) : /* @__PURE__ */ (0, E.jsx)("div", {
				className: "contents",
				"data-skeleton": "",
				"aria-busy": "true",
				"aria-label": x("settings:repairCenter.loadingItems"),
				dangerouslySetInnerHTML: { __html: y() }
			})]
		}),
		o?.history.length ? /* @__PURE__ */ (0, E.jsxs)("section", {
			"aria-labelledby": "repair-history",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, E.jsx)(s, {
				id: "repair-history",
				children: x("settings:repairCenter.history")
			}), /* @__PURE__ */ (0, E.jsx)("div", {
				className: a,
				children: o.history.map((e) => /* @__PURE__ */ (0, E.jsx)(B, {
					title: e.title,
					description: `${j(e.at)} · ${e.changed ? x("settings:repairCenter.changedCount", { count: e.changed }) : x("settings:repairCenter.noChanges")}`,
					children: P(e)
				}, e.id))
			})]
		}) : null
	] });
}
export { U as RepairCenterPage, F as repairsInterval };

//# debugId=f9ea3f2f-df90-419d-ab5a-e61b83f1d616