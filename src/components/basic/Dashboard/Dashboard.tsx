import './Dashboard.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { ColorInDashboard } from '../ColorInDashboard/ColorInDashboard'
import { ISwapColors } from '../../../types'
import { swapColors } from '../../../redux/slices/paletteSlice'

export const Dashboard = () => {
	const palette = useAppSelector(state => state.paletteReducer.palette)

	const dispatch = useAppDispatch()

	const onClickArrows = (swapColorsArgs: ISwapColors) => {
		dispatch(swapColors(swapColorsArgs))
	}

	return (
		<BorderedLayout className='dashboard'>
			{palette.map((colorInPalette, index) => (
				<ColorInDashboard
					key={index}
					position={index}
					colorInDashboard={colorInPalette}
					onClickArrows={onClickArrows}
				/>
			))}
		</BorderedLayout>
	)
}
