import { createSlice } from "@reduxjs/toolkit"
import cartItems from "../../cartItems"

const initialState = {
    cartItems: cartItems,
    total: 0,
    amount: 4,
    isLoading: false,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => itemId !== item.id)
        },
        increase: (state, { payload }) => {
            const itemId = payload
            const foundItem = state.cartItems.find(item => item.id === itemId)
            foundItem.amount = foundItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const itemId = payload
            const foundItem = state.cartItems.find(item => item.id === itemId)
            foundItem.amount = foundItem.amount - 1
        },
        calculateTotal: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((cartItem)=> {
                amount += cartItem.amount
                total += cartItem.price * cartItem.amount
            })

            state.total = total
            state.amount = amount
        }
    }
})

console.log(cartSlice)
export default cartSlice

export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions


