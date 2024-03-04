import './HeaderNavigation.style.scss'
import { FC, useState, MouseEvent } from 'react'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { HeaderNavigationLink } from './HeaderNavigationLink'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { Popover } from '@mui/material'
import { Burger } from '../../icons/Burger'
import { colorTokens } from '../../../constants/colorTokens'

interface Props {
	pageName: string
}

export const HeaderNavigation: FC<Props> = ({ pageName }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

	const handlePopoverClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handlePopoverClose = () => {
		setAnchorEl(null)
	}

	const contrastColor = colorTokens.primaryDark
	const brightness = 'light'

	return (
		<div className='header'>
			<nav className='header__navigation'>
				<DefaultHoveredButton
					className='header__navigation-pointButton'
					brightness={brightness}
					onClick={handlePopoverClick}
				>
					<Burger stroke={contrastColor} size={32} strokeWidth={3} />
				</DefaultHoveredButton>
				<Popover
					id='headerNavigation-popover'
					open={!!anchorEl}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 60,
						horizontal: 'left',
					}}
					onClose={handlePopoverClose}
				>
					<BorderedLayout className='header__menuPopover'>
						<ul className='header__menuPopover-pages firstPages'>
							<HeaderNavigationLink name='Color picker' link='' />
							<HeaderNavigationLink
								name='Palette generator'
								link=''
							/>
							<HeaderNavigationLink
								name='Palette visualizer'
								link=''
							/>
						</ul>
						<div className='divider vertical' />
						<ul className='header__menuPopover-pages secondPages'>
							<HeaderNavigationLink
								name='List of colors'
								link=''
							/>
							<HeaderNavigationLink
								name='Browse color schemes'
								link=''
							/>
						</ul>
					</BorderedLayout>
				</Popover>
			</nav>
			<h1 className='header-page'>{pageName}</h1>
		</div>
	)
}
