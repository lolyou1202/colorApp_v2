import './Navigation.style.scss'
import { useAppSelector } from "../../../redux/hooks/useAppRedux"
import { NavigationLink } from "./NavigationLink"

export const Navigation = () => {
	const location = useAppSelector(store => store.locationReducer)

	return (
		<div className='navigation'>
			<NavigationLink location={location.picker} />
			<NavigationLink location={location.palette} />
			{/*<NavigationLink location={location.collection} />*/}
		</div>
	)
}
