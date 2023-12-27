import { Link } from "react-router-dom"
import { PrimaryButton } from "../../ui/PrimaryButton/PrimaryButton"
import { FC } from "react"
import { ILocation } from "../../../redux/slices/locationSlice"

interface INavigationLink {
	location: ILocation
}

export const NavigationLink: FC<INavigationLink> = ({ location }) => {

	return (
		<Link to={`${location.path}`}>
			<PrimaryButton
				onClickRule="controllState"
				pressed={location.active}
				content={`${location.type}`}
				size='large'
			/>
		</Link>
	)
}
