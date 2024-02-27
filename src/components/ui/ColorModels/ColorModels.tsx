import './ColorModels.style.scss'
import Divider from '@mui/material/Divider'
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
					<div className='colorModels-section'>
						<ColorModelHalf
							colorModelsArr={colorModelsArr}
							onClickColorModel={onClickColorModel}
							arrHalf='first'
						/>
					</div>
					<Divider
						orientation='vertical'
						variant='fullWidth'
						sx={{
							borderWidth: '1px',
							borderColor: 'var(--primary-dark)',
							borderRadius: 'var(--borderRadius-short)',
						}}
						className='colorModels-divider'
						flexItem
					/>
					<div className='colorModels-section'>
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
