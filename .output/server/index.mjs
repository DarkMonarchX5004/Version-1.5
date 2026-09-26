globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/account-j-92ux8L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d27-3mEerJLiz4RgIiv1+gXrLo2Jwww\"",
		"mtime": "2026-09-26T10:23:09.923Z",
		"size": 7463,
		"path": "../public/assets/account-j-92ux8L.js"
	},
	"/assets/arrow-left-Bu-YwW0E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-E4ef6fF+A4p34o8McEvVKDi5IGM\"",
		"mtime": "2026-09-26T10:23:09.923Z",
		"size": 154,
		"path": "../public/assets/arrow-left-Bu-YwW0E.js"
	},
	"/assets/canevia-mark-Ingk8v6m.webp": {
		"type": "image/webp",
		"etag": "\"179de-27EYDNbMDmaXTYFu0b83gXXLsrQ\"",
		"mtime": "2026-09-26T10:23:09.926Z",
		"size": 96734,
		"path": "../public/assets/canevia-mark-Ingk8v6m.webp"
	},
	"/assets/cart-CvKOMydi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c04-TOJBQo0V4vepzCOds93nNnuIY04\"",
		"mtime": "2026-09-26T10:23:09.924Z",
		"size": 7172,
		"path": "../public/assets/cart-CvKOMydi.js"
	},
	"/assets/canevia-pouch-front-DBACYxgp.webp": {
		"type": "image/webp",
		"etag": "\"1bbca-9bmOa/kpXliu2sUtUjBdyAKgK9s\"",
		"mtime": "2026-09-26T10:23:09.926Z",
		"size": 113610,
		"path": "../public/assets/canevia-pouch-front-DBACYxgp.webp"
	},
	"/assets/checkout-Cx8vK4mn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20e8-ldUxDnpL13NNBrHUyl+vBgrVzJE\"",
		"mtime": "2026-09-26T10:23:09.924Z",
		"size": 8424,
		"path": "../public/assets/checkout-Cx8vK4mn.js"
	},
	"/assets/chevron-right-CzWTnQNJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-LC8hhepOfTTRM7trY5OVwZMtuYM\"",
		"mtime": "2026-09-26T10:23:09.924Z",
		"size": 119,
		"path": "../public/assets/chevron-right-CzWTnQNJ.js"
	},
	"/assets/collection-COswWCMg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a4-mL1+7SG8g1JL8ySAJ+WLdRKESWA\"",
		"mtime": "2026-09-26T10:23:09.925Z",
		"size": 2468,
		"path": "../public/assets/collection-COswWCMg.js"
	},
	"/assets/Footer-D6sN7nau.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32cf-EhbnWFPaPsK9d1fA0Id3ScWRSE8\"",
		"mtime": "2026-09-26T10:23:09.919Z",
		"size": 13007,
		"path": "../public/assets/Footer-D6sN7nau.js"
	},
	"/assets/canevia-pouch-back-D6txKjxR.webp": {
		"type": "image/webp",
		"etag": "\"221ce-fLf4DMW+ShHU5wDLqn3+Gw7N/GA\"",
		"mtime": "2026-09-26T10:23:09.926Z",
		"size": 139726,
		"path": "../public/assets/canevia-pouch-back-D6txKjxR.webp"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-15T05:45:43.827Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"68a-w6rUm6D0T8gpxONWtkCwmMGh98w\"",
		"mtime": "2026-09-23T10:40:17.080Z",
		"size": 1674,
		"path": "../public/favicon.png"
	},
	"/assets/heirloom-mark-Cf1JuzSO.webp": {
		"type": "image/webp",
		"etag": "\"2b480-Za0MxhCgP1g7AkVAT66NGBuAFqE\"",
		"mtime": "2026-09-26T10:23:09.928Z",
		"size": 177280,
		"path": "../public/assets/heirloom-mark-Cf1JuzSO.webp"
	},
	"/assets/cleaned-with-okra-juice-mark-BkyRyUGy.webp": {
		"type": "image/webp",
		"etag": "\"25a74-Vooa6XP4KwTj3q5OO58UQUdHDII\"",
		"mtime": "2026-09-26T10:23:09.927Z",
		"size": 154228,
		"path": "../public/assets/cleaned-with-okra-juice-mark-BkyRyUGy.webp"
	},
	"/assets/jaggery-cubes-DaB3mShK.webp": {
		"type": "image/webp",
		"etag": "\"1a38c-IjHMuCkwoXIavfFllYg8AUM8EZI\"",
		"mtime": "2026-09-26T10:23:09.928Z",
		"size": 107404,
		"path": "../public/assets/jaggery-cubes-DaB3mShK.webp"
	},
	"/assets/jaggery-syrup-DD1oeT3A.webp": {
		"type": "image/webp",
		"etag": "\"c2f8-ODpdgabDmNgtj7aDWmfMQZF7BNI\"",
		"mtime": "2026-09-26T10:23:09.929Z",
		"size": 49912,
		"path": "../public/assets/jaggery-syrup-DD1oeT3A.webp"
	},
	"/assets/kothule-industries-mark-BKtOaO78.svg": {
		"type": "image/svg+xml",
		"etag": "\"10e5-KL9zCJZQ1tioNKfifouuhDU2EBs\"",
		"mtime": "2026-09-26T10:23:09.929Z",
		"size": 4325,
		"path": "../public/assets/kothule-industries-mark-BKtOaO78.svg"
	},
	"/assets/product._id-DOGmkiMR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4746-jYsYOKkcon0Fgl02sfE7VD3EY7M\"",
		"mtime": "2026-09-26T10:23:09.925Z",
		"size": 18246,
		"path": "../public/assets/product._id-DOGmkiMR.js"
	},
	"/assets/jaggery-powder-BN5PmNOd.webp": {
		"type": "image/webp",
		"etag": "\"289f0-w9gKoRYxNva78ycW9Ggge3P4p1g\"",
		"mtime": "2026-09-26T10:23:09.928Z",
		"size": 166384,
		"path": "../public/assets/jaggery-powder-BN5PmNOd.webp"
	},
	"/assets/ProductCard-BEMHHSYZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f06-PRYTXcbq/TOh9eZnNPb4vtijVrs\"",
		"mtime": "2026-09-26T10:23:09.920Z",
		"size": 3846,
		"path": "../public/assets/ProductCard-BEMHHSYZ.js"
	},
	"/assets/search-DFIycxR8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d89-KJRZo1vXgsz4c5Oxdc9PhfJHu7o\"",
		"mtime": "2026-09-26T10:23:09.925Z",
		"size": 3465,
		"path": "../public/assets/search-DFIycxR8.js"
	},
	"/assets/routes-C0z5DzRG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a2a-GHamUv6WG4jmoJ3jqLGHRPqvA14\"",
		"mtime": "2026-09-26T10:23:09.925Z",
		"size": 39466,
		"path": "../public/assets/routes-C0z5DzRG.js"
	},
	"/assets/no-chemical-mark-4aKWnpkZ.webp": {
		"type": "image/webp",
		"etag": "\"2402a-VISnh7wrO/4oLANPxyvgt7dRd/U\"",
		"mtime": "2026-09-26T10:23:09.929Z",
		"size": 147498,
		"path": "../public/assets/no-chemical-mark-4aKWnpkZ.webp"
	},
	"/assets/styles-BfvUvUXT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19fb2-DhONUBGF0XNnJDpnoj9xlb4GOZo\"",
		"mtime": "2026-09-26T10:23:09.930Z",
		"size": 106418,
		"path": "../public/assets/styles-BfvUvUXT.css"
	},
	"/assets/WholesaleBand-3uq2Etts.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ba-MZWOBGqzlwcYDp9C+lhJRtneGxI\"",
		"mtime": "2026-09-26T10:23:09.922Z",
		"size": 2234,
		"path": "../public/assets/WholesaleBand-3uq2Etts.js"
	},
	"/assets/traditional-woodfired-process-mark-DQxsV1bR.webp": {
		"type": "image/webp",
		"etag": "\"2ae94-OXRaB7paQo7w+0APGyjIiG+gmIs\"",
		"mtime": "2026-09-26T10:23:09.930Z",
		"size": 175764,
		"path": "../public/assets/traditional-woodfired-process-mark-DQxsV1bR.webp"
	},
	"/assets/index-BbtnOhhj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"83c64-axve2kuyuSMSb+B6LY/NxtF7amY\"",
		"mtime": "2026-09-26T10:23:09.919Z",
		"size": 539748,
		"path": "../public/assets/index-BbtnOhhj.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IHjnmx = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IHjnmx
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
