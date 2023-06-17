/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, _ as __astro_tag_component__, e as renderComponent, f as renderHead } from '../astro.2dbd2a51.mjs';
import 'html-escaper';
import { useState, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$5 = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>
	
<!-- RSS Feed Discovery -->
<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml">

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/jacobvanschenck/dev/p/portfolio/src/components/BaseHead.astro");

const $$Astro$4 = createAstro("https://example.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)}>
	${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/Users/jacobvanschenck/dev/p/portfolio/src/components/HeaderLink.astro");

function DarkLightToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleClick = () => {
    setIsDarkMode((mode) => !mode);
  };
  useEffect(() => {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }, [isDarkMode]);
  return /* @__PURE__ */ jsxs("button", {
    onClick: handleClick,
    className: "flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 dark:bg-gray-700",
    children: [/* @__PURE__ */ jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className: `h-5 w-5 ${isDarkMode ? "fill-orange-500 stroke-orange-500" : "stroke-gray-800"}`,
      children: /* @__PURE__ */ jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      })
    }), /* @__PURE__ */ jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      className: `h-6 w-6 ${isDarkMode ? "stroke-gray-800" : "fill-orange-500 stroke-orange-500"}`,
      children: /* @__PURE__ */ jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      })
    })]
  });
}
__astro_tag_component__(DarkLightToggle, "@astrojs/react");

const SITE_TITLE = "jacobvs.xyz";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$3 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="absolute flex w-full justify-between p-6">
  <div class="flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
    </svg>
    <h2>
      ${SITE_TITLE}
    </h2>
  </div>
  <nav class="flex items-center gap-6">
    ${renderComponent($$result, "DarkLightToggle", DarkLightToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jacobvanschenck/dev/p/portfolio/src/components/DarkLightToggle", "client:component-export": "default" })}
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://twitter.com/jacobvs_eth", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
      Twitter
    ` })}
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://github.com/jacobvanschenck", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
      GitHub
    ` })}
  </nav>
</header>`;
}, "/Users/jacobvanschenck/dev/p/portfolio/src/components/Header.astro");

const $$Astro$2 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="p-4 text-center">
	&copy; ${today.getFullYear()} Jacob Van Schenck. All rights reserved.
</footer>`;
}, "/Users/jacobvanschenck/dev/p/portfolio/src/components/Footer.astro");

const $$Astro$1 = createAstro("https://example.com");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    imgSrc,
    techList,
    projectTitle,
    siteLink,
    githubLink,
    flipped = false,
    description,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="group relative flex items-center aspect-square sm:aspect-auto"${spreadAttributes(props)}>
  <a${addAttribute(siteLink, "href")} target="_blank"${addAttribute(`rounded-sm overflow-hidden flex h-full sm:h-auto cursor-pointer sm:blur-sm grayscale transition-all duration-200 ease-in-out group-hover:filter-none ${flipped ? "justify-end" : "justify-start"}`, "class")}>
    <img${addAttribute(imgSrc, "src")} class="sm:w-3/5 object-cover">
  </a>
  <div${addAttribute(`absolute p-4 sm:p-0 h-full sm:h-auto flex sm:w-7/12 flex-col gap-4 z-10 dark:bg-slate-800/90 sm:dark:bg-transparent dark:border-none ${flipped ? "text-left left-0 items-start" : "text-right right-0 items-end"}`, "class")}>
    <h3 class="text-2xl">${projectTitle}</h3>
    <div class="z-20 rounded-sm sm:py-4 sm:px-6 sm:dark:bg-gray-700">
      <p>${description}</p>
    </div>
    <ul class="flex gap-4">
      ${techList.map((tech) => {
    return renderTemplate`<li class="dark:text-blue-300">${tech}</li>`;
  })}
    </ul>
    <div class="flex">
      <a${addAttribute(siteLink, "href")} target="_blank" class="z-20 rounded-lg border-2 border-black p-1 dark:border-none dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
        </svg>
      </a>
      <a${addAttribute(githubLink, "href")} target="_blank" class="z-20 rounded-lg border-2 border-black p-1 dark:border-none dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
          </path>
        </svg>
      </a>
    </div>
  </div>
