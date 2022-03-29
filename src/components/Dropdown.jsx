import { sbEditable } from '@storyblok/storyblok-editable'
import Children from './Children'

export default function Dropdown({ blok }) {
	return (
		<details class="dropdown" {...sbEditable(blok)}>
			<summary>
				{blok.trigger.map((blok) => (
					<Children blok={blok} key={blok._uid} />
				))}
			</summary>
			{blok.content.length > 0 && (
				<div className="dropdown__content">
					{blok.content.map((blok) => (
						<Children blok={blok} key={blok._uid} />
					))}
				</div>
			)}
		</details>
	)
}
