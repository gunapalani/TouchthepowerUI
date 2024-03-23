/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead } from '../astro_BXCfs4pI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const parts = pathname.slice(1).split("/");
  const currentPath = parts[0];
  return renderTemplate`${maybeRenderHead()}<header class="header bg-[#ffffff] px-12 sticky top-0 flex items-center font-smooch z-20 pl-[3em]" data-astro-cid-hpnw4vwy> <img src="/assets/home/logo.png" class="-ml-8 h-16" data-astro-cid-hpnw4vwy> <ul class="lg:flex flex-wrap ml-auto gap-7 items-center pl-[2em] hidden font-hind_siliguri" data-astro-cid-hpnw4vwy> <li${addAttribute(`nav-item home-nav `, "class")} id="home-nav" data-astro-cid-hpnw4vwy> <a href="/#homeBanner" data-astro-cid-hpnw4vwy>Home</a> </li> <li${addAttribute(`nav-item problems-nav`, "class")}${addAttribute(currentPath === "problems" ? "li-active" : "", "class")} id="problems-nav" data-astro-cid-hpnw4vwy> <a href="/#problems" data-astro-cid-hpnw4vwy>Why Problems</a> </li> <li${addAttribute(`nav-item solutions-nav `, "class")} id="solutions-nav" data-astro-cid-hpnw4vwy> <a href="/#solutions" data-astro-cid-hpnw4vwy>Solutions</a> </li> <li${addAttribute(`nav-item destination-nav `, "class")} id="destination-nav" data-astro-cid-hpnw4vwy> <a href="/#destination" data-astro-cid-hpnw4vwy>Destination of Human</a> </li> <li${addAttribute(`nav-item god-nav`, "class")} id="god-nav" data-astro-cid-hpnw4vwy> <a href="#god" data-astro-cid-hpnw4vwy>Who is God</a> </li> <li${addAttribute(`nav-item prayer-nav `, "class")} id="prayer-nav" data-astro-cid-hpnw4vwy> <a href="/#prayer" data-astro-cid-hpnw4vwy>Prayer Request</a> </li> </ul> <div class="mobileMenu text-black ml-auto xl:hidden ml:hidden" data-astro-cid-hpnw4vwy> <button onclick="toggleMobileMenu()" data-astro-cid-hpnw4vwy> <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" fill="currentColor" data-astro-cid-hpnw4vwy><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" data-astro-cid-hpnw4vwy></path></svg> </button> </div> </header> <div class="z-30 w-[16em] p-5 text-white bg-[#292929] fixed right-0 text-left rounded-lg hidden" id="hamburger" data-astro-cid-hpnw4vwy> <div class="w-full text-center" data-astro-cid-hpnw4vwy> <ul class="flex flex-col gap-y-5" data-astro-cid-hpnw4vwy> <li class="nav-item home-nav" id="home-nav" data-astro-cid-hpnw4vwy> <a href="/#homeBanner" onclick="toggleMobileMenu()" data-astro-cid-hpnw4vwy>Home</a> </li> <li class="nav-item problems-nav" id="problems-nav" data-astro-cid-hpnw4vwy> <a href="/#problems" onclick="toggleMobileMenu()" data-astro-cid-hpnw4vwy>Why Problems</a> </li> <li class="nav-item solutions-nav" id="solutions-nav" data-astro-cid-hpnw4vwy> <a href="/#solutions" onclick="toggleMobileMenu()" data-astro-cid-hpnw4vwy>Solutions</a> </li> <li class="nav-item destination-nav" id="destination-nav" data-astro-cid-hpnw4vwy> <a href="/#destination" onclick="toggleMobileMenu()" data-astro-cid-hpnw4vwy>Destination of Human</a> </li> <li class="nav-item god-nav" id="god-nav" data-astro-cid-hpnw4vwy> <a href="/#god" onclick="toggleMobileMenu()" data-astro-cid-hpnw4vwy>Who is God</a> </li> <li class="nav-item prayer-nav" id="prayer-nav" data-astro-cid-hpnw4vwy> <a href="/#prayer" onclick="toggleMobileMenu()" data-astro-cid-hpnw4vwy>Prayer Request</a> </li> </ul> </div> </div> `;
}, "E:/Freelance/TouchthepowerUI/src/components/header.astro", void 0);

