import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import {
  // create naive ui
  create,
  // component
  NButton,
  NLayout,
  NSpace,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutContent,
  NLayoutSider,
  NIcon
} from 'naive-ui'

const naive = create({
  components: [NButton,NLayout, NSpace, NLayoutHeader, NLayoutFooter,NLayoutContent, NLayoutSider, NIcon] ,
  
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
