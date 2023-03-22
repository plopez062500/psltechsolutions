import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
const TextCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { price } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  return `<div class="${"flex gap-4 items-center py-4 px-6 shadow-xl border border-gray-200 rounded-sm text-teal-500"}"><p>•</p>
   <p>${escape(text)}</p>
   <p>$${escape(price)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center w-[95%] max-w-[900px] mx-auto"}"><section class="${"my-10 w-full "}"><h2 class="${"mb-4 text-teal-500 text-2xl font-bold "}">PC REPAIR PRICING</h2>

		<p class="${"text-teal-500 my-5"}">NOTE: Diagnostic fee will be waived if the repair is completed by us. Some services overlap
			eachother in which case a significant discount will be applied.
		</p>

		<div class="${"flex flex-wrap w-full gap-4"}">${validate_component(TextCard, "TextCard").$$render($$result, { text: "Diagnostics", price: "60" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Tuneup/Cleanup", price: "60" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Hardware replacement",
      price: "30 + parts"
    },
    {},
    {}
  )}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Password Reset/Removal",
      price: "40"
    },
    {},
    {}
  )}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Virus Removal", price: "40" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Reimage", price: "40" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Data Recovery Starting at",
      price: "40"
    },
    {},
    {}
  )}</div></section>

	<section class="${"my-10 w-full "}"><h2 class="${"mb-4 text-teal-500 text-2xl font-bold "}">MOBILE REPAIR PRICING</h2>

		<div class="${"flex flex-wrap w-full gap-4"}">${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone 7 Screen", price: "80" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone 7 Battery", price: "80" }, {}, {})}

			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 7 Plus Screen",
      price: "90"
    },
    {},
    {}
  )}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 7 Plus Battery",
      price: "80"
    },
    {},
    {}
  )}

			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone 8 Screen", price: "80" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone 8 Battery", price: "85" }, {}, {})}

			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 8 Plus Screen",
      price: "90"
    },
    {},
    {}
  )}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 8 Plus Battery",
      price: "85"
    },
    {},
    {}
  )}

			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone X Screen", price: "110" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone X Battery", price: "90" }, {}, {})}

			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone XR Screen", price: "110" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone XR Battery", price: "90" }, {}, {})}

			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone XS Screen", price: "110" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone XS Battery", price: "90" }, {}, {})}

			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone XS Max Screen",
      price: "150"
    },
    {},
    {}
  )}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone XS Max Battery",
      price: "95"
    },
    {},
    {}
  )}

			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone 11 Screen", price: "110" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Iphone 11 Battery", price: "95" }, {}, {})}

			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 11 Pro Screen",
      price: "150"
    },
    {},
    {}
  )}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 11 Pro Battery",
      price: "105"
    },
    {},
    {}
  )}

			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 11 Pro Max Screen",
      price: "200"
    },
    {},
    {}
  )}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Iphone 11 Pro Max Battery",
      price: "105"
    },
    {},
    {}
  )}</div></section>

	<section class="${"my-10 w-full"}"><h2 class="${"mb-4 text-teal-500 text-2xl font-bold "}">TECH SUPPORT PRICING</h2>

		<div class="${"flex flex-wrap w-full gap-4"}">${validate_component(TextCard, "TextCard").$$render($$result, { text: "30min One-On-One", price: "50" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "1hour One-On-One", price: "80" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render($$result, { text: "Device Setup", price: "30" }, {}, {})}
			${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Misc support",
      price: "Contact for pricing"
    },
    {},
    {}
  )}</div></section>

	<section class="${"my-10 w-full"}"><h2 class="${"mb-4 text-teal-500 text-2xl font-bold "}">PC BUILDING PRICING</h2>

		<p class="${"text-teal-500 my-5"}">NOTE: All builds require a 20% deopsit on the final cost of the parts that will be applied
			towarards the final cost of the build.
		</p>

		<div class="${"flex flex-wrap w-full gap-4"}">${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      text: "Misc build.",
      price: "80 build fee + parts"
    },
    {},
    {}
  )}</div></section></div>`;
});
export {
  Page as default
};
