import { FC } from 'react'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { ArrowLeft } from '../../icons/ArrowLeft'
import { IColor, ISwapColors } from '../../../types'
import { ArrowRight } from '../../icons/ArrowRight'

interface Props {
	colorInDashboard: IColor
	onClickArrows: (swapColorsArgs: ISwapColors) => void
	visible: boolean
}

export const ArrowsSwap: FC<Props> = ({
	colorInDashboard,
	onClickArrows,
	visible,
}) => {
	return (
		<div className='colorInDashboard-arrows'>
			{['last', 'between'].includes(
				colorInDashboard.position!.positionType
			) && (
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
							colorPosition:
								colorInDashboard.position!.positionIndex,
						})
					}
					colorVariant={colorInDashboard.variant}
					isVisible={visible}
				/>
			)}
			{['first', 'between'].includes(
				colorInDashboard.position!.positionType
			) && (
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
							colorPosition:
								colorInDashboard.position!.positionIndex,
						})
					}
					colorVariant={colorInDashboard.variant}
					isVisible={visible}
				/>
			)}
		</div>
	)
}
