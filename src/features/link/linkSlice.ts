import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";

// Define a type for the slice state
interface LinkUrl {
  id: string;
  name: string;
  url: string;
  point: number;
}

interface LinkUrlState {
  linkUrl: LinkUrl[];
}

// Define the initial state using that type
const initialState: LinkUrlState = {
  linkUrl: [],
};

export const linkSlice = createSlice({
  name: "link",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addLink: (state, action: PayloadAction<LinkUrl>) => {
      state.linkUrl = [
        {
          id: action.payload.id,
          name: action.payload.name,
          url: action.payload.url,
          point: action.payload.point,
        },
        ...state.linkUrl,
      ];
    },
    increment: (state, action: PayloadAction<string>) => {
      state.linkUrl.forEach((element: LinkUrl) => {
        if (element.id == action.payload) {
          element.point++;
        }
      });
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.linkUrl.forEach((element: LinkUrl) => {
        if (element.id === action.payload) {
          element.point--;
        }
      });
    },
    orderByName: (state) => {
      state.linkUrl = state.linkUrl.sort((a: LinkUrl, b: LinkUrl) =>
        a.name.localeCompare(b.name)
      );
    },
    orderByPoint: (state) => {
      state.linkUrl = state.linkUrl.sort(
        (a: LinkUrl, b: LinkUrl) => b.point - a.point
      );
    },
    deleteLink: (state, action: PayloadAction<string>) => {
      let stateNewLink = state.linkUrl.filter(
        (element: LinkUrl) => element.id !== action.payload
      );
      state.linkUrl = stateNewLink;
    },
  },
});

export const {
  addLink,
  deleteLink,
  increment,
  decrement,
  orderByName,
  orderByPoint,
} = linkSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllLink = (state: RootState) => state.links.linkUrl;

export default linkSlice.reducer;
