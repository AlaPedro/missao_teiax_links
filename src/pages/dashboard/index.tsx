import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WithoutPostsAlert from '@/components/WithoutPostsAlert'
import { protectedByAuth } from '@/middlewares/auth'

interface DashboardProps {
    profile: Profile
}

export const getServerSideProps = protectedByAuth(
    async (context, user, profile) => {
        return {
            props: {
                profile: profile || {},
            },
        } as { props: DashboardProps }
    }
)

export default function Dashboard() {
    return (
        <div className="bg-primaryBlack w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <Header />
            <WithoutPostsAlert />
            <Footer />
        </div>
    )
}
