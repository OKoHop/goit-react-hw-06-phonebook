import { configureStore } from "@reduxjs/toolkit";
import { sliceContacts } from "./slice";

export const store = configureStore({
    reducer: {
        contacts: sliceContacts.reducer,
    },
})