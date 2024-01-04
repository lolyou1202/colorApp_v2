import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import locationReducer from '../slices/locationSlice'
import pickerReducer from '../slices/pickerSlice'
import paletteReducer from '../slices/paletteSlice'
import alertReducer from '../slices/alertSlice'

export const store = configureStore({
	reducer: {
		locationReducer,
		pickerReducer,
		paletteReducer,
		alertReducer,
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
