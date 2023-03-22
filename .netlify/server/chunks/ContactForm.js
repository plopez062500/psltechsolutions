import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { values = {} } = $$props;
  let { errors = {} } = $$props;
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `<form class="${"w-full"}" method="${"post"}" action="${"/contact"}"><div class="${"flex gap-4 w-full"}"><div class="${"w-full"}"><label class="${"block mb-2 text-teal-500 text-lg"}" for="${"name"}">Name</label>
			<input class="${"w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"}" id="${"name"}" name="${"name"}" placeholder="${"name"}"${add_attribute("value", values.name, 0)}>
			${errors.name ? `<p class="${"my-1 text-red-500"}">${escape(errors.name[0])}</p>` : ``}</div>
		<div class="${"w-full"}"><label class="${"block mb-2 text-teal-500 text-lg"}" for="${"number"}">Phone Number</label>
			<input class="${"w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"}" id="${"number"}" name="${"number"}" placeholder="${"(xxx) xxx-xxxx"}"${add_attribute("value", values.number, 0)}>
			${errors.number ? `<p class="${"my-1 text-red-500"}">${escape(errors.number[0])}</p>` : ``}</div></div>

	<div class="${"w-full mt-5"}"><label class="${"block mb-2 text-teal-500 text-lg"}" for="${"email"}">Email</label>
		<input class="${"w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"}" id="${"email"}" name="${"email"}" placeholder="${"example@example.com"}"${add_attribute("value", values.email, 0)}>
		${errors.email ? `<p class="${"my-1 text-red-500"}">${escape(errors.email[0])}</p>` : ``}</div>

	<div class="${"w-full mt-5"}"><label class="${"block mb-2 text-teal-500 text-lg"}" for="${"message"}">Message</label>
		<textarea class="${"w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"}" id="${"message"}" name="${"message"}" placeholder="${"Message..."}">${values.message || ""}</textarea>
		${errors.message ? `<p class="${"my-1 text-red-500"}">${escape(errors.message[0])}</p>` : ``}</div>

	<button type="${"submit"}" class="${"w-full px-8 py-2 bg-teal-500 border border-teal-500 text-white rounded-sm transition-all hover:bg-white hover:text-teal-500"}">Send Message
	</button></form>`;
});
export {
  ContactForm as C
};
