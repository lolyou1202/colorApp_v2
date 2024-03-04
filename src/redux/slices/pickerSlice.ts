import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IColor } from '../../types'
import { useContrast } from '../../hooks/useContrast'
import { colorTokens } from '../../constants/colorTokens'

const initialState: {
	colorState: IColor
	stackOfStates: { position: number; stack: string[] }
} = {
	colorState: {
		color: '',
		variant: {
			brightness: 'light',
			contrastColor: colorTokens.primaryDark,
		},
	},
	stackOfStates: {
		position: -1,
		stack: [],
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
			state.stackOfStates.position = state.stackOfStates.stack.length
			state.stackOfStates.stack.push(payload.newColor)
		},
		setPositionStack(
			state,
			{ payload }: PayloadAction<{ type: 'undo' | 'redo' }>
		) {
			let undoPosition

			switch (payload.type) {
				case 'undo':
					undoPosition = state.stackOfStates.position - 1
					break
				case 'redo':
					undoPosition = state.stackOfStates.position + 1
					break
			}

			const undoColor = state.stackOfStates.stack[undoPosition]

			state.stackOfStates.position = undoPosition
			state.colorState = {
				color: undoColor,
				variant: useContrast(undoColor),
			}
		},
	},
})

const { actions, reducer } = pickerSlice
export const { setColor, setPositionStack } = actions
export default reducer
