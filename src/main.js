import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Vuex from "vuex";
import i18n from "./i18n";



var Scrollactive = require('vue-scrollactive');
Vue.use(Vuex, Scrollactive);

new Vue({
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");


// const sections = document.querySelectorAll('section');
// const ulLi = document.querySelectorAll('li');

// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= sectionTop - sectionHeight / 2) {
//             current = section.getAttribute('id');

//         }
//     })
//     ulLi.forEach(li => {
//         li.id.remove('active');
//         if (li.id(current)) {
//             li.id.add('active')

//         }
//     })
// })