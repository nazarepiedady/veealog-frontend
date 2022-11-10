export function formatUserName(firstName, lastName, userName) {
	if (firstName && lastName) return `${firstName} ${lastName}`
	return `${userName}`
}