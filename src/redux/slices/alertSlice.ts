import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: { open: boolean; text: string } = {
	open: false,
	text: '',
}

const alertSlice = createSlice({
	name: 'palette',
	initialState,
	reducers: {
		viewAlert(state, { payload }: PayloadAction<{ alertText: string }>) {
			state.text = payload.alertText
			state.open = true
		},
		closeAlert(state) {
			state.open = false
		},
	},
})

const { actions, reducer } = alertSlice
export const { viewAlert, closeAlert } = actions
export default reducer
