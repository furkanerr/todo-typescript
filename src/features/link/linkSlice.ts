import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../app/store'

// Define a type for the slice state
interface LinkUrl {
    id:string,
    name: string,
    url: string,
    point: number
  }
  
  // Define the initial state using that type
  const initialState: LinkUrl = {
    id: '',
    name: '',
    url: '',
    point: 0
  }
 
  
export const linkSlice = createSlice({
  name: 'link',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
    // Use the PayloadAction type to declare the contents of `action.payload`
    addLink: (state, action: PayloadAction<LinkUrl>) => {
      state.name = action.payload.name
      state.url = action.payload.url
      state.point = action.payload.point
      state.id = action.payload.id
     
        let link =localStorage.getItem('link') || '[]';
     
      localStorage.setItem('link', JSON.stringify([...JSON.parse(link),state]))
    },
    increment: (state,action:PayloadAction<string>) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      link.forEach((element:LinkUrl) => {
        if(element.id === action.payload){
          element.point++
          state.point++
        }
      })
    let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => b.point - a.point)
      
      localStorage.setItem('link', JSON.stringify(orderedLinks))
    },
    decrement: (state,action:PayloadAction<string>) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      link.forEach((element:LinkUrl) => {
        if(element.id === action.payload){
          element.point--
          state.point--
        }
      });
      let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => b.point - a.point)
      localStorage.setItem('link', JSON.stringify(orderedLinks))
    },
    orderByName: (state) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => a.name.localeCompare(b.name))
      localStorage.setItem('link', JSON.stringify(orderedLinks))
      state.point++
    },
    orderByPoint: (state) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => b.point - a.point)
      localStorage.setItem('link', JSON.stringify(orderedLinks))
      state.point++
    },
    deleteLink: (state, action: PayloadAction<string>) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      let newLink = link.filter((element:LinkUrl) => element.id !== action.payload)
      localStorage.setItem('link', JSON.stringify(newLink))
        state.point++
    }
  },
})

export const { addLink, deleteLink,increment,decrement,orderByName,orderByPoint } = linkSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPoint = (state: RootState) => state.links

export default linkSlice.reducer