<template>
	<div v-if='recipe'>
		Recipe
		<br>
		<ul>
			<li v-for='(item) in recipe.ingredients' v-bind:key='item.id'>{{ item.name }}</li>
		</ul>
		<br>
		<ol>
			<li v-for='(item) in recipe.instructions' v-bind:key='item.id'>{{ item.name }}</li>
		</ol>
		<button v-on:click="addFavorite">Add to Favorites</button>
	</div>
</template>

<script>
const axios = require('axios');

export default {
	name: 'Recipe',
	props: {id: Number},
	data: function () {
		return {
			recipe: null
		}
	},
	mounted() {
		this.recipe = axios
			.get('https://my-json-server.typicode.com/luigi1015/e28-recipebook-api/recipes/' + this.id)
			.then(response => (this.recipe = response.data));
	},
	methods: {
		addFavorite: function () {
			var favorites = localStorage.getItem('favorites');
			var favoritesArray = null;
			var recipeId = Number(this.id);
			if( favorites === null ) {
				favoritesArray = [recipeId];
				localStorage.setItem('favorites', JSON.stringify(favoritesArray));
			} else {
				favoritesArray = JSON.parse(favorites);
				favoritesArray.push(recipeId);
				localStorage.setItem('favorites', JSON.stringify(favoritesArray));
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
