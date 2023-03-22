import { b as private_env } from "../../../chunks/shared-server.js";
import "@emailjs/browser";
import { z, ZodError } from "zod";
async function sendMessage(name, email, number, message) {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      accessToken: private_env.EJS_PRIVATE_KEY,
      service_id: private_env.EJS_SERVICE_ID,
      template_id: private_env.EJS_MESSAGE_TEMPLATE_ID,
      user_id: private_env.EJS_PUBLIC_KEY,
      template_params: {
        name,
        email,
        number,
        message
      }
    })
  });
  if (res.status !== 200) {
    throw new Error("Failes to send email");
  }
}
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  number: z.string().min(1, "Password is required."),
  email: z.string().min(1, "Email is required.").email(),
  message: z.string().min(1, "Message cannot be blank.")
});
const actions = {
  default: async (event) => {
    const formData = Object.fromEntries(
      await event.request.formData()
    );
    const response = {
      status: 200,
      formData
    };
    try {
      const { name, number, email, message } = contactFormSchema.parse(formData);
      await sendMessage(name, email, number, message);
    } catch (err) {
      response.status = 405;
      if (err instanceof ZodError) {
        response.errors = { ...err.flatten().fieldErrors };
      } else {
        response.errors = {
          unknown: JSON.stringify(err)
        };
      }
    } finally {
      console.log(true);
      console.log(response);
      return response;
    }
  }
};
export {
  actions
};
