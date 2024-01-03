import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_Huemint } from '../api/api'
import { useContrast } from '../../hooks/useContrast'
import { IColor, ISwapColors } from '../../types/types'
import { useId } from 'react'

interface IInitialState {
	palette: IColor[]
	loading: boolean
}

const initialState: IInitialState = {
	palette: [],
	loading: false,
}

export interface fetchHuemintResults {
	results: { palette: string[]; score: number }[]
}

export interface fetchHuemintArgs {
	mode?: 'transformer' | 'diffusion' | 'random'
	numColors?: number
	temperature?: string
	numResults?: number
	adjacency: string[]
	palette: string[]
}

export const fetchPalette = createAsyncThunk<
	fetchHuemintResults,
	fetchHuemintArgs
>(
	'palette/fetchPalette',
	async (
		{
			mode = 'diffusion',
			numColors = 4,
			temperature = '0.2',
			numResults = 1,
			adjacency,
			palette,
		},
		{ rejectWithValue }
	) => {
		try {
			const response = await axios<fetchHuemintResults>({
				method: 'post',
				url: API_Huemint,
				data: {
					mode,
					num_colors: numColors,
					temperature,
					num_results: numResults,
					adjacency,
					palette,
				},
			})
			console.log(response.data)

			return response.data
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

const paletteSlice = createSlice({
	name: 'palette',
	initialState,
	reducers: {
		swapColors(state, { payload }: PayloadAction<ISwapColors>) {},
	},
	extraReducers(builder) {
		builder.addCase(fetchPalette.pending, state => {
			state.loading = true
		})
		builder.addCase(fetchPalette.fulfilled, (state, { payload }) => {
			state.loading = false

			state.palette = payload.results[0].palette.map((color, index) => ({
				id: index,
				HEX: color.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
				variant: useContrast(color),
				lock: false,
				saved: false,
			}))
		})
	},
})

const { actions, reducer } = paletteSlice
export const { swapColors } = actions
export default reducer
