import type { Actions, PageServerLoad } from "./$types";
import { prisma } from "../lib/prisma.server";
import { fail } from "@sveltejs/kit";


export const load: PageServerLoad = async () => {
  const posts = await prisma.post.findMany();

  return {
    posts
  };
};

export const actions: Actions = {
  addPost: async ({request}) => {
    const {title, body} = Object.fromEntries(await request.formData()) as {title: string, body: string};

    try {
      await prisma.post.create({
        data:{
          title,
          body
        }
      });
    }
    catch(err){
      fail(500, { message: "Internal server error"});
    }
    
    return {
      status: 201
    }
    
  }
};