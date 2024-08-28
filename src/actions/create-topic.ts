'use server';
import { auth } from '@/auth';
import {z} from 'zod';

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

    return {
        errors: {}
    }
    //revalidate the homepage

}