export function formatUserName(firstName, lastName, userName) {
	if (firstName && lastName) return `${firstName} ${lastName}`
	return `${userName}`
}

export function formatDateToBeReadable(date) {
	let dateLanguage = 'en-US'
	let realDate = new Date(date)
	let dateStyle = { dateStyle: 'full' }
	return new Intl.DateTimeFormat(dateLanguage, dateStyle).format(realDate)
}