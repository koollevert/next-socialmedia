'use client'

import { createTopic } from '@/actions'
import{
    Input,
    Button,
    Textarea,
    PopoverTrigger,
    PopoverContent,
    Popover
} from '@nextui-org/react'
import { useFormState } from 'react-dom'
export default function TopicCreateForm(){
    const [formState, action]=useFormState(createTopic, {errors: {}});
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create a Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create a Topic</h3>
                        <Input name="name" label='Name' labelPlacement="outside" placeholder="Name" isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(', ')}/>
                        <Textarea name="description" label='Description' labelPlacement="outside" placeholder="Describe you topic" isInvalid={!!formState.errors.description} errorMessage={formState.errors.description?.join(', ')}/>
                        {formState.errors._form?(
                            <div className='rounded p-2 bg-red-200 border-red-400'>
                                {formState.errors._form?.join(', ')}
                            </div>
                        ): null}
                        <Button type='submit'>Submit</Button>

                    </div>

                </form>
            </PopoverContent>
        </Popover>
    )
}