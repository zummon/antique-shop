export function numerize(value, custom){
	value = Number(value)
	return value.toLocaleString(undefined, {
		useGrouping: true,
		...custom,
	})
}