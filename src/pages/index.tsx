import PrimaryButton from '@/atoms/primaryButton'

export default function Home() {
    return (
        <div className="bg-primaryBlue w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <h1>Seja bem vindo a tela inicial</h1>
            <span>aqui sera uma tela de login para entrar no prpjeto</span>
            <PrimaryButton
                actionText="Ir para o dashboard"
                redirectRoute="/dashboard"
            />
        </div>
    )
}
