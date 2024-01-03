import { FC, useState } from 'react'
import './ColorInDashboard.style.scss'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { Copy } from '../../icons/Copy'
import { ArrowLeft } from '../../icons/ArrowLeft'
import { ArrowRight } from '../../icons/ArrowRight'
import { LockOpen } from '../../icons/LockOpen'
import { Import } from '../../icons/Import'
import { Heart } from '../../icons/Heart'
import { Cross } from '../../icons/Cross'
import { IColor, ISwapColors } from '../../../types/types'

interface IColorInDashboard {
	colorInDashboard: IColor
	onClickArrows: ({ colorPosition, direction }: ISwapColors) => void
}

export const ColorInDashboard: FC<IColorInDashboard> = ({
	colorInDashboard,
	onClickArrows,
}) => {
	const [visible, setVisible] = useState(false)

	return (
		<div
			className='colorInDashboard'
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			style={{ backgroundColor: `#${colorInDashboard.HEX}` }}>
			<ButtonInColor
				type='withIcon'
				icon={
					<Cross
						size={32}
						stroke={colorInDashboard.variant.contrastHEX}
						strokeWidth={3}
					/>
				}
				colorVariant={colorInDashboard.variant}
				isVisible={visible}
			/>
			<ButtonInColor
				type='withIcon'
				icon={
					<Heart
						size={32}
						stroke={colorInDashboard.variant.contrastHEX}
						strokeWidth={3}
					/>
				}
				colorVariant={colorInDashboard.variant}
				isVisible={visible}
			/>
			<ButtonInColor
				type='withIcon'
				icon={
					<Import
						size={32}
						stroke={colorInDashboard.variant.contrastHEX}
						strokeWidth={3}
					/>
				}
				colorVariant={colorInDashboard.variant}
				isVisible={visible}
			/>
			<ButtonInColor
				type='withIcon'
				icon={
					<Copy
						size={32}
						stroke={colorInDashboard.variant.contrastHEX}
						strokeWidth={3}
					/>
				}
				colorVariant={colorInDashboard.variant}
				isVisible={visible}
			/>
			<ButtonInColor
				type='withIcon'
				icon={
					<LockOpen
						size={32}
						stroke={colorInDashboard.variant.contrastHEX}
						strokeWidth={3}
					/>
				}
				colorVariant={colorInDashboard.variant}
				isVisible={visible}
			/>
			<ButtonInColor
				type='withText'
				text={colorInDashboard.HEX}
				colorVariant={colorInDashboard.variant}
				isVisible
			/>
			<div className='colorInDashboard-arrows'>
				<ButtonInColor
					type='withIcon'
					icon={
						<ArrowLeft
							size={32}
							stroke={colorInDashboard.variant.contrastHEX}
							strokeWidth={3}
						/>
					}
					onClick={() =>
						onClickArrows({
							direction: 'left',
							colorPosition: colorInDashboard.id!,
						})
					}
					colorVariant={colorInDashboard.variant}
					isVisible={visible}
				/>
				<ButtonInColor
					type='withIcon'
					icon={
						<ArrowRight
							size={32}
							stroke={colorInDashboard.variant.contrastHEX}
							strokeWidth={3}
						/>
					}
					onClick={() =>
						onClickArrows({
							direction: 'right',
							colorPosition: colorInDashboard.id!,
						})
					}
					colorVariant={colorInDashboard.variant}
					isVisible={visible}
				/>
			</div>
		</div>
	)
}
