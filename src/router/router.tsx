import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Picker } from '../pages/Picker/Picker'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Navigate to='/picker' />,
		},
		{
			path: '/picker',
			element: <Picker />,
		},
		{
			path: '/picker/:pickerID',
			element: <Picker />,
		},
		{
			path: '*',
			element: <div>The page does not exist</div>,
		},
	],
	{ basename: window.location.pathname || '' }
)
