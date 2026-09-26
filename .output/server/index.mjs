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
	"/assets/account-CIiQfa6C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d68-0htuIo+fmvBO65bKIvahDacdwfA\"",
		"mtime": "2026-09-23T11:45:29.575Z",
		"size": 7528,
		"path": "../public/assets/account-CIiQfa6C.js"
	},
	"/assets/arrow-left-B2Fl-Lj9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-FMs6YAKYWOj2tTNAVdmULfkfSZw\"",
		"mtime": "2026-09-23T11:45:29.577Z",
		"size": 154,
		"path": "../public/assets/arrow-left-B2Fl-Lj9.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"68a-w6rUm6D0T8gpxONWtkCwmMGh98w\"",
		"mtime": "2026-09-23T10:40:17.080Z",
		"size": 1674,
		"path": "../public/favicon.png"
	},
	"/assets/cart-C5Z5g6dY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c22-xsoJaiquYv4Ee3HPHeKt/20ukxw\"",
		"mtime": "2026-09-23T11:45:29.577Z",
		"size": 7202,
		"path": "../public/assets/cart-C5Z5g6dY.js"
	},
	"/assets/checkout-Lx0yLYlR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2117-TofH/qsq6T6/iBccwqzJsUysrHk\"",
		"mtime": "2026-09-23T11:45:29.577Z",
		"size": 8471,
		"path": "../public/assets/checkout-Lx0yLYlR.js"
	},
	"/assets/chevron-right-D7PPSwep.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-DAjnx0GZoGO+Nd1pdUya4cZybMo\"",
		"mtime": "2026-09-23T11:45:29.578Z",
		"size": 119,
		"path": "../public/assets/chevron-right-D7PPSwep.js"
	},
	"/assets/canevia-mark-Ingk8v6m.webp": {
		"type": "image/webp",
		"etag": "\"179de-27EYDNbMDmaXTYFu0b83gXXLsrQ\"",
		"mtime": "2026-09-23T11:45:29.579Z",
		"size": 96734,
		"path": "../public/assets/canevia-mark-Ingk8v6m.webp"
	},
	"/assets/collection-D9bPNk14.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"979-QWhfHY2rc2cLpm8udeDhtGrNcqc\"",
		"mtime": "2026-09-23T11:45:29.578Z",
		"size": 2425,
		"path": "../public/assets/collection-D9bPNk14.js"
	},
	"/assets/Footer-CJ02q_fe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a5e-Wcvvf16DEEBPUdFiBUONauNcR9w\"",
		"mtime": "2026-09-23T11:45:29.573Z",
		"size": 14942,
		"path": "../public/assets/Footer-CJ02q_fe.js"
	},
	"/assets/canevia-pouch-back-D6txKjxR.webp": {
		"type": "image/webp",
		"etag": "\"221ce-fLf4DMW+ShHU5wDLqn3+Gw7N/GA\"",
		"mtime": "2026-09-23T11:45:29.579Z",
		"size": 139726,
		"path": "../public/assets/canevia-pouch-back-D6txKjxR.webp"
	},
	"/assets/canevia-pouch-front-DBACYxgp.webp": {
		"type": "image/webp",
		"etag": "\"1bbca-9bmOa/kpXliu2sUtUjBdyAKgK9s\"",
		"mtime": "2026-09-23T11:45:29.580Z",
		"size": 113610,
		"path": "../public/assets/canevia-pouch-front-DBACYxgp.webp"
	},
	"/assets/cleaned-with-okra-juice-mark-BkyRyUGy.webp": {
		"type": "image/webp",
		"etag": "\"25a74-Vooa6XP4KwTj3q5OO58UQUdHDII\"",
		"mtime": "2026-09-23T11:45:29.581Z",
		"size": 154228,
		"path": "../public/assets/cleaned-with-okra-juice-mark-BkyRyUGy.webp"
	},
	"/assets/heirloom-mark-Cf1JuzSO.webp": {
		"type": "image/webp",
		"etag": "\"2b480-Za0MxhCgP1g7AkVAT66NGBuAFqE\"",
		"mtime": "2026-09-23T11:45:29.581Z",
		"size": 177280,
		"path": "../public/assets/heirloom-mark-Cf1JuzSO.webp"
	},
	"/assets/jaggery-powder-BN5PmNOd.webp": {
		"type": "image/webp",
		"etag": "\"289f0-w9gKoRYxNva78ycW9Ggge3P4p1g\"",
		"mtime": "2026-09-23T11:45:29.582Z",
		"size": 166384,
		"path": "../public/assets/jaggery-powder-BN5PmNOd.webp"
	},
	"/assets/jaggery-syrup-DD1oeT3A.webp": {
		"type": "image/webp",
		"etag": "\"c2f8-ODpdgabDmNgtj7aDWmfMQZF7BNI\"",
		"mtime": "2026-09-23T11:45:29.583Z",
		"size": 49912,
		"path": "../public/assets/jaggery-syrup-DD1oeT3A.webp"
	},
	"/assets/kothule-industries-mark-BKtOaO78.svg": {
		"type": "image/svg+xml",
		"etag": "\"10e5-KL9zCJZQ1tioNKfifouuhDU2EBs\"",
		"mtime": "2026-09-23T11:45:29.583Z",
		"size": 4325,
		"path": "../public/assets/kothule-industries-mark-BKtOaO78.svg"
	},
	"/assets/jaggery-cubes-DaB3mShK.webp": {
		"type": "image/webp",
		"etag": "\"1a38c-IjHMuCkwoXIavfFllYg8AUM8EZI\"",
		"mtime": "2026-09-23T11:45:29.582Z",
		"size": 107404,
		"path": "../public/assets/jaggery-cubes-DaB3mShK.webp"
	},
	"/assets/product._id-BLt4jUO3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47a2-CHnm3yBUR3kL7/wxJFRY2ORM6ig\"",
		"mtime": "2026-09-23T11:45:29.578Z",
		"size": 18338,
		"path": "../public/assets/product._id-BLt4jUO3.js"
	},
	"/assets/ProductCard-CWIsKBq3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9e-drdUpP8fUbsvJZTp0kSZJVeR28I\"",
		"mtime": "2026-09-23T11:45:29.573Z",
		"size": 3742,
		"path": "../public/assets/ProductCard-CWIsKBq3.js"
	},
	"/assets/search-Biwh-8_2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9d-eDANX0kZoeVqEK3WwlmkYjYWt3g\"",
		"mtime": "2026-09-23T11:45:29.579Z",
		"size": 3485,
		"path": "../public/assets/search-Biwh-8_2.js"
	},
	"/assets/routes-D76321im.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a36-kyCoW4zMEw3VzOH6B6PhxzFYzZY\"",
		"mtime": "2026-09-23T11:45:29.578Z",
		"size": 39478,
		"path": "../public/assets/routes-D76321im.js"
	},
	"/assets/no-chemical-mark-4aKWnpkZ.webp": {
		"type": "image/webp",
		"etag": "\"2402a-VISnh7wrO/4oLANPxyvgt7dRd/U\"",
		"mtime": "2026-09-23T11:45:29.584Z",
		"size": 147498,
		"path": "../public/assets/no-chemical-mark-4aKWnpkZ.webp"
	},
	"/assets/styles-F3r5fOFe.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19e78-jpTP+ijCrDNy8zP2gsdQGqYCXS0\"",
		"mtime": "2026-09-23T11:45:29.584Z",
		"size": 106104,
		"path": "../public/assets/styles-F3r5fOFe.css"
	},
	"/assets/WholesaleBand-CVfr8VTc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c0-7NhZh40tuVPjFC2n5r3Kyus6cWQ\"",
		"mtime": "2026-09-23T11:45:29.575Z",
		"size": 2240,
		"path": "../public/assets/WholesaleBand-CVfr8VTc.js"
	},
	"/assets/traditional-woodfired-process-mark-DQxsV1bR.webp": {
		"type": "image/webp",
		"etag": "\"2ae94-OXRaB7paQo7w+0APGyjIiG+gmIs\"",
		"mtime": "2026-09-23T11:45:29.584Z",
		"size": 175764,
		"path": "../public/assets/traditional-woodfired-process-mark-DQxsV1bR.webp"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-15T05:45:43.827Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/index-CraBfbtu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84615-Y1jRBHXO10NGb0jFeRK2szfh/sQ\"",
		"mtime": "2026-09-23T11:45:29.571Z",
		"size": 542229,
		"path": "../public/assets/index-CraBfbtu.js"
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
var _lazy_oi6OjE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_oi6OjE
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
