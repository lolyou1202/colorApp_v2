import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum EnumLocation {
	picker = 'picker',
	palette = 'palette',
}

export interface ILocationState {
	[EnumLocation.picker]: ILocation
	[EnumLocation.palette]: ILocation
}

export interface ILocation {
	type: string
	path: string
	active: boolean
}

const locationState: ILocationState = {
	[EnumLocation.picker]: {
		type: EnumLocation.picker,
		path: '/picker',
		active: false,
	},
	[EnumLocation.palette]: {
		type: EnumLocation.palette,
		path: '/palette',
		active: false,
	},
}

const locationSlice = createSlice({
	name: 'location',
	initialState: locationState,
	reducers: {
		setLocation: (
			state,
			{ payload }: PayloadAction<{ locationType: EnumLocation }>
		) => {
			let key: EnumLocation

			for (key in state) {
				key === payload.locationType
					? (state[key].active = !state[key].active)
					: (state[key].active = false)
			}
		},
	},
})

const { actions, reducer } = locationSlice
export const { setLocation } = actions
export default reducer
