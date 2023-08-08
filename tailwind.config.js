/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                bottom: "0 10px 12px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            },
            fontFamily: {
                "new-hero-light": ["HeroNewLight.woff", "sans-serif"],
                "new-ultra": ["NewHeroUltraLight.otf", "sans"],
            },
            colors: {
                primary: "#62a2a3",
                secondary: "#359d9e",
                tertiary: "#5B5B5B",
            },
            height: {
                header: "calc(100vh - 72px - 28px)",
                // Agrega otros cálculos de altura según sea necesario
            },
        },
    },
    plugins: [],
};
