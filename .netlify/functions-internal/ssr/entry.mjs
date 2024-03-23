import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b8HFFW2c.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DVH-IP1d.mjs');
const _page1 = () => import('./chunks/_slug__BYKuBiTW.mjs');
const _page2 = () => import('./chunks/index_CKKJhP1H.mjs');
const _page3 = () => import('./chunks/index_BSXHoR3x.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/problems/[slug].astro", _page1],
    ["src/pages/problems/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "3483b9f1-8eec-4b29-a573-e77a7fa4e857"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
