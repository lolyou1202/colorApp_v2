import { FC, useState } from 'react'
import classNames from 'classnames'
import { colorTokens } from '../../../constants/colorTokens'
import { IColorVariant } from '../../../types'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { Check } from '../../icons/Check'

const primaryDarkTransparent50 = colorTokens.primaryDarkTransparent50
const primaryWhiteTransparent50 = colorTokens.primaryWhiteTransparent50

interface Props {
	colorModel: [string, string]
	variant: IColorVariant
}

export const QuickViewSingleColorModel: FC<Props> = ({
	colorModel,
	variant,
}) => {
	const [isChecked, setChecked] = useState(false)

	const dispatch = useAppDispatch()

	const handlerMouseLeave = () => {
		setChecked(false)
	}
	const handlerClickModel = (value: string) => {
		navigator.clipboard.writeText(value)
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
		setChecked(true)
	}

	const quickViewSingleColorModel = classNames({
		'quickView__colorModels-single': true,
		checked: isChecked,
	})

	const { contrastColor, brightness } = variant
	const contrastTransparentColor =
		variant.brightness === 'light'
			? primaryDarkTransparent50
			: primaryWhiteTransparent50

	return (
		<DefaultHoveredButton
			key={colorModel[0]}
			className={quickViewSingleColorModel}
			brightness={brightness}
			onMouseLeave={() => handlerMouseLeave()}
			onClick={() => handlerClickModel(colorModel[1])}
		>
			<div className='quickView__colorModels-single-description'>
				<span
					className='quickView__colorModels-single-modelName'
					style={{
						color: contrastTransparentColor,
					}}
				>
					{colorModel[0]}
				</span>
				<p
					className='quickView__colorModels-single-modelValue'
					style={{ color: contrastColor }}
				>
					{colorModel[1]}
				</p>
			</div>
			<div className='quickView__colorModels-single-copy'>
				<p
					style={{
						color: contrastTransparentColor,
					}}
				>
					Copy
				</p>
				<Check
					className='quickView__colorModels-single-check'
					stroke={contrastTransparentColor}
					size={24}
				/>
			</div>
		</DefaultHoveredButton>
	)
}
