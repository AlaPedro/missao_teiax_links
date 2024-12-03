import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
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
            <div className="flex items-center gap-4 mr-[30px] cursor-pointer">
                <div className="bg-primaryWhite w-[32px] h-[32px] rounded-full text-primaryBlue flex justify-center items-center">
                    E
                </div>
                <span className="text-primaryWhite">Eric</span>
                <Image
                    src={'/downIcon.svg'}
                    width={7.5}
                    height={3.75}
                    alt="Logo"
                />
            </div>
        </header>
    )
}
