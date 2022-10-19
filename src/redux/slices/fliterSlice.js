const { createSlice } = require('@reduxjs/toolkit')
const initialState = {
	searchValue: '',
	categoryId: 0,
	currentPage: 1,
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
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		}
	}
})

export const { setCategoryId, setSort, setCurrentPage, setSearchValue } =
	filterSlice.actions

export default filterSlice.reducer
