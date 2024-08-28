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
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function HeaderAuth(){
    const session=useSession();
    let authContent: React.ReactNode
    if (session.status==='loading'){
        authContent=null;
    }else if(session.data?.user){
        authContent = (
            <Popover placement='left'>
                <PopoverTrigger>
                    <Avatar src={session.data.user.image || ''}/>
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
    return authContent;
}

