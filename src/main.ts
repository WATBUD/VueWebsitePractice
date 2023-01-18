import { createApp } from 'vue'; //createApp
//import App3 from './App3.vue'
import { createRouter, createWebHistory } from 'vue-router';
import DemoListUI from './DemoListUI.vue';
import Home from './Home.vue';
//import interviewer_louis from './interviewer_louis.html'


import PictureEditor from './CanvasPractice/PictureEditor.vue';
import PictureEditor_Div from './CanvasPractice/PictureEditor_Div.vue';
import PictureEditor_DragCircle from './CanvasPractice/PictureEditor_DragCircle.vue';
import component_refactoring from './component_refactoring/src/App.vue';
import EmbedURL from './EmbedURL.vue';
import ForEachAndMap from './ForEachAndMap/ForEachAndMap.vue';
import HelloWorld from './HelloWorld.vue';
import pagination_store from './pagination_store/src/App.vue';



export const router = createRouter(
{
    history: createWebHistory(), 
    routes: [
    // { path:'/:catchAll(.*)',redirect: '/'},
    { path: '/', component: DemoListUI }, 
    { path: '/HelloWorld', component: HelloWorld }, 
    { path: '/ForEachAndMap', component: ForEachAndMap }, 
    { path: '/PictureEditor', component: PictureEditor }, 
    { path: '/PictureEditor_Div', component: PictureEditor_Div }, 
    { path: '/PictureEditor_DragCircle', component: PictureEditor_DragCircle }, 
    { path: '/DemoListUI', component: DemoListUI }, 
    { path: '/EmbedURL/:inputEmbedURL',name: 'EmbedURL',component: EmbedURL},
    { path: '/component_refactoring', component: component_refactoring },
    { path: '/pagination_store', component: pagination_store },

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

