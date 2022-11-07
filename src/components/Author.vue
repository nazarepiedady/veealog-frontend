<template>
	<div v-if="author">
		<h2>{{ displayName }}</h2>
		<a :href="author.website" rel="noopener noreferrer">Website</a>
		<p>{{ author.bio }}</p>
		<h3>Posts by {{ displayName }}</h3>
		<PostList :showAuthor="false" :posts="author.postSet" />
	</div>
</template>

<script>
	import PostList from '@/components/PostList'

	export default {
		name: 'Author',
		components: {
			PostList,
		},
		data() {
			return {
				author: null,
			}
		},
		computed: {
			displayName() {
				return (
					this.author.user.firstName &&
					this.author.user.lastName &&
					`${this.author.user.firstName} ${this.author.user.lastName}`
				) || `${this.author.user.username}`
			}
		}
	}
</script>