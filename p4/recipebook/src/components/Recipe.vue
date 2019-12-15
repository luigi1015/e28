<template>
	<div v-if='recipe'>
		Recipe {{ recipe.id }}
		<br>
		<div v-if='favorite'>
			Favorite!
			<br>
		</div>
		Ingredients:
		<br>
		<ul>
			<li v-for='(item) in recipe.ingredients' v-bind:key='item.id'>{{ item.name }} - <button v-on:click="addShopppingList(item.name)">Add to Shoppping List</button></li>
		</ul>
		<br>
		Instructions:
		<br>
		<ol>
			<li v-for='(item) in recipe.instructions' v-bind:key='item.id'>{{ item.name }}</li>
		</ol>
		<button v-on:click="addFavorite">Add to Favorites</button>
		<br>
		<router-link :to='{ name:"home" }'>Back to the Homepage</router-link>
		<br>
		<router-link :to='{ name:"shoppinglist" }'>Go to the Shopping List page</router-link>
	</div>
</template>

<script>
const axios = require('axios');

export default {
	name: 'Recipe',
	props: {
		id: String
	},
	data: function () {
		return {
			recipe: null,
			favorite: false
		}
	},
	mounted() {
		this.recipe = axios
			.get('https://my-json-server.typicode.com/luigi1015/e28-recipebook-api/recipes/' + this.id)
			.then(response => (this.recipe = response.data));

		//Get whether this is a favorite from local storage:
		const favoritesListLocalStorage = localStorage.getItem('favorites');
		if( favoritesListLocalStorage !== null ) {
			const favoritesList = JSON.parse(favoritesListLocalStorage);
			const recipeId = Number(this.id);
			this.favorite = favoritesList.includes(recipeId);
		}
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
			this.favorite = true;
		},
		addShopppingList: function (name) {
			var shopppingList = localStorage.getItem('shopppingList');
			var shopppingListArray = null;
			if( shopppingList === null ) {
				shopppingListArray = [name];
				localStorage.setItem('shopppingList', JSON.stringify(shopppingListArray));
			} else {
				shopppingListArray = JSON.parse(shopppingList);
				shopppingListArray.push(name);
				localStorage.setItem('shopppingList', JSON.stringify(shopppingListArray));
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
