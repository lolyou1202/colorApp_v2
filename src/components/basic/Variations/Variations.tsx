import './Variations.style.scss'
import chroma from 'chroma-js'
import { useMemo } from 'react'
import { PickerBlock } from '../../ui/PickerBlock/PickerBlock'
import { VariationsItem } from './VariationsItem'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { colorVariations } from '../../../constants/colorVariations'

export const Variations = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	).toUpperCase()

	const listColorsShades = useMemo(
		() =>
			chroma
				.scale([colorState, '000000'])
				.colors(15)
				.map((color, index) => ({
					color: color.toUpperCase(),
					current: index === 0 ? true : false,
				})),
		[colorState]
	)
	const listColorsTints = useMemo(
		() =>
			chroma
				.scale([colorState, 'FFFFFF'])
				.colors(15)
				.map((color, index) => ({
					color: color.toUpperCase(),
					current: index === 0 ? true : false,
				})),
		[colorState]
	)
	const listColorsTones = useMemo(
		() =>
			chroma
				.scale([colorState, '808080'])
				.colors(15)
				.map((color, index) => ({
					color: color.toUpperCase(),
					current: index === 0 ? true : false,
				})),
		[colorState]
	)
	const listColorsHues = useMemo(() => {
		const currentColor = chroma(colorState)
		const currentColorHue = Math.round(currentColor.get('hsv.h'))
		const firstColor = chroma(currentColor)
			.set('hsv.h', currentColorHue - 75)
			.hex()
		const lastColor = chroma(currentColor)
			.set('hsv.h', currentColorHue + 75)
			.hex()
		const firstHalfList = chroma
			.scale([firstColor, currentColor])
			.colors(8)
			.map(color => ({
				color: color.toUpperCase(),
				current: false,
			}))
		firstHalfList.pop()
		const secondHalfList = chroma
			.scale([currentColor, lastColor])
			.colors(8)
			.map(color => ({
				color: color.toUpperCase(),
				current: false,
			}))
		secondHalfList.shift()

		return [
			...firstHalfList,
			{ color: currentColor.hex(), current: true },
			...secondHalfList,
		]
	}, [colorState])

	const listColors = {
		shades: listColorsShades,
		tints: listColorsTints,
		tones: listColorsTones,
		hues: listColorsHues,
	}

	return (
		<PickerBlock
			classNameBlock='variations__block'
			title='Variations'
			description='View this color variations of shades, tints, tones and hues.'
		>
			<div className='variations__list'>
				{Object.keys(listColors).map(key => {
					const typedKey = key as keyof typeof listColors
					return (
						<VariationsItem
							key={key}
							title={colorVariations[typedKey].title}
							description={colorVariations[typedKey].description}
							listColors={listColors[typedKey]}
						/>
					)
				})}
			</div>
		</PickerBlock>
	)
}
