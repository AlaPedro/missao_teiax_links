import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default function Success() {
    return (
        <div className="bg-black w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <Modal />
            <Footer />
        </div>
    )
}
