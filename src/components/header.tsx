import { auth } from '@/auth';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar
} from '@nextui-org/react';
import Link from 'next/link';

export default async function Header(){
    const session = await auth();

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
                <NavbarItem>
                    {
                        session?.user ? <div>Signed In</div> : <div>Signed Out</div>
                    }
                </NavbarItem>

            </NavbarContent>
        </Navbar>

    );
}