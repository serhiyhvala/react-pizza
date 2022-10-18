import { configureStore } from '@reduxjs/toolkit'

import cart from './slices/cartSlice'
import filter from './slices/fliterSlice'
import pizza from './slices/pizzaSlice'

export const store = configureStore({
	reducer: {
		filter,
		cart,
		pizza
	}
})
