import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

export default defineConfig({
	base: '/colorApp_v2/',
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
			},
		},
	},
})
