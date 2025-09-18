import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'

const app = createApp(App)

// use this directive to close the drop-down menu if you clicked outside it
app.directive('outside', {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (evt: MouseEvent) => {
      evt.stopPropagation()
      // here I check that click was outside the el and his children
      if (!(el === evt.target || el.contains(evt.target))) {
        // and if it did, call method provided in attribute value
        binding.value(evt, el)
      }
    }
    window.requestAnimationFrame(() => {
      document.addEventListener('click', el.clickOutsideEvent)
    })
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
})

app.use(createPinia())

app.mount('#app')
