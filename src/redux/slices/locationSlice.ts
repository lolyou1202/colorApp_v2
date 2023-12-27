import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export enum EnumLocation {
	picker = "picker",
	palette = "palette",
	collection = "collection",
	colors = "colors",
	palettes = "palettes",
}

export interface ILocationState {
	[EnumLocation.picker]: ILocation
	[EnumLocation.palette]: ILocation
	[EnumLocation.collection]: ILocation
	[EnumLocation.colors]: ILocation
	[EnumLocation.palettes]: ILocation
}

export interface ILocation {
	type: string
	path: string
	active: boolean
}

const locationState: ILocationState = {
	[EnumLocation.picker]: {
		type: EnumLocation.picker,
		path: "/picker",
		active: false,
	},
	[EnumLocation.palette]: {
		type: EnumLocation.palette,
		path: "/palette",
		active: false,
	},
	[EnumLocation.collection]: {
		type: EnumLocation.collection,
		path: "/collection",
		active: false,
	},
	[EnumLocation.colors]: {
		type: EnumLocation.colors,
		path: "/collection/colors",
		active: false,
	},
	[EnumLocation.palettes]: {
		type: EnumLocation.palettes,
		path: "/collection/palettes",
		active: false,
	},
}

const locationSlice = createSlice({
	name: "location",
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
