export default function responsive(obj) {
	return responsive = {
		'--xs': obj.xsmall,
		'--sm': obj.small || obj.small,
		'--md': obj.medium || obj.small || obj.xsmall,
		'--lg': obj.large || obj.medium || obj.small || obj.xsmall,
		'--xl': obj.xlarge || obj.large || obj.medium || obj.small || obj.xsmall,
	}
}