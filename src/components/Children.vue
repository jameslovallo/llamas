<template>
	<component
		v-for="blok in source"
		:key="blok._uid"
		:is="blok.component"
		:blok="blok"
	/>
</template>

<script>
import Button from "./Button.vue";
import Card from "./Card.vue";
export default { props: ["source"], components: { Button, Card } };
</script>
