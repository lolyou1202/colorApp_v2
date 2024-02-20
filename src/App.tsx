import { Navigate, Route, Routes } from 'react-router-dom'
import { Picker } from './pages/Picker/Picker'
import { CustomAlert } from './components/ui/CustomAlert/CustomAlert'
import { useAppSelector } from './redux/hooks/useAppRedux'

function App() {
	const alert = useAppSelector(store => store.alertReducer)

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigate to='/picker' />} />
				<Route path='/picker' element={<Picker />} />
				<Route path='/picker/:pickerID' element={<Picker />} />
				{/*<Route path='/generator'>
						<Route index element={<Palette />} />
						<Route path=':generatorID' element={<Palette />} />
					</Route>*/}
				<Route path='*' element={<div>The page does not exist</div>} />
			</Routes>
			<CustomAlert open={alert.open} text={alert.text} />
		</div>
	)
}

export default App
