<template>
  <div id="app" v-cloak>
    <RockPaperScissors msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import RockPaperScissors from './components/RockPaperScissors.vue'

export default {
  name: 'app',
  components: {
    RockPaperScissors
  }
}
</script>

<style>
	[v-cloak] {
		display: none
	}
</style>
