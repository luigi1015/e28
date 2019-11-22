<template>
	<div>
		ShoppingList
		<br>
		<ul>
			<li v-for='(item) in shoppingList' v-bind:key='item.id'>{{ item }}</li>
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
		const shopppingListLocalStorage = localStorage.getItem('shopppingList');
		if( shopppingListLocalStorage !== null ) {
			this.shoppingList = JSON.parse(shopppingListLocalStorage);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
