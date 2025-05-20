// dashboardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  searchTerm: "",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState, //initial load
  reducers: {
    initializeData: (state, action) => {
      state.categories = action.payload; //loading categories
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload; //initializing data
      const category = state.categories.find((c) => c.id === categoryId); //finding category
      if (category) category.widgets.push(widget); //adding widget
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category)
        category.widgets = category.widgets.filter((w) => w.id !== widgetId); //removing widget by id from a category
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { initializeData, addWidget, removeWidget, setSearchTerm } =
  dashboardSlice.actions; //exporting actions
export default dashboardSlice.reducer; //exporting reducer function to be used in store.js
