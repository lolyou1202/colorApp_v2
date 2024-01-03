import './Dashboard.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { ColorInDashboard } from '../ColorInPalette/ColorInDashboard'
import { ISwapColors } from '../../../types/types'
import { swapColors } from '../../../redux/slices/paletteSlice'

export const Dashboard = () => {
	const palette = useAppSelector(state => state.paletteReducer.palette)

	const dispatch = useAppDispatch()

	const onClickArrows = (swapColorsArgs: ISwapColors) => {
		dispatch(swapColors(swapColorsArgs))
	}

	return (
		<BorderedLayout className='dashboard'>
			{palette.map(colorInPalette => (
				<ColorInDashboard
					key={colorInPalette.id}
					colorInDashboard={colorInPalette}
					onClickArrows={onClickArrows}
				/>
			))}
		</BorderedLayout>
	)
}
