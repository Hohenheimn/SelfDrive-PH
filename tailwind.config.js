/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ThemeOrange: "#ff7924",
                lowOrange: "#f99151",
                ThemeYellow: "#f1b312",
                ThemeBlue: "#00477e",
                fixedBG: "#00000061",
            },
            screens: {
                "2500px": { max: "2500px" },
                "1920px": { max: "1920px" },
                "1440px": { max: "1440px" },
                "1366px": { max: "1366px" },
                "1280px": { max: "1280px" },
                "1024px": { max: "1024px" },
                "820px": { max: "820px" },
                "640px": { max: "640px" },
                "480px": { max: "480px" },
                "375px": { max: "375px" },
                "320px": { max: "320px" },
            },
        },
    },
    plugins: [],
};
