import { FC } from 'react'
import './ColorInDashboard.style.scss'
import { IColorInPalette } from '../../../redux/slices/paletteSlice'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { Copy } from '../../icons/Copy'

interface IColorInDashboard {
	colorInDashboard: IColorInPalette
}

export const ColorInDashboard: FC<IColorInDashboard> = ({
	colorInDashboard,
}) => {
	return (
		<div
			className='colorInDashboard'
			style={{ backgroundColor: `#${colorInDashboard.HEX}` }}
		>
			<ButtonInColor
				type='withIcon'
				icon={
					<Copy
						size={32}
						stroke='var(--primary-dark)'
						strokeWidth={3}
					/>
				}
			/>
			<ButtonInColor type='withText' text='DB2C15' />
			{/*<div className='SingleColor-delete'></div>
			<div className='SingleColor-save'></div>
			<div className='SingleColor-import'></div>
			<div className='SingleColor-copy'></div>
			<div className='SingleColor-lock'></div>
			<div className='SingleColor-color'></div>
			<div className='SingleColor-arrows'></div>*/}
		</div>
	)
}
