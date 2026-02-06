/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-orange': '#EA5903',
				'text-black': '#1B1B1B',
				'recruit-dark-orange': '#b84a02',
				'recruit-grid-bg': '#fff8f5',
			},
			fontFamily: {
				'noto-sans': ['Noto Sans JP', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			backgroundImage: {
				'recruit-grid':
					'linear-gradient(rgba(234,89,3,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(234,89,3,0.12) 1px, transparent 1px)',
				'recruit-gradient-orange': 'linear-gradient(90deg, #EA5903 0%, #ffbf1c 100%)',
			},
			backgroundSize: {
				'grid-24': '24px 24px',
			},
		},
	},
	plugins: [],
};

