import './Dashboard.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { SingleColorInPalette } from '../ColorInPalette/ColorInPalette'

export const Dashboard = () => {
	const palette = useAppSelector(state => state.paletteReducer.palette)

	return (
		<BorderedLayout className='dashboard'>
			{palette.map(colorInPalette => (
				<SingleColorInPalette
					key={colorInPalette.id}
					colorInPalette={colorInPalette}
				/>
			))}
		</BorderedLayout>
	)
}
