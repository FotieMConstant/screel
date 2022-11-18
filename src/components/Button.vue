<template>
	<div class="flex flex-row justify-center content-center p-20">
		<button
			class="w-40 h-10 rounded-lg bg-primary text-textPrimary font-bold text-sm hover:bg-secondary"
		>
			{{ buttonText }}
		</button>
	</div>
</template>

<script>
export default {
	name: Button,
	props: {
		buttonText: String,
	},
};
</script>
