import { createSlice } from '@reduxjs/toolkit'
import { books } from '../../data'

const initialState = books

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
       addBook: (state, action) => {
      state.push(action.payload)
    },
    updateBook:(state,action)=>{
   return   state.map(el=>el.id===action.payload.id ? action.payload : el)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBook,updateBook } = bookSlice.actions

export default bookSlice.reducer