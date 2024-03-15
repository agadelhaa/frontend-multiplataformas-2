    import { createApp } from 'vue'
    import App from './App.vue'
    import roteador from './router'
    import Menubar from 'primevue/menubar';
    import PrimeVue from 'primevue/config';

    

   const app = createApp(App)
    .use(PrimeVue)
    .use(roteador)
    .component('Menubar', Menubar)
    
    
    
    app.mount('#app')
    