import './Dashboard.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { ColorInDashboard } from '../ColorInPalette/ColorInDashboard'

export const Dashboard = () => {
	const palette = useAppSelector(state => state.paletteReducer.palette)

	return (
		<BorderedLayout className='dashboard'>
			{palette.map(colorInPalette => (
				<ColorInDashboard
					key={colorInPalette.id}
					colorInDashboard={colorInPalette}
				/>
			))}
		</BorderedLayout>
	)
}
