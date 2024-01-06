import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useContrast } from '../../hooks/useContrast'
import { IColor } from '../../types'
import chroma from 'chroma-js'

interface IInitialState {
	color: IColor
}

const initialState: IInitialState = {
	color: {
		HEX: '',
		variant: {
			brightness: 'light',
			contrastHEX: '#353535',
		},
	},
}

const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		setColor(state, { payload }: PayloadAction<{ color: string }>) {
			state.color = {
				HEX: payload.color,
				variant: useContrast(payload.color),
			}
		},
		getRandom(state) {
			const HEX = chroma
				.random()
				.hex()
				.replace(/[^\d\w]/g, '')
			state.color = {
				HEX: HEX,
				variant: useContrast(HEX.toUpperCase()),
			}
		},
	},
})

const { actions, reducer } = colorSlice
export const { setColor, getRandom } = actions
export default reducer
