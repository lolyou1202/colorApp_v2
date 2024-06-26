import './CustomMenuPopover.style.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { Popover, PopoverProps } from '@mui/material'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MenuListType } from '../../../types/types'
import { Divider } from '@mui/material'
import { colorTokens } from '../../../constants/colorTokens'
import { useResize } from '../../../hooks/useResize'

interface Props extends PopoverProps {
	menuList: MenuListType[]
	handleClosePopover: () => void
	className?: string
}

export const CustomMenuPopover: FC<Props> = ({
	id,
	open,
	anchorEl,
	anchorOrigin,
	transformOrigin,
	handleClosePopover,
	menuList,
	className = '',
	...rest
}) => {
	const menuClassNames = classNames({
		customMenu: true,
		[className]: true,
	})

	const primaryDark = colorTokens.primaryDark
	const brightness = 'light'
	//const { width } = useResize()

	return (
		<Popover
			id={id}
			open={!!anchorEl}
			anchorEl={anchorEl}
			anchorOrigin={anchorOrigin}
			transformOrigin={transformOrigin}
			onClose={handleClosePopover}
			{...rest}
		>
			<BorderedLayout className={menuClassNames}>
				{menuList.map((menuItem, index) =>
					menuItem === '' ? (
						<Divider
							key={index}
							orientation='horizontal'
							variant='fullWidth'
							sx={{
								borderWidth: '1px',
								borderColor: primaryDark,
								borderRadius: 'var(--borderRadius-short)',
							}}
							flexItem
						/>
					) : (
						<DefaultHoveredButton
							key={index}
							className='customMenu__item'
							brightness={brightness}
							onClick={() => {
								menuItem.onClick()
								handleClosePopover()
							}}
						>
							{menuItem.icon}
							<p className='customMenu__item-name'>
								{menuItem.name}
							</p>
						</DefaultHoveredButton>
					)
				)}
			</BorderedLayout>
		</Popover>
	)
}
