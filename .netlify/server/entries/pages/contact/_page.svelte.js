import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import { C as ContactForm } from "../../../chunks/ContactForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  form?.formData.name;
  form?.formData.number;
  form?.formData.email;
  form?.formData.message;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"flex flex-col items-center w-[95%] max-w-[900px] min-h-[60vh] mx-auto"}"><section class="${"mt-10 mb-4 w-full"}"><h2 class="${"mb-4 text-teal-500 text-2xl font-bold "}">GET IN TOUCH</h2>
		${validate_component(ContactForm, "ContactForm").$$render(
    $$result,
    {
      values: { ...form?.formData },
      errors: form?.errors
    },
    {},
    {}
  )}
		${form?.errors?.unknown ? `<p class="${"my-2 text-red-500"}">${escape(form?.errors?.unknown)}</p>` : ``}

		${form?.status === 200 ? `<div class="${"w-full mt-4 px-2 py-3 bg-green-500 rounded-sm"}"><p class="${"text-white "}">Your message has been sent!</p></div>` : ``}

		${form?.errors?.unknown ? `<div class="${"w-full mt-4 px-2 py-3 bg-red-500 rounded-sm"}"><p class="${"text-white "}">We had some trouble sending your message. Please try again later.</p></div>` : ``}</section></div>`;
});
export {
  Page as default
};
