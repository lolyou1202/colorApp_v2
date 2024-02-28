import './CustomPopoverMenu.style.scss'
import classNames from 'classnames'
import Popover, { PopoverProps } from '@mui/material/Popover'
import Divider from '@mui/material/Divider'
import { FC } from 'react'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { IColorVariant, MenuListType } from '../../../types'

interface Props extends PopoverProps {
	menuList: MenuListType
	handlePopoverClose: () => void
	className?: string
}

export const CustomPopoverMenu: FC<Props> = ({
	id,
	open,
	anchorEl,
	anchorOrigin,
	transformOrigin,
	handlePopoverClose,
	menuList,
	className = '',
	...rest
}) => {
	const menuClassNames = classNames({
		customMenu: true,
		[className]: true,
	})

	const { brightness }: IColorVariant = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	return (
		<Popover
			id={id}
			open={!!anchorEl}
			anchorEl={anchorEl}
			anchorOrigin={anchorOrigin}
			transformOrigin={transformOrigin}
			onClose={handlePopoverClose}
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
								borderColor: 'var(--primary-dark)',
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
								handlePopoverClose()
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
