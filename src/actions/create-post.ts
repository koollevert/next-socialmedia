'use server';
import { db } from "@/app/db";
import { auth } from "@/auth";
import type { Post } from "@prisma/client";
import { error } from "console";
import { z } from "zod";
const createPostSchema=z.object({
    title: z.string().min(3),
    content: z.string().min(10)
});
interface CreatePostFormState{
    errors:{
        title?:string[]
        content?:string[],
        _form?: string[]
    }
}
export async function createPost(slug: string, formState:CreatePostFormState, FormData:FormData): Promise<CreatePostFormState>{
    const result =createPostSchema.safeParse({
        title: FormData.get('title'),
        content: FormData.get('content')
    });

    if(!result.success){
        return{
            errors: result.error.flatten().fieldErrors
        }
    }

    const session = await auth();
    if(!session || !session.user){
        return {
            errors: {
                _form: ['You must be signed in to do Create a post'],
            }
        }
    }

    const topic = await db.topic.findFirst({
        where: {slug}
    });

    if(!topic){
        return{
            errors: {
                _form: ['Cannot finf topic']
            }
        }
    }
    //revalidate topic show page
    
}