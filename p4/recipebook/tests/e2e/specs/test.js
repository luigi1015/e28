describe('Home Page', () => {
	it('Shows the recipe list', () => {
		cy.visit('/');
		cy.contains('Recipe List');
		cy.contains('a', 'Recipe 1');
		cy.contains('a', 'Recipe 2');
		cy.contains('a', 'Recipe 3');
		cy.contains('a', 'Recipe 4');
		cy.contains('a', 'Recipe 5');
	});
	it('Shows a link to the shopping list page', () => {
		cy.visit('/');
		cy.contains('a', 'Go to the Shopping List page');
	});
});

describe('Recipe Page', () => {
	it('Shows the recipe id', () => {
		cy.visit('/#/recipes/1');
		cy.contains('Recipe 1');
	});
	it('Shows the ingredients', () => {
		cy.visit('/#/recipes/1');
		cy.contains('Ingredients');
		cy.contains('li', 'Ingredient 1').contains('button', 'Add to Shoppping List');
		cy.contains('li', 'Ingredient 2').contains('button', 'Add to Shoppping List');
		cy.contains('li', 'Ingredient 3').contains('button', 'Add to Shoppping List');
		cy.contains('li', 'Ingredient 4').contains('button', 'Add to Shoppping List');
		cy.contains('li', 'Ingredient 5').contains('button', 'Add to Shoppping List');
	});
	it('Shows the instructions', () => {
		cy.visit('/#/recipes/1');
		cy.contains('Instructions');
		cy.contains('li', 'Instruction 1');
		cy.contains('li', 'Instruction 2');
		cy.contains('li', 'Instruction 3');
		cy.contains('li', 'Instruction 4');
		cy.contains('li', 'Instruction 5');
	});
	it('Shows the add to favorites button', () => {
		cy.visit('/#/recipes/1');
		cy.contains('button', 'Add to Favorites');
	});
	it('The add to favorites button favorites the recipe', () => {
		cy.visit('/#/recipes/1');
		cy.contains('button', 'Add to Favorites').click();
		cy.contains('Favorite!');
	});
	it('Shows the back to the homepage link', () => {
		cy.visit('/#/recipes/1');
		cy.contains('a', 'Back to the Homepage');
	});
	it('Shows the Go to the shopping list page link', () => {
		cy.visit('/#/recipes/1');
		cy.contains('a', 'Go to the Shopping List page');
	});
});

describe('Shopping List Page', () => {
	it('Shows 0 items on the shopping list page on first load', () => {
		cy.visit('/#/shoppinglist');
		cy.contains('Number of items: 0');
	});
	it('Shows an item on the shopping list when it is added', () => {
		cy.visit('/#/recipes/1');
		cy.contains('li', 'Ingredient 1').contains('button', 'Add to Shoppping List').click();
		cy.visit('/#/shoppinglist');
		cy.contains('Number of items: 1');
		cy.contains('li', 'Ingredient 1').contains('button', 'Delete from Shoppping List');
	});
	it('Removes an item from the shopping list when it is deleted', () => {
		cy.visit('/#/recipes/1');
		cy.contains('li', 'Ingredient 1').contains('button', 'Add to Shoppping List').click();
		cy.visit('/#/shoppinglist');
		cy.contains('li', 'Ingredient 1').contains('button', 'Delete from Shoppping List').click();
		cy.contains('Number of items: 0');
	});
	it('Shows the back to the homepage link', () => {
		cy.visit('/#/shoppinglist');
		cy.contains('a', 'Back to the Homepage');
	});
});
