<template>
	<router-link :to="`/author/${author.user.username}`">
		{{ displayName }}
	</router-link>
</template>

<script>
	import { formatUserName } from '@/utils'

	export default {
		name: 'AuthorLink',
		props: {
			author: {
				type: Object,
				required: true,
			},
		},
		computed: {
			displayName() {
				return formatUserName(...this.author.user)
			}
		}
	}
</script>

