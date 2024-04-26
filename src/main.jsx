import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FireBaseProvider from './FireBase/FireBaseProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FireBaseProvider>
    <RouterProvider router={Router} />
    </FireBaseProvider>
    <ToastContainer />
  </React.StrictMode>,
)
