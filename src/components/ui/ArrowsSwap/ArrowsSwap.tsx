import { FC } from 'react'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { ArrowLeft } from '../../icons/ArrowLeft'
import { IColor, IPosition, ISwapColors } from '../../../types'
import { ArrowRight } from '../../icons/ArrowRight'

interface Props {
	colorInDashboard: IColor
	positionInList: IPosition
	visible: boolean
	onClickArrows: (swapColorsArgs: ISwapColors) => void
}

export const ArrowsSwap: FC<Props> = ({
	colorInDashboard,
	positionInList,
	visible,
	onClickArrows,
}) => {
	const { positionIndex, positionType } = positionInList
	return (
		<div className='colorInDashboard-arrows'>
			{['last', 'between'].includes(positionType) && (
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
							colorPosition: positionIndex,
						})
					}
					colorVariant={colorInDashboard.variant}
					isVisible={visible}
				/>
			)}
			{['first', 'between'].includes(positionType) && (
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
							colorPosition: positionIndex,
						})
					}
					colorVariant={colorInDashboard.variant}
					isVisible={visible}
				/>
			)}
		</div>
	)
}
