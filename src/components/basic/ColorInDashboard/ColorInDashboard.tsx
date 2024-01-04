import { FC, useState } from 'react'
import './ColorInDashboard.style.scss'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { Copy } from '../../icons/Copy'
import { LockOpen } from '../../icons/LockOpen'
import { Import } from '../../icons/Import'
import { Heart } from '../../icons/Heart'
import { Cross } from '../../icons/Cross'
import { IColor, ISwapColors } from '../../../types'
import { ArrowsSwap } from '../../ui/ArrowsSwap/ArrowsSwap'
import { LockClose } from '../../icons/LockClose'

interface IColorInDashboard {
	colorInDashboard: IColor
	onClickArrows: (swapColorsArgs: ISwapColors) => void
	onClickLock: (positionIndex: number) => void
}

export const ColorInDashboard: FC<IColorInDashboard> = ({
	colorInDashboard,
	onClickArrows,
	onClickLock,
}) => {
	const [visible, setVisible] = useState(false)

	return (
		<div
			className='colorInDashboard'
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			style={{ backgroundColor: `#${colorInDashboard.HEX}` }}
		>
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
			{colorInDashboard.lock! ? (
				<ButtonInColor
					type='withIcon'
					icon={
						<LockClose
							size={32}
							stroke={colorInDashboard.variant.contrastHEX}
							strokeWidth={3}
						/>
					}
					onClick={() =>
						onClickLock(colorInDashboard.position!.positionIndex)
					}
					colorVariant={colorInDashboard.variant}
					isVisible={true}
				/>
			) : (
				<ButtonInColor
					type='withIcon'
					icon={
						<LockOpen
							size={32}
							stroke={colorInDashboard.variant.contrastHEX}
							strokeWidth={3}
						/>
					}
					onClick={() =>
						onClickLock(colorInDashboard.position!.positionIndex)
					}
					colorVariant={colorInDashboard.variant}
					isVisible={visible}
				/>
			)}
			<ButtonInColor
				type='withText'
				text={colorInDashboard.HEX}
				colorVariant={colorInDashboard.variant}
				isVisible
			/>
			<ArrowsSwap
				colorInDashboard={colorInDashboard}
				visible={visible}
				onClickArrows={onClickArrows}
			/>
		</div>
	)
}
