import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Recipes from './components/Recipes.vue';
import Recipe from './components/Recipe.vue';
import ShoppingList from './components/ShoppingList.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Recipes },
	{ path: '/recipe', component: Recipe },
	{ path: '/shoppinglist', component: ShoppingList }
];

const router = new VueRouter({
	routes: routes
});

new Vue({
	router: router,
	render: h => h(App),
}).$mount('#app');
