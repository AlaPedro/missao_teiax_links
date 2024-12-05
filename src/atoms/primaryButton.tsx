import { useRouter } from 'next/router'
import { LucideIcon } from 'lucide-react'

interface PrimaryButtonProps {
    actionText: string
    redirectRoute?: string
    icon?: LucideIcon
    onClickAction?: () => void
}

export default function PrimaryButton({
    actionText,
    redirectRoute,
    icon: Icon,
    onClickAction,
}: PrimaryButtonProps) {
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
            className="bg-primaryWhite text-primaryBlack rounded-md
         py-2 px-4 border-none outline-none text-sm flex gap-1 justify-center items-center"
            onClick={handleClick}
        >
            {Icon && <Icon size={18} />}
            {actionText}
        </button>
    )
}
