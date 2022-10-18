import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { MOCK_API_ENDPOINT } from '../../constants'

export const fetchPizzas = createAsyncThunk(
	'pizza/fetchPizzasStatus',
	async ({ sortBy, order, category, search, currentPage }) => {
		const { data } = await axios.get(
			`${MOCK_API_ENDPOINT}/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
		)
		return data
	}
)

const initialState = {
	items: [],
	status: 'loading'
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		}
	},
	extraReducers: {
		[fetchPizzas.pending]: state => {
			state.status = 'loading'
			state.items = []
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload
			state.status = 'success'
		},
		[fetchPizzas.rejected]: state => {
			state.items = []
			state.status = 'error'
		}
	}
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
