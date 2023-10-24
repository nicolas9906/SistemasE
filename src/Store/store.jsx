import { configureStore } from '@reduxjs/toolkit';
import { AgregarSlice } from "./agregar/agregarSlice";


export const store = configureStore({
    reducer: {
        agregar: AgregarSlice.reducer,
      
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
