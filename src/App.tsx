import { Navigate, Route, Routes } from 'react-router-dom'
import { Picker } from './pages/Picker/Picker'
import { CustomAlert } from './components/ui/CustomAlert/CustomAlert'
import { useAppDispatch, useAppSelector } from './redux/hooks/useAppRedux'
import { closeAlert } from './redux/slices/alertSlice'

function App() {
	const alert = useAppSelector(store => store.alertReducer)

	const dispatch = useAppDispatch()

	const handleCloseAlert = (
		_?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		dispatch(closeAlert({ reason: reason }))
	}

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigate to='/picker' />} />
				<Route path='/picker'>
					<Route index element={<Picker />} />
					<Route path=':pickerID' element={<Picker />} />
				</Route>
				{/*<Route path='/generator'>
						<Route index element={<Palette />} />
						<Route path=':generatorID' element={<Palette />} />
					</Route>*/}
				<Route path='*' element={<div>The page does not exist</div>} />
			</Routes>
			<CustomAlert
				open={alert.open}
				text={alert.text}
				onClose={handleCloseAlert}
			/>
		</div>
	)
}

export default App
