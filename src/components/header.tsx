import { signIn, signOut } from '@/actions';
import { auth } from '@/auth';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar,
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@nextui-org/react';
import Link from 'next/link';

export default async function Header(){
    const session = await auth();
    let authContent: React.ReactNode;
    if(session?.user){
        authContent = (
            <Popover placement='left'>
                <PopoverTrigger>
                    <Avatar src={session.user.image || ''}/>
                </PopoverTrigger>
                <PopoverContent>
                    <div className='p-4'>
                        <form action={signOut}>
                            <Button type='submit'>Sign out</Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        )

    }else{
        authContent=<>
            <NavbarItem>
                <form action={signIn}>
                    <Button type='submit' color='secondary' variant='bordered'>Sign In</Button>
                </form>
            </NavbarItem>

            <NavbarItem>
                <form action={signIn}>
                    <Button type='submit' color='primary' variant='flat'>Sign Up</Button>
                </form>
            </NavbarItem>
        </>
    }

    return(
        <Navbar className='shadow mb-6'>
            <NavbarBrand>
                <Link href='/' className='font-bold'>Disuss</Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Input/>
                </NavbarItem>

            </NavbarContent>
            <NavbarContent justify='end'>
                {authContent}
            </NavbarContent>
        </Navbar>

    );
}