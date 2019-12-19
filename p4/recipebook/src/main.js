import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Recipes from './components/Recipes.vue';
import Recipe from './components/Recipe.vue';
import ShoppingList from './components/ShoppingList.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Recipes, name: 'home' },
	{ path: '/recipes', component: Recipes, name: 'recipes' },
	{ path: '/recipes/:id', component: Recipe, name: 'recipe', props: true },
	{ path: '/shoppinglist', component: ShoppingList, name: 'shoppinglist' }
];

const router = new VueRouter({
	routes: routes
});

new Vue({
	store: store,
	router: router,
	render: h => h(App),
}).$mount('#app');
