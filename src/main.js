// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'  // Import Tailwind CSS here
import router from './router';


createApp(App).use(router).mount('#app')

