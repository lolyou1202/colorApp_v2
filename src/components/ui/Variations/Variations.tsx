import './Variations.style.scss'
import { FC, useMemo } from 'react'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { VariationsItem } from './VariationsItem'
import chroma from 'chroma-js'

interface Props {
	colorState: string
}

export const Variations: FC<Props> = ({ colorState }) => {
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

	return (
		<PickerBlock
			classNameBlock='variations__block'
			title='Variations'
			description='View this color variations of shades, tints, tones and hues.'
		>
			<div className='variations__list'>
				<VariationsItem
					title='Shades'
					description='A shade is created by adding black to a base color, increasing its darkness. Shades appear more dramatic and richer.'
					listColors={listColorsShades}
				/>
				<VariationsItem
					title='Tints'
					description='A tint is created by adding white to a base color, increasing its lightness. Tints are likely to look pastel and less intense.'
					listColors={listColorsTints}
				/>
				<VariationsItem
					title='Tones'
					description='A tone is created by adding gray to a base color, increasing its lightness. Tones looks more sophisticated and complex than base colors.'
					listColors={listColorsTones}
				/>
				<VariationsItem
					title='Tones'
					description='A tone is created by adding gray to a base color, increasing its lightness. Tones looks more sophisticated and complex than base colors.'
					listColors={listColorsHues}
				/>
			</div>
		</PickerBlock>
	)
}
