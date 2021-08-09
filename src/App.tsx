import React from "react"
import Router from './routes/Index'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from "./globals"

function App(): JSX.Element {
  return (
    <div className="container">
      <GlobalStyle />
      <Router />
      <ToastContainer/>
    </div>
  );
}

export default App;
