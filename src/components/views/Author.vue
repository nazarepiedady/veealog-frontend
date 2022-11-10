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
	import gql from 'graphql-tag'
	import formatUserName from '@/utils'
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
				return formatUserName(...this.author.user)
			}
		},
		async created() {
			const user = await this.$apollo.query({
				query: gql`query($username: String!) {
					authorByUsername(username: $username) {
						website
						bio
						user {
							firstName
							lastName
							username
						}
						postSet {
							title
							subtitle
							publishDate
							published
							metaDescription
							slug
							tags {
								name
							}
						}
					}
				}`,
				variables: {
					username: this.$route.params.username,
				},
			})
			this.author = user.data.authorByUsername
		}
	}
</script>