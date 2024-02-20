import { PickerBlock } from "../PickerBlock/PickerBlock"

export const Similar = () => {
	const similarList = [{name: '#FF11FF';
    description: string;
    color: string;
    similar: string;}]
	return (
		<PickerBlock
			classNameBlock='similar__block'
			title='Similar colors'
			description='View the most similar matches of this color with shades from the library.'
		>
			<div className='similar__list'>

			</div>
		</PickerBlock>
	)
}
