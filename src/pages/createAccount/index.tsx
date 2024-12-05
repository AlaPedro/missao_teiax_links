import StrongText from '@/atoms/StrongText'
import { useRouter } from 'next/router'
import { createClient } from '../../../utils/supabase/component'
import { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Loader } from 'lucide-react'

export default function CreateAccount() {
    const router = useRouter()
    const supabase = createClient()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function verifyData() {
        setIsLoading(true)
        if (email === '') {
            toastWarn('Digite seu email para continuar.')
            setIsLoading(false)
            return
        }
        if (password === '') {
            toastWarn('Digite sua senha para continuar.')
            setIsLoading(false)
            return
        }
        if (passwordRepeat === '') {
            toastWarn('Confirme sua senha para continuar.')
            setIsLoading(false)
            return
        } else {
            supabaseSignUp()
        }
    }

    const supabaseSignUp = async () => {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (error?.code === 'user_already_exists') {
            setIsLoading(false)
            return toastWarn('Esse email já está sendo utilizado')
        }
        if (error?.code === 'weak_password') {
            setIsLoading(false)
            return toastWarn('Sua senha é muito fraca')
        }
        if (error?.code === 'validation_failed') {
            setIsLoading(false)
            return toastWarn('Verifique seu email e senha para prosseguir')
        }
        if (error) {
            return
        }
        router.push('/')
    }

    const toastWarn = (message: string) => {
        toast.warn(message, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        })
    }

    return (
        <div className="bg-black w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <div className="w-[400px] h-[450px] border rounded-lg border-grayBlueDark bg-[#020204] p-4 flex flex-col gap-4 justify-center drop-shadow-md">
                <div className="flex items-center">
                    <StrongText text="Crie sua conta" />
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
                <div className="flex flex-col gap-2">
                    <span>Repita sua senha</span>
                    <input
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                        className="bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-10 px-2 py-4 w-full"
                        type="password"
                    />
                </div>
                <div className="w-full flex gap-2">
                    {isLoading ? (
                        <div className="bg-white w-1/2 h-10 rounded-md shadow-md drop-shadow-md text-black font-bold flex items-center justify-center">
                            <Loader className="animate-spin" />
                        </div>
                    ) : (
                        <button
                            onClick={() => verifyData()}
                            className="bg-white w-1/2 h-10 rounded-md shadow-md drop-shadow-md text-black font-bold"
                        >
                            Criar conta
                        </button>
                    )}
                    <button
                        onClick={() => router.push('/')}
                        className="bg-transparent border border-white w-1/2 h-10 rounded-md shadow-md drop-shadow-md text-white font-bold"
                    >
                        Já tenho uma conta
                    </button>
                </div>
            </div>
        </div>
    )
}
