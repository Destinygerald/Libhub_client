import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const CollectionName = createSlice({
	name: 'collection_name',
	initialState: { value: '' },
	reducers: {
		changeName: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		}
	}	
})

export default CollectionName.reducer

export const { changeName } = CollectionName.actions