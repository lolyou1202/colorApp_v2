import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import locationReducer from './slices/locationSlice'
import pickerReducer from './slices/pickerSlice'
import screenModeReducer from './slices/screenModeSlice'
import alertReducer from './slices/alertSlice'

export const store = configureStore({
	reducer: {
		locationReducer,
		pickerReducer,
		alertReducer,
		screenModeReducer,
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
