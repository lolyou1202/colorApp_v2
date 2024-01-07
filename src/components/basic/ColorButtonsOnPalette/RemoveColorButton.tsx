import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { Cross } from '../../icons/Cross'
import { FC } from 'react'
import { IColor } from '../../../types'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'

interface Props {
	colorInDashboard: IColor
	positionIndex: number
	visible: boolean
	onClickRemove: (positionIndex: number) => void
}

export const RemoveColorButton: FC<Props> = ({
	colorInDashboard,
	positionIndex,
	visible,
	onClickRemove,
}) => {
	const palette = useAppSelector(store => store.paletteReducer.palette)
	return (
		palette.length > 2 && (
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
		)
	)
}
