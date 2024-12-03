import type { Config } from 'tailwindcss'

const { nextui } = require('@nextui-org/react')

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/atoms/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
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
        darkMode: 'class',
        plugins: [nextui()],
    },
    plugins: [],
} satisfies Config
