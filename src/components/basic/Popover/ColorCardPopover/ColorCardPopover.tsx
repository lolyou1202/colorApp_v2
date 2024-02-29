import { FC } from 'react'
import { CustomPopoverMenu } from '../../../ui/CustomMenu/CustomPopoverMenu'
import { Eye } from '../../../icons/Eye'
import { IColorVariant, MenuListType } from '../../../../types'
import { viewAlert } from '../../../../redux/slices/alertSlice'
import { useAppDispatch } from '../../../../redux/hooks/useAppRedux'
import { useNavigate } from 'react-router-dom'
import { openScreenMode } from '../../../../redux/slices/screenModeSlice'
import { Drop } from '../../../icons/Drop'
import { Hyperlink } from '../../../icons/Hyperlink'
import { Expand } from '../../../icons/Expand'
import { Image } from '../../../icons/Image'
import { useColorVariant } from '../../../../hooks/useColorVariant'

interface Props {
	color: string
	anchorEl: HTMLElement | null
	handlePopoverClose: () => void
	className?: string
}

export const ColorCardPopover: FC<Props> = ({
	color,
	anchorEl,
	handlePopoverClose,
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

	const { contrastColor } = useColorVariant({ colorToken: 'primaryDark' })

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
			id='colorCard-popover'
			open={!!anchorEl}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 216,
				horizontal: 'right',
			}}
			handlePopoverClose={handlePopoverClose}
			menuList={menuList}
			className={className}
		/>
	)
}
