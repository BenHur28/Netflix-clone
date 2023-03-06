/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"fade-pattern":
					"linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0,0, 0.9) 100%), url(https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1-1536x864.jpg)",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
