<template>
	<div>
		Recipe
		<br>
		<ul>
			<li v-for='(item) in ingredients' v-bind:key='item.id'>{{ item.name }}</li>
		</ul>
		<br>
		<ol>
			<li v-for='(item) in instructions' v-bind:key='item.id'>{{ item.name }}</li>
		</ol>
	</div>
</template>

<script>
export default {
	name: 'Recipe',
	props: {
		msg: String
	},
	data: function () {
		return {
			ingredients: [
				{id: 1, name: "Ingredient 1"},
				{id: 2, name: "Ingredient 2"},
				{id: 3, name: "Ingredient 3"},
				{id: 4, name: "Ingredient 4"},
				{id: 5, name: "Ingredient 5"}
			],
			instructions: [
				{id: 1, name: "Instruction 1"},
				{id: 2, name: "Instruction 2"},
				{id: 3, name: "Instruction 3"},
				{id: 4, name: "Instruction 4"},
				{id: 5, name: "Instruction 5"}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