</div>`;
}, "/Users/jacobvanschenck/dev/p/portfolio/src/components/ProjectCard.astro");

function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("/api/send", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
  return /* @__PURE__ */ jsxs("form", {
    className: "flex w-96 flex-col items-center gap-10 rounded-md p-5 shadow-2xl dark:bg-gray-900",
    onSubmit: submit,
    children: [/* @__PURE__ */ jsx("h3", {
      className: "w-full text-center text-xl",
      children: "Message Me"
    }), /* @__PURE__ */ jsxs("label", {
      className: "flex w-full flex-col",
      children: ["email", /* @__PURE__ */ jsx("input", {
        className: "border-2 border-x-blue-50 border-b-black border-t-blue-50 bg-transparent dark:border-x-gray-900 dark:border-t-gray-900 dark:border-b-white",
        type: "email",
        name: "email",
        required: true
      })]
    }), /* @__PURE__ */ jsxs("label", {
      className: "flex w-full flex-col",
      children: ["message", /* @__PURE__ */ jsx("input", {
        className: "border-2 border-x-blue-50 border-b-black border-t-blue-50 bg-transparent dark:border-x-gray-900 dark:border-t-gray-900 dark:border-b-white",
        id: "message-field",
        type: "text",
        name: "message",
        required: true
      })]
    }), /* @__PURE__ */ jsx("button", {
      className: "w-fit rounded-lg border-2 border-black px-3 py-1 text-center dark:border-none dark:bg-gray-800",
      children: "Send"
    }), responseMessage]
  });
}
__astro_tag_component__(ContactForm, "@astrojs/react");

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" class="scroll-smooth ">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
  ${renderHead($$result)}</head>
  <body class="dark">
    <div class="w-full bg-blue-50 text-neutral-900 dark:bg-gray-900 dark:text-blue-100">
      ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}
      <main class="flex w-full flex-col items-center">
        <section id="hero" class="flex h-screen w-full flex-col items-center justify-center pt-10">
          <h1>
            Hi my name is <span class="text-red-500">Jacob</span>, and I like to
            build stuff
          </h1>
          <a href="#connect">Let&apos;s Connect</a>
          <a href="#projects" class="m-10 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="h-10 w-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </a>
        </section>
        <section id="projects" class="flex min-h-screen max-w-[1300px] flex-col items-center justify-center gap-10 px-8 sm:px-40">
          <h2 class="text-3xl">My Projects</h2>
          <div class="flex flex-col gap-20">
            ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "imgSrc": "/turbo-runners.png", "techList": ["Next.js", "TailwindCSS", "Solidity", "HardHat"], "projectTitle": "Turbo Runners", "siteLink": "https://turbo-runners.vercel.app/", "githubLink": "https://github.com/jacobvanschenck/nft-project-nextjs", "description": "An NFT Minting site for an ERC-721a token. This NFT includes Whitelisting address for early minting, Royalties on mint and transfer, and delayed art reveal dates." })}
            ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "imgSrc": "/my-dex.png", "techList": ["React", "Bootstrap", "Solidity", "Truffle"], "projectTitle": "MyDex", "flipped": true, "siteLink": "https://dex-vs.netlify.app/", "githubLink": "https://github.com/jacobvanschenck/My-Dex", "description": "A web3 trading platform to create Market Orders and Limit Orders for ERC-20 coins." })}
            ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "imgSrc": "/multi-sig.png", "techList": ["React", "Bootstrap", "Solidity", "Truffle"], "projectTitle": "MultiSig Wallet", "siteLink": "https://multi-sig-wallet-vs.netlify.app/", "githubLink": "https://github.com/jacobvanschenck/Multisig-Wallet", "description": "A smart contract wallet that requires approval from 2 designated addresses to complete transactions" })}
          </div>
        </section>
        <section id="connect" class="flex h-screen flex-col items-center justify-center gap-10">
          <h2 class="text-3xl">Let's Connect</h2>
          ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/jacobvanschenck/dev/p/portfolio/src/components/ContactForm.tsx", "client:component-export": "default" })}
        </section>
      </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
    </div>
  </body></html>`;
}, "/Users/jacobvanschenck/dev/p/portfolio/src/pages/index.astro");

const $$file = "/Users/jacobvanschenck/dev/p/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
