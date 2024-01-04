import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: { open: boolean; text: string } = {
	open: false,
	text: '',
}

const alertSlice = createSlice({
	name: 'palette',
	initialState,
	reducers: {
		viewAlert() {},
		closeAlert(state, { payload }: PayloadAction<{reason: string}>) {
			if (payload.reason === 'clickaway') {
				state.open = false
			}
			state.open = false
		},
	},
})

const { actions, reducer } = alertSlice
export const {} = actions
export default reducer
