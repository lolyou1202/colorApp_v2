import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useContrast } from '../../hooks/useContrast'
import axios from 'axios'
import { useRGBtoHEX } from '../../hooks/useRGBtoHex'

export interface IColor {
	type: 'light' | 'dark' | ''
	HEX: string
	contrast: string
}

interface IInitialState {
	color: IColor
	loading: boolean
}

const initialState: IInitialState = {
	color: {
		type: '',
		HEX: '',
		contrast: '#353535',
	},
	loading: false,
}

export interface fetchRandomResults {
	result: number[][]
}

export const fetchRandom = createAsyncThunk<fetchRandomResults>(
	'openedColor/fetchRandom',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://colormind.io/api/',
				data: JSON.stringify({ model: 'default' }),
			})
			return response.data
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
			state.color.contrast = useContrast(payload.color)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchRandom.pending, state => {
				state.loading = true
			})
			.addCase(fetchRandom.fulfilled, (state, { payload }) => {
				state.loading = false
				const HEX = useRGBtoHEX(
					payload.result[0][0],
					payload.result[0][1],
					payload.result[0][2]
				)
				state.color.HEX = HEX

				state.color.contrast = useContrast(
					HEX.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
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
