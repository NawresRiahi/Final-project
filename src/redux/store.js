import { configureStore } from '@reduxjs/toolkit'
import bookreducer from "./bookSlice/bookSlice"
export const store = configureStore({
  reducer: {book:bookreducer},
})