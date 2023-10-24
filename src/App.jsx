import React from "react";
import { store } from './Store/store'
import { AppRouter } from './Router/AppRouter';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";


export const  App = () => {
  return (
    <Provider store={ store }> 
    <BrowserRouter>
         <AppRouter/>
         </BrowserRouter>
         </Provider>

  );
}


