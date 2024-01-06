import { FC } from 'react'
import { ButtonInColor } from '../../ui/ButtonInColor/ButtonInColor'
import { IColorVariant } from '../../../types'

interface Props {
	HEX: string
	variant: IColorVariant
}

export const ColorPicker: FC<Props> = ({HEX, variant}) => {
	return (
		<ButtonInColor
			type='withText'
			text={HEX}
			colorVariant={variant}
			isVisible
		/>
	)
}