const problems = [
  {
    title: "Fallen World",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
    imgUrl: "/assets/problems/fallen-world.png"
  },
  {
    title: "Wrong Decisions",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
    imgUrl: "/assets/problems/wrong-dec.png"
  },
  {
    title: "Wrong Priorities",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
    imgUrl: "/assets/problems/wrong-prior.png"
  },
  {
    title: "Wrong Choice",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
    imgUrl: "/assets/problems/wrong-choice.png"
  },
  {
    title: "Natural Causes",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
    imgUrl: "/assets/problems/natural-cause.png"
  },
  {
    title: "Choosing the Master",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
    imgUrl: "/assets/problems/choosing-mast.png"
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const pathname = new URL(Astro2.request.url).pathname;
  const parts = pathname.slice(1).split("/");
  const currentIndex = parts[1];
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-x4jas4qj> <head><title>Touch the Power</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">', '</head> <body class="" data-astro-cid-x4jas4qj> <div data-astro-cid-x4jas4qj> <div class="border-b-2 border-[#045a94]" data-astro-cid-x4jas4qj> ', ' </div> <div class="mx-40 p-10" data-astro-cid-x4jas4qj> <div class="flex" data-astro-cid-x4jas4qj> <div class="flex flex-col gap-5 text-[1.1rem] text-[#108bf7] font-semibold border-r-2 w-1/6" data-astro-cid-x4jas4qj> ', ' </div> <div class="px-7 w-5/6" data-astro-cid-x4jas4qj> <div class="text-left text-[#a9a9a9]" data-astro-cid-x4jas4qj>\nWhy Problem / ', ' </div> <div class="text-[#108bf7] text-[1.8rem] font-semibold" data-astro-cid-x4jas4qj> ', ' </div> <img class="w-full rounded-md h-44 object-fill my-5"', ' alt="problems-img" data-astro-cid-x4jas4qj> <div class="text-[#838383]" data-astro-cid-x4jas4qj> <div class="my-5" data-astro-cid-x4jas4qj>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\n                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing\n                nec, ultricies sed, dolor. Cras elementum ultrices diam.\n                Maecenas ligula massa, varius a, semper congue, euismod non, mi.\n                Proin porttitor, orci nec nonummy molestie, enim est eleifend\n                mi, non fermentum diam nisl sit amet erat. Duis semper. Duis\n                arcu massa, scelerisque vitae, consequat in, pretium a, enim.\n                Pellentesque congue. Ut in risus volutpat libero pharetra\n                tempor. Cras vestibulum bibendum augue. Praesent egestas leo in\n                pede. Praesent blandit odio eu enim. Pellentesque sed dui ut\n                augue blandit sodales. Vestibulum ante ipsum primis in faucibus\n                orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.\n                Mauris ac mauris sed pede pellentesque fermentum. Maecenas\n                adipiscing ante non diam sodales hendrerit.\n</div> <div class="my-4" data-astro-cid-x4jas4qj>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\n                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing\n                nec, ultricies sed, dolor. Cras elementum ultrices diam.\n                Maecenas ligula massa, varius a, semper congue, euismod non, mi.\n                Proin porttitor, orci nec nonummy molestie, enim est eleifend\n                mi, non fermentum diam nisl sit amet erat. Duis semper. Duis\n                arcu massa, scelerisque vitae, consequat in, pretium a, enim.\n                Pellentesque congue. Ut in risus volutpat libero pharetra\n                tempor. Cras vestibulum bibendum augue. Praesent egestas leo in\n                pede. Praesent blandit odio eu enim. Pellentesque sed dui ut\n                augue blandit sodales.\n</div> <div class="flex gap-8 justify-center items-center" data-astro-cid-x4jas4qj> <div class="w-1/2" data-astro-cid-x4jas4qj>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                  non risus. Suspendisse lectus tortor, dignissim sit amet,\n                  adipiscing nec, ultricies sed, dolor. Cras elementum ultrices\n                  diam. Maecenas ligula massa, varius a, semper congue, euismod\n                  non, mi. Proin porttitor, orci nec nonummy molestie, enim est\n                  eleifend mi, non fermentum diam nisl sit amet erat. Duis\n                  semper.\n</div><div class="w-1/2" data-astro-cid-x4jas4qj> <img class="w-full h-40 rounded-md object-fill"', ' alt="problems-img" data-astro-cid-x4jas4qj> </div> </div> <div class="my-5" data-astro-cid-x4jas4qj>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\n                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing\n                nec, ultricies sed, dolor. Cras elementum ultrices diam.\n                Maecenas ligula massa, varius a, semper congue, euismod non, mi.\n                Proin porttitor, orci nec nonummy molestie, enim est eleifend\n                mi, non fermentum diam nisl sit amet erat. Duis semper. Duis\n                arcu massa, scelerisque vitae, consequat in, pretium a, enim.\n                Pellentesque congue. Ut in risus volutpat libero pharetra\n                tempor. Cras vestibulum bibendum augue. Praesent egestas leo in\n                pede. Praesent blandit odio eu enim. Pellentesque sed dui ut\n                augue blandit sodales. Vestibulum ante ipsum primis in faucibus\n                orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.\n                Mauris ac mauris sed pede pellentesque fermentum. Maecenas\n                adipiscing ante non diam sodales hendrerit.\n</div> <div class="my-5" data-astro-cid-x4jas4qj>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\n                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing\n                nec, ultricies sed, dolor. Cras elementum ultrices diam.\n                Maecenas ligula massa, varius a, semper congue, euismod non, mi.\n                Proin porttitor, orci nec nonummy molestie, enim est eleifend\n                mi, non fermentum diam nisl sit amet erat. Duis semper.\n</div> </div> </div> </div> </div> </div> <script src="/js/navbar.js" defer><\/script> </body></html>'])), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-x4jas4qj": true }), problems.map((problem, index) => renderTemplate`<a${addAttribute(`/problems/${index}`, "href")} data-astro-cid-x4jas4qj> <div data-astro-cid-x4jas4qj>${problem.title}</div> </a>`), problems[currentIndex].title, problems[currentIndex].title, addAttribute(problems[currentIndex].imgUrl, "src"), addAttribute(problems[currentIndex].imgUrl, "src"));
}, "E:/Freelance/TouchthepowerUI/src/pages/problems/[slug].astro", void 0);

const $$file = "E:/Freelance/TouchthepowerUI/src/pages/problems/[slug].astro";
const $$url = "/problems/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _slug_ as _, problems as p };
