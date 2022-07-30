<script setup lang="ts">
import { ref } from 'vue'
const isDark = ref(false)
var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    const darkStatus = localStorage.getItem('vitepress-theme-appearance')
    if (darkStatus === 'light') {
      isDark.value = false
    } else {
      isDark.value = true
    }
  })
})
/** Watch Element Node**/
mutationObserver.observe(window.document.documentElement<HtmlElement>, {
  attributes: true
})
</script>

<template>
  <img v-if="!isDark" class="end" src="/blog/the-end-light.svg" />
  <img v-if="isDark" class="end" src="/blog/the-end-dark.svg" />
</template>

<style scoped>
.end {
  margin-top: 20px;
  width: 200px;
}
</style>
