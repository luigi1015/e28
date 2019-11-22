# Project 3
+ By: Jeff Crone
+ Production URL: [http://p3.jeffcrone.net](http://p3.jeffcrone.net)


## Outline of features
I was using the features listed in the recipe book example concept listed on the P3 page at [https://hesweb.dev/e28/projects/3](https://hesweb.dev/e28/projects/3)
The main featured I implemented are:
* Querying a mock data server at [https://my-json-server.typicode.com/luigi1015/e28-recipebook-api](https://my-json-server.typicode.com/luigi1015/e28-recipebook-api)
* The homepage and the recipes route both show a list of recipes as clickable links.
* There's a route for recipes/<id> where <id> is the id of a recipe. This page shows a list of ingredients and instructions.
* The recipe page also has a button at the bottom that adds the recipe to a list of favorites using local storage.
* When a recipe is on the favorites list, "Favorites!" text shows up on the top of the recipe page.
* There's a button next to each ingredient on the recipe page which allows the user to add the ingredient to a shopping list in local storage.
* There's a shopping list page, at the route for /shoppinglist, that shows the shopping list in local storage.

## Outside resources
* A mock data server at [https://my-json-server.typicode.com/luigi1015/e28-recipebook-api](https://my-json-server.typicode.com/luigi1015/e28-recipebook-api)
