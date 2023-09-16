import Vue from 'vue';
import store from './store';
import http from './http';

// Polyfill the Standard Library functions
require('core-js');

window.Vue = Vue;

const app = new Vue({
	el: '#app',
	store
});