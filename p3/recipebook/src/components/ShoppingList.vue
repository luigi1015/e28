<template>
	<div>
		ShoppingList
		<br>
		<ul>
			<li v-for='(item) in shoppingList' v-bind:key='item.id'>{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ShoppingList',
	props: {
		msg: String
	},
	data: function () {
		return {
			shoppingList: [
				{id: 1, name: "Item 1"},
				{id: 2, name: "Item 2"},
				{id: 3, name: "Item 3"},
				{id: 4, name: "Item 4"},
				{id: 5, name: "Item 5"}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
