/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, k as renderSlot, f as renderComponent, g as renderHead, m as maybeRenderHead, e as addAttribute, l as Fragment } from '../astro_BXCfs4pI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, p as problems } from './_slug__BKDtzG2u.mjs';
/* empty css                          */
import 'clsx';
/* empty css                          */
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$c = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" data-astro-cid-is5k6txh> <head><title>Touch the Power</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta property="twitter:card" content="summary_large_image"><meta property="robots" content="/robots.txt"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><!-- <link rel="icon" type="image/x-icon" href="/favicon.ico" /> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo&family=Smooch+Sans:wght@300;500&family=Hind+Siliguri:wght@700&family=Hind+Madurai:wght@700&family=Rubik:wght@700&family=Khula:wght@700&display=swap" rel="stylesheet" media="screen"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet">', '</head> <body class="" data-astro-cid-is5k6txh> ', " ", '  <script src="/js/navbar.js" defer><\/script> <script src="https://unpkg.com/aos@next/dist/aos.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"><\/script> <script>\n      AOS.init();\n    <\/script> </body> </html>'])), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-is5k6txh": true }), renderSlot($$result, $$slots["default"]));
}, "E:/Freelance/TouchthepowerUI/src/pages/problems/index.astro", void 0);

const $$file$1 = "E:/Freelance/TouchthepowerUI/src/pages/problems/index.astro";
const $$url$1 = "/problems";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$ProblemsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ProblemsCard;
  return renderTemplate`${maybeRenderHead()}<div class="dropdown-content lg:mx-28"> <div class="flex flex-wrap lg:gap-8 justify-center items-center"> ${problems.map((problem, index) => renderTemplate`<div class="card bg-white rounded-lg shadow-md p-4 m-5 lg:w-[15rem]"> <img${addAttribute(problem.imgUrl, "src")} alt="blog-image" class="h-32 w-full lg:h-auto  rounded-lg"> <div class="mt-2 text-[#108bf7] text-base my-2 font-bold"> ${problem.title} </div> <div class="text-sm font-medium">${problem.content}</div> <div class="flex justify-center items-center"> <a${addAttribute(`/problems/${index}`, "href")} class="text-cyan-600 font-bold pl-[.4em]"> ${" "} <button class="  mt-4  px-4 py-1 bg-[#0b89f7] text-white text-sm rounded-sm">
Read more
</button> </a> </div> </div>`)} </div> </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/problems/problems-card.astro", void 0);

const $$Astro$a = createAstro();
const $$Problems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Problems;
  return renderTemplate`${maybeRenderHead()}<div id="problems" class="bg-[#d8eafe] py-10"> <div class="mt-6 mb-2 text-[#045a94] text-center text-3xl font-medium">
Why Problems come?
</div> <div class="flex justify-center"> <div class="text-center mb-6 border-[3px] rounded-md w-16 border-[#045a94]"></div> </div> ${renderComponent($$result, "Card", $$ProblemsCard, {})} </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/problems/problems.astro", void 0);

