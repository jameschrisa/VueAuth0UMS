import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createAuth0 } from '@auth0/auth0-vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
  ],
})

const app = createApp(App)

app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirect_uri: window.location.origin,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE, // Optional: Only required if you're using an API
  })
)

app.use(router)

// Navigation guard
router.beforeEach((to, from, next) => {
  const { isAuthenticated, isLoading } = app.config.globalProperties.$auth0
  
  if (to.meta.requiresAuth && !isLoading && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

app.mount('#app')
