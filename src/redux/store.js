import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/fliterSlice'

export const store = configureStore({
	reducer: {
		filter
	}
})
