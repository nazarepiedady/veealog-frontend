<template>
	<div>
		<h2>Posts in #{{ $route.params.tag }}</h2>
		<PostList v-if="posts" :posts="posts" />
	</div>
</template>

<script>
	import PostList from '@/components/PostList'

	export default {
		name: 'PostsByTag',
		components: {
			PostList,
		},
		data() {
			return {
				posts: null,
			}
		},
	}
</script>