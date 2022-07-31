import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export default defineConfig(() => {
  return {
    plugins: [DefineOptions(), UnoCss({
      presets: [
        presetAttributify(),
        presetUno(),
      ]
    })]
  }
})
