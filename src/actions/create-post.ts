'use server';
import type { Post } from "@prisma/client";
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
export async function createPost(formState:CreatePostFormState, FormData:FormData): Promise<CreatePostFormState>{
    const result =createPostSchema.safeParse({
        title: FormData.get('title'),
        content: FormData.get('content')
    });

    if(!result.success){
        return{
            errors: result.error.flatten().fieldErrors
        }
    }
    //revalidate topic show page
    
}