const $$Astro$9 = createAstro();
const $$SolutionCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SolutionCard;
  const solutions = [
    {
      title: "Fallen World",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
      imgUrl: "/assets/solutions/prob-relation.png"
    },
    {
      title: "Wrong Decisions",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
      imgUrl: "/assets/solutions/prob-health.png"
    },
    {
      title: "Wrong Priorities",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
      imgUrl: "/assets/solutions/prob-finance.png"
    },
    {
      title: "Wrong Choice",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum, placeat nisi velit repellat natus odio!",
      imgUrl: "/assets/solutions/social-prob.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="xl:mx-[15rem]"> <div class="flex flex-wrap gap-8 justify-center items-center"> ${solutions.map((solution) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="card px-4 w-full md:flex gap-16"> <img${addAttribute(solution.imgUrl, "src")} alt="blog-image" class=" w-full md:w-56 md:h-36 object-fill rounded-lg"> <div> <div class="mt-2 text-[#108bf7] text-base my-2 font-bold"> ${solution.title} </div> <div class="text-sm font-medium">${solution.content}</div> <button class="  mt-4  px-4 py-1 border border-[#108bf7] text-[#108bf7] text-sm rounded-sm">
Read more
</button> </div> </div> <div class="border mx-7  w-full border-gray-300"></div> ` })}`)} </div> </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/solutions/solution-card.astro", void 0);

const $$Astro$8 = createAstro();
const $$Solutions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Solutions;
  return renderTemplate`${maybeRenderHead()}<div id="solutions" class="bg-white py-10"> <div class="mt-6 mb-2 text-[#045a94] text-center text-3xl font-medium">
How and where to get solutions?
</div> <div class="mt-3 mb-2 text-[#045a94] text-center text-xl font-medium">
for all our problems in life
</div> <div class="flex justify-center"> <div class="text-center mb-6 border-[3px] rounded-md w-20 border-[#045a94]"></div> </div> ${renderComponent($$result, "Card", $$SolutionCard, {})} </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/solutions/solutions.astro", void 0);

const $$Astro$7 = createAstro();
const $$DestinationCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DestinationCard;
  const destinations = [
    {
      title: "Destiny of Human",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum",
      imgUrl: "/assets/destination/dest-human.png"
    },
    {
      title: "Place",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum",
      imgUrl: "/assets/destination/place.png"
    },
    {
      title: "Plan",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum",
      imgUrl: "/assets/destination/plan.png"
    },
    {
      title: "Purpose",
      content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta quia ea architecto qui. Sunt, id ut culpa iusto numquam, neque consequatur porrodolorum",
      imgUrl: "/assets/destination/purpose.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="dropdown-content md:mx-20"> <div class="flex flex-wrap md:gap-8 justify-center items-center"> ${destinations.map((destination) => renderTemplate`<div class="card   p-4 w-[15rem] text-white"> <img${addAttribute(destination.imgUrl, "src")} alt="blog-image" class="w-full h-auto rounded-[46%]"> <div class="my-4  text-base font-medium text-center"> ${destination.title} </div> <div class="text-sm ">${destination.content}</div> <div class="flex justify-center items-center"> <button class="  mt-4  px-4 py-1 text-[#0b89f7] bg-white font-semibold text-sm rounded-sm">
Read more
</button> </div> </div>`)} </div> </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/destination/destination-card.astro", void 0);

const $$Astro$6 = createAstro();
const $$Destination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Destination;
  return renderTemplate`${maybeRenderHead()}<div id="destination" class="bg-[#1592e6] py-10"> <div class="mt-6 mb-2 text-white text-center text-3xl font-medium">
Origin and ultimate
</div> <div class="mb-2 text-white text-center text-3xl font-medium">
Destination of human beings
</div> <div class="flex justify-center"> <div class="text-center mb-6 border-[3px] mt-2 rounded-md w-24 border-white"></div> </div> ${renderComponent($$result, "Card", $$DestinationCard, {})} </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/destination/destination.astro", void 0);

const $$Astro$5 = createAstro();
const $$WhoGodCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$WhoGodCard;
  const whoGods = [
    {
      title: "Jesus The Lord God",
      imgUrl: "/assets/problems/wrong-priorities.jfif"
    },
    {
      title: "Jesus The Savior",
      imgUrl: "/assets/problems/right-wrong.jfif"
    },
    {
      title: "Jesus The Redeemer",
      imgUrl: "/assets/problems/wrong-priorities.jfif"
    },
    {
      title: "Jesus Sactifier",
      imgUrl: "/assets/problems/right-wrong.jfif"
    },
    {
      title: "Trinity The God Head",
      imgUrl: "/assets/problems/wrong-priorities.jfif"
    },
    {
      title: "Word of God",
      imgUrl: "/assets/problems/right-wrong.jfif"
    },
    {
      title: "Will of God",
      imgUrl: "/assets/problems/wrong-priorities.jfif"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="dropdown-content md:mx-20"> <div class="flex flex-wrap gap-8 justify-center items-center"> ${whoGods.map((god) => renderTemplate`<div class="p-4  text-white flex flex-col justify-center items-center"> <div class="w-16 h-16  border-[#045a94] border-[2px] rounded-[50%]"></div> <div class="my-4 w-24 h-14 text-[#045a94]  text-base font-semibold text-center"> ${god.title} </div> </div>`)} </div> </div> <!-- <img
  src={god.imgUrl}
  alt="blog-image"
  class="w-16 h-16 border-[#045a94] border-[2px] rounded-[50%]"
/> -->`;
}, "E:/Freelance/TouchthepowerUI/src/components/who-god/who-god-card.astro", void 0);

const $$Astro$4 = createAstro();
const $$WhoGod = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WhoGod;
  return renderTemplate`${maybeRenderHead()}<div id="god" class="bg-[#f1f5f8] py-10"> <div class="mt-6 mb-2 text-[#045a94] text-center text-3xl font-medium">
Who is God?
</div> <div class="flex justify-center"> <div class="text-center mb-6 border-[3px] rounded-md w-20 border-[#045a94]"></div> </div> ${renderComponent($$result, "Card", $$WhoGodCard, {})} </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/who-god/who-god.astro", void 0);

const $$Astro$3 = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<div id="homeBanner" data-astro-cid-bbrn6hc4> <div class="bg-overlay text-white w-full" data-astro-cid-bbrn6hc4> <div class="md:flex justify-center items-center p-5" data-astro-cid-bbrn6hc4> <div class="md:w-1/2 md:px-16 md:py-10" data-astro-cid-bbrn6hc4> <div class="flex flex-col justify-center gap-5" data-astro-cid-bbrn6hc4> <img class="md:w-[33rem] pr-5" src="/assets/home/title.png" data-astro-cid-bbrn6hc4> <div class="border-b-[1px] w-full" data-astro-cid-bbrn6hc4></div> <div class="text-[1.4rem]" data-astro-cid-bbrn6hc4> <div class="my-4 font-medium" data-astro-cid-bbrn6hc4>
To make the life changing power of God
</div> <div data-astro-cid-bbrn6hc4>Understandable and accessible to all.</div> </div> </div> </div> <div class="md:w-1/2 mt-5" data-astro-cid-bbrn6hc4> <!--poster="/assets/home/video-banner.jpeg" --> <video width="640" class="rounded-lg" height="360" controls data-astro-cid-bbrn6hc4> <source src="/assets/home/video.mp4" type="video/mp4" data-astro-cid-bbrn6hc4>
Your browser does not support the video tag.
</video> </div> </div> </div> <div class="bg-white" data-astro-cid-bbrn6hc4> <div class="py-10" data-astro-cid-bbrn6hc4> <div class="text-center great-vibes-regular text-[3rem]" data-astro-cid-bbrn6hc4>
" Power belong to God "...
</div> <div class="flex text-[1.5rem] justify-center ml-[10rem] my-4 great-vibes-regular" data-astro-cid-bbrn6hc4>
- Psalm 62:11
</div> <div class="text-xl text-center roboto-regular" data-astro-cid-bbrn6hc4> <div class="my-4" data-astro-cid-bbrn6hc4>
The divine power that helps suffering, helpness persons to move
          towards
</div> <div data-astro-cid-bbrn6hc4>the source of Power to empowered and win life's problems</div> </div> </div> </div> </div> `;
}, "E:/Freelance/TouchthepowerUI/src/components/home/home.astro", void 0);

const PrayerRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [showSucessPopup, setShowSucessPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbyFEzO451eFZ84Z4D1cTU-AlQzmI7o3ydiTabTLUVImzsRE1KIBksBPHhdCXJRcOpyoDA/exec",
      {
        method: "POST",
        body: new FormData(
          document.getElementById("form-data")
        )
      }
    ).then((response) => response.json()).then((responseData) => {
      setLoading(false);
      setShowSucessPopup(true);
      reset();
    }).catch((error) => {
      console.error("Submission failed:", error);
    });
  };
  const toggleSubmissionForm = () => {
    setShowSucessPopup(false);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    loading ? /* @__PURE__ */ jsx("div", { className: "loader-container", children: /* @__PURE__ */ jsx("div", { className: "loader" }) }) : /* @__PURE__ */ jsx("div", { children: showSucessPopup ? /* @__PURE__ */ jsx("div", { className: "modal-wrap", children: /* @__PURE__ */ jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-4 bg-white", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: "sucess-image",
          className: "w-14 h-14 ",
          src: "/assets/success-icon.svg"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: "Your form has been submitted successfully" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleSubmissionForm,
          className: " border-[#0b89f7] border-2 px-4  py-1 rounded-sm text-[#0b89f7] font-bold",
          children: "Ok"
        }
      )
    ] }) }) }) : /* @__PURE__ */ jsx(Fragment$1, {}) }),
    /* @__PURE__ */ jsxs("div", { id: "prayer", className: "bg-white p-10", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-6 mb-2 text-[#045a94] text-center text-3xl font-medium", children: "Prayer Request" }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-center mb-6 border-[3px] mt-2 rounded-md w-24 border-[#045a94]" }) }),
      /* @__PURE__ */ jsx("form", { id: "form-data", onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs("div", { className: "md:flex md:h-96", children: [
        /* @__PURE__ */ jsx("div", { className: "md:w-1/2 p-4 flex justify-center items-start mt-5 border-b-2 md:border-b-0 md:border-r-2", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "checkbox", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: "relationship",
                name: "Problem",
                value: "Problems in Relationship"
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "relationship", children: "Problems in Relationship" }),
            /* @__PURE__ */ jsx("br", {})
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "checkbox", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: "health",
                name: "Problem",
                value: "Problems in Health"
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "health", children: " Problems in Health" }),
            /* @__PURE__ */ jsx("br", {})
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "checkbox", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: "finance",
                name: "Problem",
                value: "Problems in Finance"
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "finance", children: " Problems in Finance" }),
            /* @__PURE__ */ jsx("br", {})
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "checkbox", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: "social",
                name: "Problem",
                value: "bicycle"
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "social", children: " Social Problems" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {})
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 py-2 md:px-20", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "my-4 w-full py-2 border-b-2 border-[#0b89f7] focus:outline-none",
              placeholder: "Name",
              id: "name",
              name: "Name",
              ...register("Name", { required: true })
            }
          ),
          errors.Name && /* @__PURE__ */ jsx("small", { className: "text-red-600", children: "Name is required." }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "my-3  w-full py-2 border-b-2 border-[#0b89f7] focus:outline-none",
              placeholder: "Email",
              id: "email",
              name: "Email",
              ...register("Email", {
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                  value: /^[a-zA-Z0-9]{0,61}@[a-zA-Z0-9]{0,255}.[a-zA-Z0-9]{0,24}$/,
                  message: "Invalid Email"
                }
              })
            }
          ),
          errors.Email?.message ? /* @__PURE__ */ jsx("small", { className: "text-red-600", children: errors?.Email?.message.toString() }) : /* @__PURE__ */ jsx(Fragment$1, {}),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              rows: 4,
              className: "my-4 w-full py-2 border-[1.8px] border-gray-400 focus:outline-none",
              id: "message",
              placeholder: "Type your message here",
              name: "Message",
              ...register("Message", { required: true })
            }
          ),
          errors.Message && /* @__PURE__ */ jsx("small", { className: "text-red-600", children: "Message is required." }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center md:justify-end items-center", children: /* @__PURE__ */ jsx("button", { className: "mt-4 px-10 py-1 bg-[#0b89f7] text-white font-semibold text-sm rounded-sm", children: "Submit" }) })
        ] })
      ] }) })
    ] })
  ] });
};

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="text-white bg-[#1c3957] w-full" data-astro-cid-k2f5zb5c> <div class="md:ml-40 p-10" data-astro-cid-k2f5zb5c> <div class="flex items-center gap-16" data-astro-cid-k2f5zb5c> <div class="great-vibes-regular text-3xl" data-astro-cid-k2f5zb5c>Touch the Power</div> <div class="md:flex flex-col md:flex-row gap-10" data-astro-cid-k2f5zb5c> <a href=" #homeBanner" data-astro-cid-k2f5zb5c> <div data-astro-cid-k2f5zb5c>Home</div> </a> <a href="/#problems" data-astro-cid-k2f5zb5c> <div data-astro-cid-k2f5zb5c>Why Problems</div> </a> <a href="/#solutions" data-astro-cid-k2f5zb5c> <div data-astro-cid-k2f5zb5c>Solutions</div> </a> <a href="#god" data-astro-cid-k2f5zb5c> <div data-astro-cid-k2f5zb5c>Who is God</div> </a> <a href="/#destination" data-astro-cid-k2f5zb5c> <div data-astro-cid-k2f5zb5c>Destination of Human</div> </a> <a href="/#prayer" data-astro-cid-k2f5zb5c> <div data-astro-cid-k2f5zb5c>Prayer Request</div> </a> </div> </div> <div class="mt-16 text-xs" data-astro-cid-k2f5zb5c> <div data-astro-cid-k2f5zb5c>Copyright © 2024 Touch of Power | All Rights Reserved</div> </div> </div>  </div>`;
}, "E:/Freelance/TouchthepowerUI/src/components/footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-7omyzpis> <head><title>Touch the Power</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta property="twitter:card" content="summary_large_image"><meta property="robots" content="/robots.txt"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><!-- <link rel="icon" type="image/x-icon" href="/favicon.ico" /> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">', '</head> <body class="bg-[#1c3957]" data-astro-cid-7omyzpis> <div class="md:mx-16" data-astro-cid-7omyzpis> ', " ", " </div> ", '  <script src="/js/navbar.js" defer><\/script> <script src="/js/contact.js" defer><\/script> <script src="https://unpkg.com/aos@next/dist/aos.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"><\/script> <script>\n      AOS.init();\n    <\/script> </body> </html>'])), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-7omyzpis": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-7omyzpis": true }));
}, "E:/Freelance/TouchthepowerUI/src/layout/layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Touch the Power</title>${renderHead()}</head> <body> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Problems", $$Problems, {})} ${renderComponent($$result2, "Solutions", $$Solutions, {})} ${renderComponent($$result2, "Destination", $$Destination, {})} ${renderComponent($$result2, "WhoGod", $$WhoGod, {})} ${renderComponent($$result2, "ReactPrayerRequest", PrayerRequest, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/Freelance/TouchthepowerUI/src/components/prayer-request/prayer-request.tsx", "client:component-export": "default" })} ` })} </body></html>`;
}, "E:/Freelance/TouchthepowerUI/src/pages/index.astro", void 0);

const $$file = "E:/Freelance/TouchthepowerUI/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
