// module.exports = {
//     mode: "jit",
//     purge: ["./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"],
//     darkMode: false, // or 'media' or 'class'
//     theme: {
//         extend: {},
//     },
//     variants: {
//         extend: {},
//     },
//     plugins: [
//         // ...
//         require("@tailwindcss/forms"),
//     ],
// }
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
