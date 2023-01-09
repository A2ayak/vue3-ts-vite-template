// import { resolve } from "path"

console.log(import.meta.env)

export function generateThemeVars(mode) {
	switch (mode) {
		case 'test': {
			return {
				'primary-color': '#C3916A',
			}
		}
		default: {
			return {
				'primary-color': '#409eff',
			}
		}
	}
	// return {
	// 	// hack: `true; @import (reference) "${resolve("src/style/theme.less")}";`,
	// 	'primary-color': '#409eff',
	// }
}
