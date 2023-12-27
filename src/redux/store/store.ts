import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import locationReducer from "../slices/locationSlice"
import pickerReducer from "../slices/pickerSlice"

export const store = configureStore({
	reducer: {
		locationReducer,
		pickerReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
