<template>
	<div>
		Recipe List
		<br>
		<ul v-if='recipes'>
			<li v-for='(item) in recipes' v-bind:key='item.id'>
				<router-link :to='{ name:"recipe", params: { id: item.id.toString() }}'>{{ item.name }}</router-link>
			</li>
		</ul>
		<br>
		<router-link :to='{ name:"shoppinglist" }'>Go to the Shopping List page</router-link>
	</div>
</template>

<script>
const axios = require('axios');

export default {
	name: 'Recipes',
	props: {
	},
	data: function () {
		return {
			recipes: null
		}
	},
	mounted() {
		this.recipes = axios
			.get('https://my-json-server.typicode.com/luigi1015/e28-recipebook-api/recipes')
			.then(response => (this.recipes = response.data));
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
