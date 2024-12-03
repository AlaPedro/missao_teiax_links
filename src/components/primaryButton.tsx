import { useRouter } from 'next/router'

interface PrimaryButtonProps {
    actionText: string
    redirectRoute?: string
}

export default function PrimaryButton({
    actionText,
    redirectRoute,
}: PrimaryButtonProps) {
    const router = useRouter()

    return (
        <button
            className="bg-primaryWhite text-primaryBlack rounded-md
         py-2 px-4 border-none outline-none"
            onClick={() => {
                router.push(`${redirectRoute}`)
            }}
        >
            {actionText}
        </button>
    )
}
