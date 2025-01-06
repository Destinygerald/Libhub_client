import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DraftPopupType } from '../assets/Types.ts'

type OmitDraftPopupType = Omit<DraftPopupType, "open">

const DraftPopup = createSlice({
	name: 'draft_popup',
	initialState: { value: 
		{
			open: false,
			id: '',
			title: '',
			type: ''	
		}
	},
	reducers: {
		openPopup: state => {
			state.value.open = true
		},
		closePopup: state => {
			state.value.open = false
		},
		setDraft: (state, action: PayloadAction<OmitDraftPopupType>) => {
			state.value.id = action.payload.id
			state.value.title = action.payload.title
			state.value.type = action.payload.type
		}
	}	
})

export default DraftPopup.reducer

export const { openPopup, closePopup, setDraft } = DraftPopup.actions