const { createSlice } = require('@reduxjs/toolkit')
const initialState = {
  totalPrice: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      findItem
        ? findItem.count++
        : state.items.push({ ...action.payload, count: 1 })
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      )
    },
    removeItems(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    clearItems(state) {
      state.items = []
    }
  }
})

export const { addItems, removeItems, clearItems } = cartSlice.actions

export default cartSlice.reducer
