import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BXCfs4pI.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.OC3IS4qj.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@100..900&display=swap\";\n"}],"routeData":{"route":"/problems/[slug]","isIndex":false,"type":"page","pattern":"^\\/problems\\/([^/]+?)\\/?$","segments":[[{"content":"problems","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/problems/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.OC3IS4qj.css"},{"type":"inline","content":":root{--font-size-base: clamp(1rem, .34vw + .91rem, 1.19rem);--font-size-lg: clamp(1.2rem, .7vw + 1.2rem, 1.5rem);--font-size-xl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);--color-text: hsl(12, 5%, 4%);--color-bg: hsl(240, 20%, 95%);--color-border: hsl(17, 24%, 90%)}html{font-family:Cairo,sans-serif;font-size:var(--font-size-base);color:var(--color-text);background-color:var(--color-bg)}body{margin:0}::-webkit-scrollbar [data-astro-cid-is5k6txh]{width:3px;height:3px}::-webkit-scrollbar-thumb [data-astro-cid-is5k6txh]{background-color:#1c3957;border-radius:5px}[data-astro-cid-is5k6txh]{scrollbar-width:thin;scrollbar-color:#1c3957 #f0f0f0}\n"}],"routeData":{"route":"/problems","isIndex":true,"type":"page","pattern":"^\\/problems\\/?$","segments":[[{"content":"problems","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/problems/index.astro","pathname":"/problems","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.OC3IS4qj.css"},{"type":"external","src":"/_astro/index.BpzXmJSY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Freelance/TouchthepowerUI/src/pages/problems/[slug].astro",{"propagation":"none","containsHead":true}],["E:/Freelance/TouchthepowerUI/src/pages/problems/index.astro",{"propagation":"none","containsHead":true}],["E:/Freelance/TouchthepowerUI/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_D5LmCQ6V.mjs","\u0000@astrojs-manifest":"manifest_b8HFFW2c.mjs","E:/Freelance/TouchthepowerUI/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DVH-IP1d.mjs","\u0000@astro-page:src/pages/problems/[slug]@_@astro":"chunks/_slug__BYKuBiTW.mjs","\u0000@astro-page:src/pages/problems/index@_@astro":"chunks/index_CKKJhP1H.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BSXHoR3x.mjs","E:/Freelance/TouchthepowerUI/src/components/prayer-request/prayer-request.tsx":"_astro/prayer-request.By6R2GFa.js","@astrojs/react/client.js":"_astro/client.DURhWcR2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.OC3IS4qj.css","/_astro/index.BpzXmJSY.css","/assets/favicon.svg","/assets/success-icon.svg","/assets/touchthepower.png","/js/contact.js","/js/navbar.js","/_astro/client.DURhWcR2.js","/_astro/index.Bmr93h5h.css","/_astro/index.CSLRt44l.js","/_astro/prayer-request.By6R2GFa.js","/assets/destination/dest-human.png","/assets/destination/place.png","/assets/destination/plan.png","/assets/destination/purpose.png","/assets/home/bg-image.jpg","/assets/home/logo.png","/assets/home/title.png","/assets/home/video-banner.jpeg","/assets/home/video.mp4","/assets/problems/choosing-mast.png","/assets/problems/fallen-world.png","/assets/problems/natural-cause.png","/assets/problems/wrong-choice.png","/assets/problems/wrong-dec.png","/assets/problems/wrong-prior.png","/assets/solutions/prob-finance.png","/assets/solutions/prob-health.png","/assets/solutions/prob-relation.png","/assets/solutions/social-prob.png"],"buildFormat":"directory"});

export { manifest };
