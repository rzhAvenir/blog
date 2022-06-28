import DefaultTheme from 'vitepress/theme'
import VirtualBook from './components/VirtualBook.vue'
import './styles/index.css'
export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component('VirtualBook', VirtualBook)
  }

}