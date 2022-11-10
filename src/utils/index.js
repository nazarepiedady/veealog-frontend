export function formatUserName({ firstName, lastName, username }) {
	if (firstName && lastName) return `${firstName} ${lastName}`
	return `${username}`
}

export function formatDateToBeReadable(date) {
	let dateLanguage = 'en-US'
	let realDate = new Date(date)
	let dateStyle = { dateStyle: 'full' }
	return new Intl.DateTimeFormat(dateLanguage, dateStyle).format(realDate)
}