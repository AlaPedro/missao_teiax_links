import StrongText from '@/atoms/StrongText'
import { useRouter } from 'next/router'
import { createClient } from '../../utils/supabase/component'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
    const router = useRouter()
    const supabase = createClient()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const supabaseLogIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
            return alert(error.message)
        }
        console.log('deu certo', data)
        router.push('/dashboard')
        return
    }
    return (
        <div className="bg-black w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <div className="w-[400px] h-[350px] border rounded-lg border-grayBlueDark bg-[#020204] p-4 flex flex-col gap-4 justify-center drop-shadow-md">
                <div className="flex items-center">
                    <StrongText text="Faça seu login" />
                    <Image
                        src={'/logo-1.svg'}
                        width={40}
                        height={40}
                        alt="Logo"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Email</span>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-10 px-2 py-4 w-full"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Senha</span>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-10 px-2 py-4 w-full"
                        type="password"
                    />
                </div>
                <div className="w-full flex gap-2">
                    <button
                        onClick={() => supabaseLogIn()}
                        className="bg-white w-1/2 h-10 rounded-md shadow-md drop-shadow-md text-black font-bold"
                    >
                        Entrar
                    </button>
                    <button
                        onClick={() => router.push('/createAccount')}
                        className="bg-transparent border border-white w-1/2 h-10 rounded-md shadow-md drop-shadow-md text-white font-bold"
                    >
                        Não tenho conta
                    </button>
                </div>
            </div>
        </div>
    )
}
