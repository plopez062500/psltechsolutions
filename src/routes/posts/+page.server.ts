import { getAllPosts } from '$lib/prisma/post.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {

   const posts = await getAllPosts();

   return {
      user: locals.user,
      posts
   }
};
