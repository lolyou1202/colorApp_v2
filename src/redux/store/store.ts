import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import locationReducer from '../slices/locationSlice'
import pickerReducer from '../slices/pickerSlice'
import paletteReducer from '../slices/paletteSlice'

export const store = configureStore({
	reducer: {
		locationReducer,
		pickerReducer,
		paletteReducer,
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
