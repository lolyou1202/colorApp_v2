import { FC } from 'react'
import { CustomPopoverMenu } from '../../ui/CustomMenu/CustomPopoverMenu'
import { MenuListType } from '../../../types'
import { Drop } from '../../icons/Drop'
import { Hyperlink } from '../../icons/Hyperlink'
import { Image } from '../../icons/Image'
import { Expand } from '../../icons/Expand'
import { colorTokens } from '../../../constants/colorTokens'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { useNavigate } from 'react-router-dom'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { openScreenMode } from '../../../redux/slices/screenModeSlice'

interface Props {
	color: string
	anchorMorePopover: HTMLElement | null
	handleClosePopover: () => void
	className?: string
}

export const ColorQuickViewPopover: FC<Props> = ({
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
		{
			name: 'Export as image',
			icon: <Image stroke={contrastColor} />,
			onClick: onClickExport,
		},
		'',
		{
			name: 'View fullscreen',
			icon: <Expand stroke={contrastColor} />,
			onClick: onClickViewFull,
		},
	]

	return (
		<CustomPopoverMenu
			id='colorQuick-popover'
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
