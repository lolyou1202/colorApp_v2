import { FC } from 'react'
import { CustomPopoverMenu } from '../../ui/CustomMenu/CustomPopoverMenu'
import { Eye } from '../../icons/Eye'
import { MenuListType } from '../../../types'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { useNavigate } from 'react-router-dom'
import { openScreenMode } from '../../../redux/slices/screenModeSlice'
import { Drop } from '../../icons/Drop'
import { Hyperlink } from '../../icons/Hyperlink'
import { Expand } from '../../icons/Expand'
import { Image } from '../../icons/Image'
import { colorTokens } from '../../../constants/colorTokens'

interface Props {
	color: string
	anchorMorePopover: HTMLElement | null
	handleClosePopover: () => void
	className?: string
}

export const ColorCardMorePopover: FC<Props> = ({
	color,
	anchorMorePopover,
	handleClosePopover,
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
	const onClickQuickView = () => {}
	const onClickViewFull = () => {
		dispatch(openScreenMode({ content: [color] }))
	}
	const onClickExport = () => {}

	const contrastColor = colorTokens.primaryDark

	const menuList: MenuListType = [
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
			name: 'Export as image',
			icon: <Image stroke={contrastColor} />,
			onClick: onClickExport,
		},
	]

	return (
		<CustomPopoverMenu
			id='colorCardMore-popover'
			open={!!anchorMorePopover}
			anchorEl={anchorMorePopover}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 216,
				horizontal: 'right',
			}}
			handleClosePopover={handleClosePopover}
			menuList={menuList}
			className={className}
		/>
	)
}
