import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shoppingList: []
	},
	mutations: {
		addShoppingListItem(state, payload) {
			state.shoppingList.push(payload);
		},
		removeShoppingListItem(state, payload) {
			var index = state.shoppingList.indexOf(payload);
			if(index > -1) {
				state.shoppingList.splice(index, 1);
			}
		}
	},
	computed: {
		shoppingList: function() {
			return this.$store.state.shoppingList;
		}
	},
	actions: {
	}
});
