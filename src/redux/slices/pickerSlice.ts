import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IColor } from '../../types'
import { useContrast } from '../../hooks/useContrast'

const initialState: { colorState: IColor } = {
	colorState: {
		color: '',
		variant: {
			brightness: 'light',
			contrastColor: '#353535',
		},
	},
}

const pickerSlice = createSlice({
	name: 'picker',
	initialState,
	reducers: {
		setColor(state, { payload }: PayloadAction<{ newColor: string }>) {
			state.colorState = {
				color: payload.newColor,
				variant: useContrast(payload.newColor),
			}
		},
	},
})

const { actions, reducer } = pickerSlice
export const { setColor } = actions
export default reducer
