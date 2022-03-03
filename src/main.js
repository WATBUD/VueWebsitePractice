import { createApp } from 'vue'//createApp
//import App3 from './App3.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DemoListUI from './DemoListUI.vue'
import Home from './Home.vue'
import two_sum_less_than_k from './two_sum_less_than_k.vue'

//import interviewer_louis from './interviewer_louis.html'

import component_refactoring from '../component_refactoring/src/App.vue'
export const router = createRouter(
{
    history: createWebHistory(), 
    routes: [
    { path: '/', component: DemoListUI }, 
    { path: '/DemoListUI', component: DemoListUI }, 
    { path: '/two_sum_less_than_k', component: two_sum_less_than_k },
    { path: '/component_refactoring', component: component_refactoring },

    ],
});

const Vueinstance = createApp(Home);
Vueinstance.use(router);
Vueinstance.mount('#app');

//import { defineAsyncComponent } from 'vue'

// const AsyncComp = defineAsyncComponent(() => {
//     return new Promise((resolve, reject) => {
//       // ...load component from server
//       resolve(/* loaded component */)
//     })
// })

//createApp(DemoListUI).mount('#app')

