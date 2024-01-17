import { FC, useState, MouseEvent } from 'react'
import './HeaderNavigation.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import Popover from '@mui/material/Popover'
import { HeaderNavigationLink } from './HeaderNavigationLink'

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

	return (
		<div className='header'>
			<nav className='header__navigation'>
				<BorderedLayout
					className='header__navigation-pointButton'
					onClick={handlePopoverClick}>
					<p className='header__navigation-pointButton-text'>Tools</p>
				</BorderedLayout>
				<Popover
					id='mouse-over-popover'
					sx={{
						pointerEvents: 'none',
					}}
					open={!!anchorEl}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 60,
						horizontal: 'left',
					}}
					onClose={handlePopoverClose}>
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
