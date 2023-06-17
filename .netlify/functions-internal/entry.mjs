import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.2dbd2a51.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.37587994.mjs');
const _page1  = () => import('./chunks/send@_@ts.3d97bf0b.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/api/send.ts", _page1]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.fcd02271.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send","type":"endpoint","pattern":"^\\/api\\/send$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.ts","pathname":"/api/send","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/jacobvanschenck/dev/p/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/index.astro":"chunks/pages/index.astro.449c14a3.mjs","/src/pages/api/send.ts":"chunks/pages/send.ts.f1295ca3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.37587994.mjs","\u0000@astro-page:src/pages/api/send@_@ts":"chunks/send@_@ts.3d97bf0b.mjs","/Users/jacobvanschenck/dev/p/portfolio/src/components/ContactForm.tsx":"_astro/ContactForm.e82295c6.js","/Users/jacobvanschenck/dev/p/portfolio/src/components/DarkLightToggle":"_astro/DarkLightToggle.0ee94a50.js","@astrojs/react/client.js":"_astro/client.b7f74c51.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.fcd02271.css","/multi-sig.png","/my-dex.png","/turbo-runners.png","/twitter.svg","/_astro/ContactForm.e82295c6.js","/_astro/DarkLightToggle.0ee94a50.js","/_astro/client.b7f74c51.js","/_astro/index.ed373d49.js","/_astro/jsx-runtime.391947bd.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
