import { RouterProvider } from 'react-router-dom'
import { CustomAlert } from './components/ui/CustomAlert/CustomAlert'
import { FullScreen } from './components/ui/FullScreen/FullScreen'
import { router } from './router/router'

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
			<CustomAlert />
			<FullScreen />
		</div>
	)
}

export default App
