import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../app/store'

// Define a type for the slice state
interface LinkUrl
  {
    id:string,
    name: string,
    url: string,
    point: number
  }

  interface LinkUrlState{
    linkUrl: LinkUrl[]
  }

  
  // Define the initial state using that type
  const initialState: LinkUrlState =
  {
    linkUrl: []
  }
 
  
export const linkSlice = createSlice({
  name: 'link',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
    // Use the PayloadAction type to declare the contents of `action.payload`
    addLink: (state, action: PayloadAction<LinkUrl>) => {
      state.linkUrl = [ {
        id: action.payload.id,
        name: action.payload.name,
        url: action.payload.url,
        point: action.payload.point
      },...state.linkUrl]
        console.log(state.linkUrl)
        let link =localStorage.getItem('link') || '[]';
     
      localStorage.setItem('link', JSON.stringify([...JSON.parse(link),{
        id: action.payload.id,
        name: action.payload.name,
        url: action.payload.url,
        point: action.payload.point
      }]))
    },
    increment: (state,action:PayloadAction<string>) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      link.forEach((element:LinkUrl) => {
        if(element.id === action.payload){
          element.point++
          
        }
      })
      state.linkUrl.forEach((element:LinkUrl) => {
        if(element.id == action.payload){
          console.log(element.id)
          element.point++
          
        }
      })
      console.log(state.linkUrl)
   let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => b.point - a.point)
      
     localStorage.setItem('link', JSON.stringify(orderedLinks))
    },
    decrement: (state,action:PayloadAction<string>) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      link.forEach((element:LinkUrl) => {
        if(element.id == action.payload){
          element.point--
          
        }
      });
      state.linkUrl.forEach((element:LinkUrl) => {
        if(element.id === action.payload){
          element.point--

        }
      });
     let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => b.point - a.point)
     localStorage.setItem('link', JSON.stringify(orderedLinks))
    },
    orderByName: (state) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => a.name.localeCompare(b.name))
      localStorage.setItem('link', JSON.stringify(orderedLinks))
        state.linkUrl = state.linkUrl.sort((a:LinkUrl,b:LinkUrl) => a.name.localeCompare(b.name))
    },
    orderByPoint: (state) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      let orderedLinks= link.sort((a:LinkUrl,b:LinkUrl) => b.point - a.point)
      localStorage.setItem('link', JSON.stringify(orderedLinks))

        state.linkUrl = state.linkUrl.sort((a:LinkUrl,b:LinkUrl) => b.point - a.point);
      
    },
    deleteLink: (state, action: PayloadAction<string>) => {
      let link = JSON.parse(localStorage.getItem('link') || '0' ) ;
      let newLink = link.filter((element:LinkUrl) => element.id !== action.payload)
      localStorage.setItem('link', JSON.stringify(newLink))
      let stateNewLink=  state.linkUrl.filter((element:LinkUrl) => element.id !== action.payload)
      state.linkUrl = stateNewLink
      state.linkUrl = state.linkUrl.filter((element:LinkUrl) => element.id !== action.payload)
    }
  },
})

export const { addLink, deleteLink,increment,decrement,orderByName,orderByPoint } = linkSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPoint = (state: RootState) => state.links

export default linkSlice.reducer