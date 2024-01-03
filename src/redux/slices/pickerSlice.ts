import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useContrast } from '../../hooks/useContrast'
import { IColor } from '../../types'
import chroma from 'chroma-js'

interface IInitialState {
	color: IColor
	loading: boolean
}

const initialState: IInitialState = {
	color: {
		HEX: '',
		variant: {
			brightness: 'light',
			contrastHEX: '#353535',
		},
	},
	loading: false,
}

export interface fetchRandomResults {
	result: number[][]
}

export const fetchRandom = createAsyncThunk<string>(
	'openedColor/fetchRandom',
	async (_, { rejectWithValue }) => {
		try {
			const response = chroma.random()
			return response.hex()
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		setColor(state, { payload }: PayloadAction<{ color: string }>) {
			state.color.HEX = payload.color
			state.color.variant = useContrast(payload.color)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchRandom.pending, state => {
				state.loading = true
			})
			.addCase(fetchRandom.fulfilled, (state, { payload }) => {
				state.loading = false

				state.color.HEX = payload.toUpperCase()
				state.color.variant = useContrast(
					payload.replace(/[^a-zA-Z0-9]/g, '')
				)
			})
			.addCase(fetchRandom.rejected, state => {
				state.loading = false
			})
	},
})

const { actions, reducer } = colorSlice
export const { setColor } = actions
export default reducer
