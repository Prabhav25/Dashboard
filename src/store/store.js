import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../store/slices/dashboardSlice";

// Load dashboard state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("dashboardState");
    if (serializedState === null) return undefined;
    return { dashboard: JSON.parse(serializedState) };
  } catch (e) {
    console.error("Error loading state from localStorage:", e);
    return undefined;
  }
};

// Configure store with preloaded state
const store = configureStore({
  reducer: {
    dashboard: dashboardReducer, //defines slices ofthe state that is dashboardSlice
  },
  preloadedState: loadState(), //loaded any saved state from local storage
});

store.subscribe(() => {
  //listen for any state change, so app remembered when the app is restarted or refreshed
  try {
    const serializedState = JSON.stringify(store.getState().dashboard);
    localStorage.setItem("dashboardState", serializedState);
  } catch (e) {
    console.error("Error saving state to localStorage:", e);
  }
});

export default store;
