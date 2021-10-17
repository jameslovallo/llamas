<template>
	<a
		:class="`mdc-button mdc-ripple-upgraded ${
			blok.type ? 'mdc-button--' + blok.type : ''
		}`"
	>
		<i
			v-if="blok.icon"
			v-html="blok.icon"
			aria-hidden="true"
			class="mdc-button__icon"
		/>
		<span class="mdc-button__label">{{ blok.label }}</span>
		<div class="mdc-button__ripple"></div>
	</a>
</template>

<script>
export default {
	name: "Button",
	props: ["blok"],
};
</script>