import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primaryBlue: '#030711',
                primaryBlack: '#020204',
                primaryWhite: '#F8FAFC',
                grayColor: '#C8C8C8',
                grayBlueLight: '#7F8EA3',
                grayBlueDark: '#1D283A',
                primaryGreen: '#166534',
                secondaryGreen: '#BBF7D0',
            },
        },
    },
    plugins: [],
} satisfies Config
