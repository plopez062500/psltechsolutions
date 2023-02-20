import {prisma} from "$lib/prisma/prisma.server";
import type { User } from "./auth.server";

export async function getAllPosts() {
	const posts = await prisma.post.findMany();

	return posts;
}

export async function createPost(title: string, body: string, user: User){
	await prisma.post.create({
		data: {
			title,
			body,
			userEmail: user.email
		}
	});
}
