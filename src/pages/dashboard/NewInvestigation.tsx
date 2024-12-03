import Footer from '@/components/Footer'
import FormAddIvestigation from '@/components/FormAddIvestigation'
import Header from '@/components/Header'

export default function NewInvestigation() {
    return (
        <div className="bg-primaryBlack w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <Header />
            <FormAddIvestigation />
            <Footer />
        </div>
    )
}
