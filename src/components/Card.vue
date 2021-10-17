<template>
	<div
		:class="`mdc-card ${blok.outlined ? 'mdc-card--outlined' : ''}`"
		:style="blok.style"
	>
		<component
			v-for="blok in blok.media"
			:key="blok._uid"
			:is="blok.component"
			:blok="blok"
		/>
		<div class="mdc-card-wrapper__text-section">
			<component
				v-for="blok in blok.content"
				:key="blok._uid"
				:is="blok.component"
				:blok="blok"
			/>
		</div>
		<div class="mdc-card__actions">
			<component
				v-for="blok in blok.content"
				:key="blok._uid"
				:is="blok.actions"
				:blok="blok"
			/>
		</div>
	</div>
</template>

<script>
import { Button } from "./Button.vue";
export default {
	props: ["blok"],
	components: { Button },
};
</script>