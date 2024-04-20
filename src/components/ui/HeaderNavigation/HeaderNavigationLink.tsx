import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
	name: string
	link?: string
}

export const HeaderNavigationLink: FC<Props> = ({ name, link = '#' }) => {
	return (
		<Link to={link}>
			<li className='menuPopover__pageLink'>
				<div className='menuPopover__pageLink-ico' />
				<p className='menuPopover__pageLink-name'>{name}</p>
			</li>
		</Link>
	)
}
