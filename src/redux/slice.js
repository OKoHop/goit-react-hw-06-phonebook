import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const sliceContacts = createSlice({
    name: 'contacts', 
    initialState,
    reducers: {
        addContact: (state, action) => {
            if (state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())) {
                return alert(`${action.payload.name} is already in contact!`);
            }
            return [...state, action.payload];
        },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        },
    }
})

export const sliceFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterChange: (state, action) => {
            return `${action.payload}`
        }
    }
})

export const { addContact, deleteContact } = sliceContacts.actions;
export const { filterChange } = sliceFilter.actions;
