import { FC, useState } from 'react'
import './ColorInDashboard.style.scss'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { Copy } from '../../icons/Copy'
import { Import } from '../../icons/Import'
import { Heart } from '../../icons/Heart'
import { Cross } from '../../icons/Cross'
import { IColor, IPosition, ISwapColors } from '../../../types'
import { ArrowsSwap } from '../../ui/ArrowsSwap/ArrowsSwap'
import { LockColorButton } from '../ColorButtonsOnPalette/LockColorButton'
import { HexColorPicker } from 'react-colorful'

interface IColorInDashboard {
	colorInDashboard: IColor
	positionInList: IPosition
	onClickArrows: (swapColorsArgs: ISwapColors) => void
	onClickLock: (positionIndex: number) => void
	onClickSave: (positionIndex: number) => void
	onClickRemove: (positionIndex: number) => void
	onClickCopy: (HEX: string) => void
	onClickImport: (HEX: string) => void
}

export const ColorInDashboard: FC<IColorInDashboard> = ({
	colorInDashboard,
	positionInList,
	onClickArrows,
	onClickLock,
	onClickCopy,
	onClickSave,
	onClickImport,
	onClickRemove,
}) => {
	const [visible, setVisible] = useState(false)

	const { positionIndex } = positionInList

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
				onClick={() => onClickRemove(positionIndex)}
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
						fill={
							colorInDashboard.inCollection
								? colorInDashboard.variant.contrastHEX
								: 'none'
						}
					/>
				}
				onClick={() => onClickSave(positionIndex)}
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
				onClick={() => onClickImport(colorInDashboard.HEX)}
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
				onClick={() => onClickCopy(colorInDashboard.HEX)}
				colorVariant={colorInDashboard.variant}
				isVisible={visible}
			/>
			<LockColorButton
				colorInDashboard={colorInDashboard}
				positionIndex={positionIndex}
				visible={visible}
				onClickLock={onClickLock}
			/>
			<ButtonInColor
				type='withText'
				text={colorInDashboard.HEX}
				colorVariant={colorInDashboard.variant}
				isVisible
			/>
			<ArrowsSwap
				colorInDashboard={colorInDashboard}
				positionInList={positionInList}
				visible={visible}
				onClickArrows={onClickArrows}
			/>
		</div>
	)
}
