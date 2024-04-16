import { FC } from 'react'
import { colorTokens } from '../../../constants/colorTokens'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { useNavigate } from 'react-router-dom'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { openScreenMode } from '../../../redux/slices/screenModeSlice'
import { CustomMenuPopover } from '../Popover/CustomMenuPopover'
import { Eye } from '../../icons/Eye'
import { MenuListType } from '../../../types'
import { Drop } from '../../icons/Drop'
import { Hyperlink } from '../../icons/Hyperlink'
import { Expand } from '../../icons/Expand'
import { Share } from '../../icons/Share'

const contrastColor = colorTokens.primaryDark

interface Props {
	color: string
	anchorMorePopover: HTMLElement | null
	handleClosePopover: () => void
	handleOpenQuickViewModal: () => void
	handleOpenExportModal: () => void
	className?: string
}

export const ColorCardMorePopover: FC<Props> = ({
	color,
	anchorMorePopover,
	handleClosePopover,
	handleOpenQuickViewModal,
	handleOpenExportModal,
	className,
}) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onClickOpen = () => {
		navigate(`/picker/${color.replace(/[^0-9A-Z]/g, '')}`)
	}
	const onClickCopy = () => {
		navigator.clipboard.writeText(
			`${window.location.origin}/picker/${color.replace(
				/[^0-9A-Z]/g,
				''
			)}`
		)
		dispatch(viewAlert({ alertText: 'URL copied to the clipboard' }))
	}
	const onClickQuickView = () => {
		handleOpenQuickViewModal()
	}
	const onClickViewFull = () => {
		dispatch(openScreenMode({ content: [color] }))
	}
	const onClickExport = () => {
		handleOpenExportModal()
	}

	const menuList: MenuListType[] = [
		{
			name: 'Open in the Color Picker',
			icon: <Drop stroke={contrastColor} />,
			onClick: onClickOpen,
		},
		{
			name: 'Copy URL',
			icon: <Hyperlink stroke={contrastColor} />,
			onClick: onClickCopy,
		},
		'',
		{
			name: 'Quick view',
			icon: <Eye stroke={contrastColor} />,
			onClick: onClickQuickView,
		},
		{
			name: 'View fullscreen',
			icon: <Expand stroke={contrastColor} />,
			onClick: onClickViewFull,
		},
		'',
		{
			name: 'Export color',
			icon: <Share stroke={contrastColor} />,
			onClick: onClickExport,
		},
	]

	return (
		<CustomMenuPopover
			id='colorCardMore-popover'
			open={!!anchorMorePopover}
			anchorEl={anchorMorePopover}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: -36,
				horizontal: 'right',
			}}
			handleClosePopover={handleClosePopover}
			menuList={menuList}
			className={className}
		/>
	)
}
