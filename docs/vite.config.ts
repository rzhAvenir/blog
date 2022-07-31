import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig(() => {
  console.log('有执行吗')
  return {
    plugins: [DefineOptions()]
  }
})
