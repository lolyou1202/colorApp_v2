import { Navigation } from "./components/basic/Navigation/Navigation"
import { Navigate, Route, Routes } from "react-router-dom"
import { Picker } from "./pages/Picker"
import { Palette } from "./pages/Palette"
import { Collection } from "./pages/Collection"

function App() {
	return (
		<div className='App'>
			<Navigation />
			<div className='main'>
				<Routes>
					<Route path='/' element={<Navigate to='/picker' />} />
					<Route path='/picker'>
						<Route index element={<Picker />} />
						<Route path=':colorId' element={<Picker />} />
					</Route>
					<Route path='/palette'>
						<Route index element={<Palette />} />
						<Route path=':paletteId' element={<Palette />} />
					</Route>
					{/*<Route path='/collection'>
						<Route index element={<Collection />} />
					</Route>*/}
					<Route
						path='*'
						element={<div>The page does not exist</div>}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default App
