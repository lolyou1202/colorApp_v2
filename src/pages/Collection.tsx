import { useEffect } from "react"
import { useAppDispatch } from "../redux/hooks/useAppRedux"
import { EnumLocation, setLocation } from "../redux/slices/locationSlice"

export const Collection = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.collection }))
	}, [])

	return <div>Collection</div>
}
