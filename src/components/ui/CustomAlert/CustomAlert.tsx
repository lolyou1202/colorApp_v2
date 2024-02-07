import './CustomAlert.style.scss'
import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { closeAlert } from '../../../redux/slices/alertSlice'
import { Success } from '../../icons/Success'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface ICustomAlert {
	open: boolean
	text?: string
}

export const CustomAlert: FC<ICustomAlert> = ({ open, text }) => {
	const dispatch = useAppDispatch()

	const handleCloseAlert = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}
		dispatch(closeAlert())
	}

	return (
		<Snackbar
			open={open}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			autoHideDuration={2000}
			onClose={handleCloseAlert}>
			<Alert
				icon={<Success size={32} stroke='#ffffff' strokeWidth={3} />}>
				{text}
			</Alert>
		</Snackbar>
	)
}
