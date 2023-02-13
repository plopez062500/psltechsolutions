import { login, type User } from "$lib/auth.server";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  
  login: async function({request, cookies, locals, url}){
    const {email, password} = Object.fromEntries(await request.formData()) as {email: string, password: string};

    try {
      const {user, session} = await login(email, password);

      cookies.set('session_id', session.id, {
        sameSite: 'strict',
        path: '/'
      });
 
    }catch(error){
      return fail(405, {message: 'Email or Password is incorrect'});
    }

    throw redirect(301, "/");
  }
};