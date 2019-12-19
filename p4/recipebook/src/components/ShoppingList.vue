<template>
	<div>
		ShoppingList
		<br>
		<ul>
			<li v-for='(item) in shoppingList' v-bind:key='item.id'>{{ item }}  - <button v-on:click="deleteShopppingListItem(item)">Delete from Shoppping List</button></li>
		</ul>
		Number of items: {{ shoppingList.length }}
		<br>
		<router-link :to='{ name:"home" }'>Back to the Homepage</router-link>
	</div>
</template>

<script>
export default {
	name: 'ShoppingList',
	props: {
	},
	data: function () {
		return {
			shoppingList: [
			]
		}
	},
	mounted() {
		//Get the shopping list from local storage:
		this.shoppingList = this.$store.state.shoppingList;
	},
	methods: {
		deleteShopppingListItem: function (item) {
			this.$store.commit('removeShoppingListItem', item);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
