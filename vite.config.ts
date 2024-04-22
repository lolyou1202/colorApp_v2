import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

export default defineConfig({
	base: 'https://github.com/lolyou1202/colorApp_v2',
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
			},
		},
	},
})
