/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                terminal: ['Source Code Pro', defaultTheme.fontFamily.mono],
            },
            keyframes: {
                flash: {
                    '0%, 49%': { opacity: 1 },
                    '50%, 100%': { opacity: 0 },
                },
            },
            animation: {
                flash: 'flash 1000ms linear infinite',
            },
        },
        plugins: [],
        darkMode: 'class',
    },
};
