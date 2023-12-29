import { FC } from 'react'
import { IColorInPalette } from '../../../redux/slices/paletteSlice'

interface ISingleColorInPalette {
	colorInPalette: IColorInPalette
}

export const SingleColorInPalette: FC<ISingleColorInPalette> = ({
	colorInPalette,
}) => {
	return (
		<div
			className='dashboard-SingleColor'
			style={{ backgroundColor: `#${colorInPalette.HEX}` }}>
			{colorInPalette.HEX}
		</div>
	)
}
