const { createSlice } = require('@reduxjs/toolkit')
const initialState = {
	categoryId: 0,
	sort: {
		name: 'popularity (DESC)',
		sortType: 'rating'
	}
}

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		}
	}
})

export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer
