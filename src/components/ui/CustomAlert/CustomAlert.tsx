import './CustomAlert.style.scss'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { closeAlert } from '../../../redux/slices/alertSlice'
import { Success } from '../../icons/Success'

export const CustomAlert = () => {
	const { open, text } = useAppSelector(state => state.alertReducer)

	const dispatch = useAppDispatch()

	const handleCloseAlert = (
		_: React.SyntheticEvent | Event,
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
			onClose={handleCloseAlert}
		>
			<Alert
				icon={<Success size={32} stroke='#ffffff' strokeWidth={3} />}
			>
				{text}
			</Alert>
		</Snackbar>
	)
}
