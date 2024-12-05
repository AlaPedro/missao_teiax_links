import Image from 'next/image'
import { useRouter } from 'next/router'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { createClient } from '../../utils/supabase/component'
import { LogOut } from 'lucide-react'

export default function Header() {
    const supabase = createClient()
    const router = useRouter()
    const supabaseLogOut = async () => {
        const {} = await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <header className="absolute top-0 w-full h-[74px] bg-primaryBlue flex justify-between">
            <div>
                <Image
                    className="relative top-[18px] left-[30px] cursor-pointer"
                    src={'/logo-1.svg'}
                    width={40}
                    height={40}
                    alt="Logo"
                    onClick={() => {
                        router.push('/dashboard')
                    }}
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-4 mr-[30px] cursor-pointer">
                        <div className="bg-primaryWhite w-[32px] h-[32px] rounded-full text-primaryBlue flex justify-center items-center">
                            U
                        </div>
                        <span className="text-primaryWhite">User</span>
                        <Image
                            src={'/downIcon.svg'}
                            width={7.5}
                            height={3.75}
                            alt="Logo"
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="w-56 bg-zinc-950 text-white"
                >
                    <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => supabaseLogOut()}
                    >
                        <LogOut />
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
