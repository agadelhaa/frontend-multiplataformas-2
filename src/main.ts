    import { createApp } from 'vue'
    import App from './App.vue'
    import roteador from './router'
    import Menubar from 'primevue/menubar';
    import PrimeVue from 'primevue/config';
    import InputText from 'primevue/inputtext';
    import InputMask from 'primevue/inputmask';
    import InputNumber from 'primevue/inputnumber';


    

   const app = createApp(App)
    .use(PrimeVue)
    .use(roteador)
    .component('Menubar', Menubar)
    .component('InputText', InputText)
    .component('InputMask', InputMask)
    .component('InputNumber',InputNumber)
    
    app.mount('#app')
    