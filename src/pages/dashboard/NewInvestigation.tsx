import StrongText from '@/atoms/StrongText'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function NewInvestigation() {
    return (
        <div className="bg-primaryBlack w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <Header />
            <StrongText text="aqui vai ser o forms de criação de investigação" />
            <Footer />
        </div>
    )
}
