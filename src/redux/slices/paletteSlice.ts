import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_Huemint } from '../api/api'
import { useContrast } from '../../hooks/useContrast'

export interface IColorInPalette {
	id: number
	HEX: string
	contrastHEX: string
	lock?: boolean
	saved?: boolean
}

interface IInitialState {
	palette: IColorInPalette[]
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
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchPalette.pending, state => {
			state.loading = true
		})
		builder.addCase(fetchPalette.fulfilled, (state, { payload }) => {
			state.loading = false
			state.palette = payload.results[0].palette.map((color, index) => ({
				id: index,
				HEX: color.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
				contrastHEX: useContrast(color).toUpperCase(),
				lock: false,
				saved: false,
			}))
		})
	},
})

const { actions, reducer } = paletteSlice
export const {} = actions
export default reducer
