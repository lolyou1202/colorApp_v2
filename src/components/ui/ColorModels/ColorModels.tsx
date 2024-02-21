import './ColorModels.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { useColorModels } from '../../../hooks/useColorModels'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { ColorModelHalf } from './ColorModelHalf'

export const ColorModels = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	).toUpperCase()

	const dispatch = useAppDispatch()

	const colorModelsArr = useColorModels(colorState)

	const onClickColorModel = (value: string) => {
		navigator.clipboard.writeText(value)
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
	}

	return (
		<PickerBlock
			classNameBlock='colorModels__block'
			title='Conversion'
			description='Convert the color to different color models.'
		>
			<BorderedLayout className='colorModels'>
				<div className='colorModels-list'>
					<div>
						<ColorModelHalf
							colorModelsArr={colorModelsArr}
							onClickColorModel={onClickColorModel}
							arrHalf='first'
						/>
					</div>
					<div className='divider vertical' />
					<div>
						<ColorModelHalf
							colorModelsArr={colorModelsArr}
							onClickColorModel={onClickColorModel}
							arrHalf='last'
						/>
					</div>
				</div>
			</BorderedLayout>
		</PickerBlock>
	)
}
