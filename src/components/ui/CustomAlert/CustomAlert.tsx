import { FC } from 'react'
import './CustomAlert.style.scss'
import { Success } from '../../icons/Success'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface ICustomAlert {
	open: boolean
	onClose?: () => void
	text?: string
}

export const CustomAlert: FC<ICustomAlert> = ({ open, onClose, text }) => {
	return (
		<Snackbar
			open={open}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			autoHideDuration={2000}
			onClose={onClose}>
			<Alert
				icon={<Success size={32} stroke='#ffffff' strokeWidth={3} />}>
				{text}
			</Alert>
		</Snackbar>
	)
}
