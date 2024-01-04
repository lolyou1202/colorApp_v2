import './Dashboard.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { ColorInDashboard } from '../ColorInDashboard/ColorInDashboard'
import { ISwapColors } from '../../../types'
import { lockColor, swapColors } from '../../../redux/slices/paletteSlice'

export const Dashboard = () => {
	const palette = useAppSelector(state => state.paletteReducer.palette)

	const dispatch = useAppDispatch()

	const onClickArrows = (swapColorsArgs: ISwapColors) => {
		dispatch(swapColors(swapColorsArgs))
	}
	const onClickLock = (positionIndex: number) => {
		dispatch(lockColor({ positionIndex: positionIndex }))
	}
	const onClickCopy = (HEX: string) => {
		navigator.clipboard.writeText(HEX)
		setAlertState({ open: true, text: 'Сolor copied to the clipboard' })
	}

	return (
		<BorderedLayout className='dashboard'>
			{palette.map((colorInPalette, index) => (
				<ColorInDashboard
					key={index}
					colorInDashboard={colorInPalette}
					onClickArrows={onClickArrows}
					onClickLock={onClickLock}
				/>
			))}
		</BorderedLayout>
	)
}
