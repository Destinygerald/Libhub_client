import { createSlice } from '@reduxjs/toolkit'

const SliderSlicer = createSlice({
	name: 'slider',
	initialState: { value: false },
	reducers: {
		openSlider: (state, _) => {
			state.value = true
		},
		closeSlider: (state, _) => {
			state.value = false
		}
	}
})

export default SliderSlicer.reducer

const { openSlider, closeSlider } = SliderSlicer.actions