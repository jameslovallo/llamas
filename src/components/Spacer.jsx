import { sbEditable } from '@storyblok/storyblok-editable'

export default function Spacer({ blok }) {
	return (
		<div
			className="spacer"
			style={{
				height: blok.height + 'px',
			}}
			{...sbEditable(blok)}
		/>
	)
}
