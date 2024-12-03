import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WithoutPostsAlert from '@/components/WithoutPostsAlert'

export default function Dashboard() {
    return (
        <div className="bg-primaryBlack w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <Header />
            <WithoutPostsAlert />
            <Footer />
        </div>
    )
}
