import { d as products } from "./sound-effects-MOtsdcoI.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-C2D920zx.js
var $$splitComponentImporter = () => import("./product._id-BggrylXz.mjs");
var Route = createFileRoute("/product/$id")({
	loader: ({ params }) => {
		const product = products[params.id];
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.product;
		return { meta: [{ title: `${p?.name || "Product"} | CANEVIA Pure Jaggery` }, {
			name: "description",
			content: `${p?.tagline} Pure single-origin sugarcane jaggery by Kothule Industries in Maharashtra.`
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
