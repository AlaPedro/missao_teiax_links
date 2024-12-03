import { useRouter } from 'next/router'

interface SecondaryButton {
    actionText: string
    redirectRoute?: string
}

export default function PrimaryButton({
    actionText,
    redirectRoute,
}: SecondaryButton) {
    const router = useRouter()

    return (
        <button
            className="bg-primaryBlue text-primaryWhite rounded-md
         py-2 px-4 border-none outline-none"
            onClick={() => {
                router.push(`${redirectRoute}`)
            }}
        >
            {actionText}
        </button>
    )
}
