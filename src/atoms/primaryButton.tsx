import { useRouter } from 'next/router'
import { LucideIcon } from 'lucide-react'

interface PrimaryButtonProps {
    actionText: string
    redirectRoute?: string
    icon?: LucideIcon
}

export default function PrimaryButton({
    actionText,
    redirectRoute,
    icon: Icon,
}: PrimaryButtonProps) {
    const router = useRouter()

    return (
        <button
            className="bg-primaryWhite text-primaryBlack rounded-md
         py-2 px-4 border-none outline-none text-sm flex gap-1 justify-center items-center"
            onClick={() => {
                router.push(`${redirectRoute}`)
            }}
        >
            {Icon && <Icon size={18} />}
            {actionText}
        </button>
    )
}
