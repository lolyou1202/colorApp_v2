import { FC } from 'react'
import './Dashboard.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { ColorInDashboard } from '../ColorInDashboard/ColorInDashboard'
import { IColor, ISwapColors } from '../../../types'
import { usePosition } from '../../../hooks/usePosition'

interface Props {
	palette: IColor[]
	onClickArrows: (swapColorsArgs: ISwapColors) => void
	onClickLock: (positionIndex: number) => void
	onClickSave: (positionIndex: number) => void
	onClickRemove: (positionIndex: number) => void
	onClickCopy: (HEX: string) => void
	onClickImport: (HEX: string) => void
}

export const Dashboard: FC<Props> = ({
	palette,
	onClickArrows,
	onClickLock,
	onClickCopy,
	onClickSave,
	onClickRemove,
	onClickImport,
}) => {
	return (
		<BorderedLayout className='dashboard'>
			{palette.map((colorInPalette, index) => (
				<ColorInDashboard
					key={index}
					positionInList={usePosition(index, palette.length)}
					colorInDashboard={colorInPalette}
					onClickArrows={onClickArrows}
					onClickLock={onClickLock}
					onClickCopy={onClickCopy}
					onClickSave={onClickSave}
					onClickRemove={onClickRemove}
					onClickImport={onClickImport}
				/>
			))}
		</BorderedLayout>
	)
}
