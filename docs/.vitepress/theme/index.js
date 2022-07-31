import DefaultTheme from 'vitepress/theme'
import VirtualBook from './components/VirtualBook.vue'
import TheEnd from './components/TheEnd.vue'
import './styles/index.css'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VirtualBook', VirtualBook)
    app.component('TheEnd', TheEnd)
  }
}
