'use client'

import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import FormButton from "../common/form-button"

export default function PostCreateForm(){
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">
                    Create a Post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Post</h3>
                        <Input
                            name="title"
                            label="Title"
                            labelPlacement="outside"
                            placeholder="Title"
                        />

                        <Input
                            name="content"
                            label="Content"
                            labelPlacement="outside"
                            placeholder="Content"
                        />

                        <FormButton>Create Post</FormButton>

                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}