import { createTopic } from '@/actions'
import{
    Input,
    Button,
    Textarea,
    PopoverTrigger,
    PopoverContent,
    Popover
} from '@nextui-org/react'
export default function TopicCreateForm(){
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create a Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={createTopic}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create a Topic</h3>
                        <Input label='Name' labelPlacement="outside" placeholder="Name" />
                        <Textarea label='Description' labelPlacement="outside" placeholder="Describe you topic" />
                        <Button type='submit'>Submit</Button>

                    </div>

                </form>
            </PopoverContent>
        </Popover>
    )
}