import { FC } from 'react'
import { LockClose } from '../../icons/LockClose'
import { LockOpen } from '../../icons/LockOpen'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { IColor } from '../../../types'

interface Props {
	colorInDashboard: IColor
	positionIndex: number
	visible: boolean
	onClickLock: (positionIndex: number) => void
}

export const LockColorButton: FC<Props> = ({
	colorInDashboard,
	positionIndex,
	visible,
	onClickLock,
}) => {
	return colorInDashboard.lock! ? (
		<ButtonInColor
			type='withIcon'
			icon={
				<LockClose
					size={32}
					stroke={colorInDashboard.variant.contrastHEX}
					strokeWidth={3}
				/>
			}
			onClick={() => onClickLock(positionIndex)}
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
			onClick={() => onClickLock(positionIndex)}
			colorVariant={colorInDashboard.variant}
			isVisible={visible}
		/>
	)
}
