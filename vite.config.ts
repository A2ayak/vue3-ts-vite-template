import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 支持setup内写name属性，利于keepAlive
import AutoImport from 'unplugin-auto-import/vite' // 自动导入某些包的Api, 生成auto-import.d.ts
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { generateThemeVars } from './src/style/theme'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const { VITE_APP_NAME } = loadEnv(mode, process.cwd()) // 加载环境变量
	console.log('当前模式', mode)

	return {
		// base: VITE_APP_NAME,
		server: {
			host: true,
			port: 8080,
			// proxy: {
			//   '/api': {
			//     target: 'http://192.168.1.1',
			//     changeOrigin: true
			//   }
			// }
		},
		plugins: [
			vue(),
			vueJsx(),
			VueSetupExtend(),
			createSvgIconsPlugin({
				iconDirs: [resolve(__dirname, 'src/assets/svg')],
				symbolId: 'icon-[dir]-[name]',
			}),
			AutoImport({
				// dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
				imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
			}),
			Components({
				resolvers: [
					AntDesignVueResolver({
						importStyle: false,
						exclude: ['ADatePicker', 'ARangePicker'],
					}),
				],
			}),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					modifyVars: generateThemeVars(mode),
					javascriptEnabled: true,
					additionalData: mode === 'theme' ? '@import "@/style/otherTheme.less";' : '',
				},
			},
		},
	}
})
