import { useRouter } from 'next/router'

interface SecondaryButton {
    actionText: string
    redirectRoute?: string
    onClickAction?: () => void
}

export default function SecondaryButton({
    actionText,
    redirectRoute,
    onClickAction,
}: SecondaryButton) {
    const router = useRouter()

    const handleClick = () => {
        if (onClickAction) {
            onClickAction()
        }

        if (redirectRoute) {
            router.push(redirectRoute)
        }
    }

    return (
        <button
            className="bg-primaryBlue text-primaryWhite rounded-md
         py-2 px-4 border border-zinc-800"
            onClick={handleClick}
        >
            {actionText}
        </button>
    )
}
