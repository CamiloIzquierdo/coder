/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#62a2a3",
                secondary: "#359d9e",
            },
            height: {
                header: "calc(100vh - 72px - 28px)",
                // Agrega otros cálculos de altura según sea necesario
            },
        },
    },
    plugins: [],
};
