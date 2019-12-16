import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Recipes from '@/components/Recipes.vue'

describe('Recipes.vue', () => {
	it('renders "Recipe List" header', () => {
		const wrapper = shallowMount(Recipes, {
			propsData: {}
		});
		expect(wrapper.text()).to.include('Recipe List');
	});
});
