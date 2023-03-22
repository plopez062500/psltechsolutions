import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" id="${"Layer_1"}" style="${"enable-background:new 0 0 64 64;"}" version="${"1.1"}" viewBox="${"0 0 64 64"}" xml:space="${"preserve"}"><style type="${"text/css"}">.st0 {
			fill: #14B8A6;
		}
	</style><g><g id="${"Navicon"}" transform="${"translate(330.000000, 232.000000)"}"><polygon class="${"st0"}" id="${"Fill-19"}" points="${"-321.8,-219 -274.3,-219 -274.3,-212.7 -321.8,-212.7    "}"></polygon><polygon class="${"st0"}" id="${"Fill-20"}" points="${"-321.8,-203.2 -274.3,-203.2 -274.3,-196.8 -321.8,-196.8    "}"></polygon><polygon class="${"st0"}" id="${"Fill-21"}" points="${"-321.8,-187.3 -274.3,-187.3 -274.3,-181 -321.8,-181    "}"></polygon></g></g></svg>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"100%"}" viewBox="${"0 0 347 230"}" fill="${"none"}"><g clip-path="${"url(#clip0_3_22)"}"><path d="${"M338.164 211.602H6.11749V225.91H338.164V211.602Z"}" fill="${"white"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M11.8858 4.354H332.382C335.554 4.354 338.15 6.95015 338.15 10.1223V215.572C338.15 218.745 335.554 221.341 332.382 221.341H11.8858C8.71328 221.341 6.11749 218.745 6.11749 215.572V10.1223C6.11749 6.94977 8.71328 4.354 11.8858 4.354Z"}" fill="${"#14B8A6"}"></path><path d="${"M329.153 16.522H16.7316V210.731H329.153V16.522Z"}" fill="${"white"}" stroke="${"white"}" stroke-width="${"0.125102"}"></path><path d="${"M170.546 11.7426C171.408 12.6197 172.818 12.6321 173.695 11.7702C174.572 10.9083 174.584 9.49858 173.722 8.62143C172.86 7.74428 171.45 7.73189 170.573 8.59377C169.696 9.45564 169.684 10.8654 170.546 11.7426Z"}" fill="${"white"}"></path><path d="${"M170.905 11.3899C171.572 12.0688 172.663 12.0784 173.342 11.4113C174.021 10.7442 174.031 9.653 173.364 8.97407C172.696 8.29513 171.605 8.28555 170.926 8.95266C170.247 9.61977 170.237 10.711 170.905 11.3899Z"}" fill="${"white"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M173.364 8.973C174.031 9.65181 174.022 10.7429 173.342 11.41C173.217 11.5336 173.077 11.6338 172.928 11.7109C172.448 11.4546 172.032 10.9924 171.801 10.3915C171.543 9.72211 171.569 9.02667 171.82 8.48582C172.364 8.38529 172.947 8.54856 173.364 8.973Z"}" fill="${"white"}"></path></g><path d="${"M37.4668 116.438L65.8086 127.922V135.961L32.2578 120.416V115.699L37.4668 116.438ZM65.8086 107.004L37.5078 118.652L32.2578 119.227V114.469L65.8086 98.9648V107.004ZM101 120.58H85.0449V114.141H101C104.09 114.141 106.592 113.648 108.506 112.664C110.42 111.68 111.814 110.312 112.689 108.562C113.592 106.812 114.043 104.816 114.043 102.574C114.043 100.523 113.592 98.5957 112.689 96.791C111.814 94.9863 110.42 93.5371 108.506 92.4434C106.592 91.3223 104.09 90.7617 101 90.7617H86.8906V144H78.9746V84.2812H101C105.512 84.2812 109.326 85.0605 112.443 86.6191C115.561 88.1777 117.926 90.3379 119.539 93.0996C121.152 95.834 121.959 98.9648 121.959 102.492C121.959 106.32 121.152 109.588 119.539 112.295C117.926 115.002 115.561 117.066 112.443 118.488C109.326 119.883 105.512 120.58 101 120.58ZM163.795 128.906C163.795 127.512 163.576 126.281 163.139 125.215C162.729 124.121 161.99 123.137 160.924 122.262C159.885 121.387 158.436 120.553 156.576 119.76C154.744 118.967 152.42 118.16 149.604 117.34C146.65 116.465 143.984 115.494 141.605 114.428C139.227 113.334 137.189 112.09 135.494 110.695C133.799 109.301 132.5 107.701 131.598 105.896C130.695 104.092 130.244 102.027 130.244 99.7031C130.244 97.3789 130.723 95.2324 131.68 93.2637C132.637 91.2949 134.004 89.5859 135.781 88.1367C137.586 86.6602 139.732 85.5117 142.221 84.6914C144.709 83.8711 147.484 83.4609 150.547 83.4609C155.031 83.4609 158.832 84.3223 161.949 86.0449C165.094 87.7402 167.486 89.9688 169.127 92.7305C170.768 95.4648 171.588 98.3906 171.588 101.508H163.713C163.713 99.2656 163.234 97.2832 162.277 95.5605C161.32 93.8105 159.871 92.4434 157.93 91.459C155.988 90.4473 153.527 89.9414 150.547 89.9414C147.73 89.9414 145.406 90.3652 143.574 91.2129C141.742 92.0605 140.375 93.209 139.473 94.6582C138.598 96.1074 138.16 97.7617 138.16 99.6211C138.16 100.879 138.42 102.027 138.939 103.066C139.486 104.078 140.32 105.021 141.441 105.896C142.59 106.771 144.039 107.578 145.789 108.316C147.566 109.055 149.686 109.766 152.146 110.449C155.537 111.406 158.463 112.473 160.924 113.648C163.385 114.824 165.408 116.15 166.994 117.627C168.607 119.076 169.797 120.73 170.562 122.59C171.355 124.422 171.752 126.5 171.752 128.824C171.752 131.258 171.26 133.459 170.275 135.428C169.291 137.396 167.883 139.078 166.051 140.473C164.219 141.867 162.018 142.947 159.447 143.713C156.904 144.451 154.061 144.82 150.916 144.82C148.154 144.82 145.434 144.438 142.754 143.672C140.102 142.906 137.682 141.758 135.494 140.227C133.334 138.695 131.598 136.809 130.285 134.566C129 132.297 128.357 129.672 128.357 126.691H136.232C136.232 128.742 136.629 130.506 137.422 131.982C138.215 133.432 139.295 134.635 140.662 135.592C142.057 136.549 143.629 137.26 145.379 137.725C147.156 138.162 149.002 138.381 150.916 138.381C153.678 138.381 156.016 137.998 157.93 137.232C159.844 136.467 161.293 135.373 162.277 133.951C163.289 132.529 163.795 130.848 163.795 128.906ZM218.059 137.561V144H188.199V137.561H218.059ZM189.758 84.2812V144H181.842V84.2812H189.758ZM273.225 84.2812L248.328 149.127H241.807L266.744 84.2812H273.225ZM310.426 118.078L281.264 106.717V98.8828L316.291 114.387V119.186L310.426 118.078ZM281.264 128.086L310.508 116.479L316.291 115.617V120.375L281.264 135.92V128.086Z"}" fill="${"#14B8A6"}"></path><defs><clipPath id="${"clip0_3_22"}"><rect width="${"512"}" height="${"512"}" fill="${"white"}" transform="${"translate(-83 -132)"}"></rect></clipPath></defs></svg>`;
});
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-18agp22-hover-animation{0%{border-radius:0px}25%{--tw-bg-opacity:1;background-color:rgb(20 184 166 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}75%{border-radius:0.75rem}100%{--tw-bg-opacity:1;background-color:rgb(20 184 166 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));border-radius:0.375rem}}.nav-item.svelte-18agp22:hover{animation-name:svelte-18agp22-hover-animation;animation-duration:0.5s;animation-fill-mode:forwards}.mobile-nav-bg.svelte-18agp22{animation-name:svelte-18agp22-mobile-nav-bg-open;animation-duration:0.2s;animation-fill-mode:forwards;width:100vw;height:100vh;background-color:black;display:hidden;background-color:rgba(0, 0, 0, 0);position:absolute;overflow-x:hidden}@keyframes svelte-18agp22-mobile-nav-bg-open{0%{display:block}100%{background-color:rgba(0, 0, 0, 0.5)}}.mobile-nav-drawer.svelte-18agp22{animation-name:svelte-18agp22-mobile-nav-drawer-open;animation-duration:0.2s;animation-fill-mode:forwards;background-color:white;text-align:center;padding:1rem;width:70vw;height:100vh;position:absolute;right:-70vw}@keyframes svelte-18agp22-mobile-nav-drawer-open{100%{right:0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
${``}


<div class="${"flex md:gap-10 items-center bg-white md:relative px-4 md:px-32 py-2 w-screen min-h-[3em] shadow-lg duration"}"><div class="${"w-[75px] cursor-pointer"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>

	<h1 class="${"text-teal-500 text-xl ml-2 md:hidden"}">Technology Solutions</h1>

	<div class="${"w-[40px] ml-auto md:hidden"}">${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}</div>

	<div class="${"py-4 hidden md:block"}"><a class="${"px-8 py-3 text-center rounded-none text-teal-500 transition-all nav-item  svelte-18agp22"}" href="${"/"}">Home
		</a>
		<a class="${"px-8 py-3 text-center rounded-none text-teal-500 transition-all nav-item svelte-18agp22"}" href="${"/pricing"}">Pricing
		</a>
		<a class="${"px-8 py-3 text-center rounded-none text-teal-500 transition-all nav-item svelte-18agp22"}" href="${"/contact"}">Contact
		</a></div></div>

${slots.default ? slots.default({}) : ``}

<div class="${"flex flex-wrap justify-around mt-auto py-10 w-full min-h-[35vh] bg-teal-500 text-whtie"}"><div class="${"text-center mb-3"}"><h3 class="${"font-bold text-white text-xl"}">Quick Links</h3>
		<a class="${"block px-8 py-1 text-lg text-white"}" href="${"/"}">Home </a>
		<a class="${"block px-8 py-1 text-lg text-white"}" href="${"/pricing"}">Pricing </a>
		<a class="${"block px-8 py-1 text-lg text-white"}" href="${"/contact"}">Contact </a></div>

	<div class="${"text-center"}"><h3 class="${"font-bold text-white text-xl"}">Contact Info</h3>
		<p class="${"block px-8 py-1 text-lg text-white transition-all "}">psltechsolutions00@gmail.com</p>
		<p class="${"block px-8 py-1 text-lg text-white transition-all "}">270-832-1066</p></div>
</div>`;
});
export {
  Layout as default
};
