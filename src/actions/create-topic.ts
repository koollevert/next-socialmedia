'use server';
import {z} from 'zod';

const createTopicSchema=z.object({
    name:z.string().min(3).regex(/[a-z-]/, {message: 'Must be lowercase letters or dashes without spaces'}),
    description: z.string().min(10),
});

export async function createTopic(FormData: FormData){
    const result=createTopicSchema.safeParse({
        name: FormData.get('name'),
        description: FormData.get('description')
    })

    if(!result.success){
        console.log(result.error.flatten().fieldErrors);
    }
    //revalidate the homepage

}