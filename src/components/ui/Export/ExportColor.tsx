import { FC } from 'react'
import { colorTokens } from '../../../constants/colorTokens'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { ExportListType } from '../../../types'
import { Export } from './Export'
import { Css } from '../../icons/CSS'
import { Image } from '../../icons/Image'
import { Code } from '../../icons/Code'
import { Hyperlink } from '../../icons/Hyperlink'

const contrastColor = colorTokens.primaryDark

interface Props {
	color: string
	isOpenModal: boolean
	handleCloseModal: () => void
}

export const ExportColor: FC<Props> = ({
	color,
	isOpenModal,
	handleCloseModal,
}) => {
	const dispatch = useAppDispatch()

	const onClickExportUrl = () => {
		navigator.clipboard.writeText(
			`${window.location.origin}/picker/${color.replace(
				/[^0-9A-Z]/g,
				''
			)}`
		)
		dispatch(viewAlert({ alertText: 'URL copied to the clipboard' }))
	}
	const onClickExportCss = () => {}
	const onClickExportImage = () => {}
	const onClickExportCode = () => {}

	const exportList: ExportListType[] = [
		{
			name: 'URL',
			icon: (
				<Hyperlink stroke={contrastColor} size={40} strokeWidth={1.4} />
			),
			onClick: onClickExportUrl,
		},
		{
			name: 'CSS',
			icon: <Css stroke={contrastColor} size={40} strokeWidth={1.4} />,
			onClick: onClickExportCss,
		},
		{
			name: 'Image',
			icon: <Image stroke={contrastColor} size={40} strokeWidth={1.4} />,
			onClick: onClickExportImage,
		},
		{
			name: 'Code',
			icon: <Code stroke={contrastColor} size={40} strokeWidth={1.4} />,
			onClick: onClickExportCode,
		},
	]

	return (
		<Export
			name='Export color'
			isOpenModal={isOpenModal}
			exportList={exportList}
			handleCloseModal={handleCloseModal}
		/>
	)
}
