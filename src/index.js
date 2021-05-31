// JS
import './js/';

// CSS (example)
import './assets/css/main.css'

// SCSS
import './assets/scss/main.scss';


// Vue
import Vue from 'vue';


// Vue components global register (for use in html)
Vue.component('Developments', require('./components/Developments.vue').default);


// Vue init
new Vue({
	el: '#app',
});

