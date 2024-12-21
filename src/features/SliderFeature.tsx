import { createSlice } from '@reduxjs/toolkit'

const SliderSlicer = createSlice({
	name: 'slider',
	initialState: { value: false },
	reducers: {
		openSlider: state => {
			state.value = true
		},
		closeSlider: state => {
			state.value = false
		}
	}
})

export default SliderSlicer.reducer

export const { openSlider, closeSlider } = SliderSlicer.actions