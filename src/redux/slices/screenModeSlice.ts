import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: {
	screenModeState: {
		open: boolean
		content: string[]
	}
} = {
	screenModeState: {
		open: false,
		content: [],
	},
}

const screenModeSlice = createSlice({
	name: 'screenMode',
	initialState,
	reducers: {
		openScreenMode(
			state,
			{ payload }: PayloadAction<{ content: string[] }>
		) {
			state.screenModeState = { open: true, content: payload.content }
		},
		closeScreenMode(state) {
			state.screenModeState = { open: false, content: [] }
		},
	},
})

const { actions, reducer } = screenModeSlice
export const { openScreenMode, closeScreenMode } = actions
export default reducer
