
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import TheAbout from './components/TheAbout.vue'
import TheServices from './components/TheServices.vue'
import TheContact from './components/TheContact.vue'
import TheLogin from './components/TheLogin.vue'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
       { path: '/AboutUs', component: TheAbout},
       { path: '/Login', component: TheLogin},
       { path: '/Services', component: TheServices},
       { path: '/Contact', component: TheContact},
    ]
})

const app = createApp(App)
app.use(routes)
app.mount('#app')
