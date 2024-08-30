'use server';

import type { Topic } from '@prisma/client'
import { auth } from '@/auth';
import {promise, z} from 'zod';
import { db } from '@/app/db';
import { redirect } from 'next/navigation';
import paths from '@/paths';
import { revalidatePath } from 'next/cache';
import { resolve } from 'path';

const createTopicSchema=z.object({
    name:z.string().min(3).regex(/[a-z-]/, {message: 'Must be lowercase letters or dashes without spaces'}),
    description: z.string().min(10),
});

interface createTopicState{
    errors:{
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}

export async function createTopic( formState: createTopicState, FormData: FormData): Promise<createTopicState>{
    // await new Promise((resolve)=>setTimeout(resolve, 1000));
    const result=createTopicSchema.safeParse({
        name: FormData.get('name'),
        description: FormData.get('description')
    })

    if(!result.success){
        return{
            errors: (result.error.flatten().fieldErrors)
        }
    }

    const session= await auth();
    if (!session || !session.user){
        return {
            errors: {
                _form: ['You must be signed in to do this.']
            }
        }
    }

    let topic: Topic
    try {
        topic=await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })
    } catch (err: unknown) {
        if(err instanceof Error){
            return{
                errors: {
                    _form: [err.message]
                }
            }
        }else{
            return {
                errors: {
                    _form: ['Something went wrong']
                }
            }
        }
        
    }

    revalidatePath('/')

    redirect(paths.topicShow(topic.slug));


}