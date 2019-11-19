<template>
	<div>
		Recipe List
		<br>
		<ul>
			<li v-for='(item) in recipes' v-bind:key='item.id'>{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Recipes',
	props: {
		msg: String
	},
	data: function () {
		return {
			recipes: [
				{id: 1, name: "Recipe 1"},
				{id: 2, name: "Recipe 2"},
				{id: 3, name: "Recipe 3"},
				{id: 4, name: "Recipe 4"},
				{id: 5, name: "Recipe 5"}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
