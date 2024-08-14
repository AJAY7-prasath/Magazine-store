import { Fragment } from 'react'

import Header from './Components/Header'
import Homepage from './Components/Homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productdetails from './Products/Productdetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartDetails from './Cart-details/CartDetails';
function App() {
 
  return(
    
   <Fragment>
<Router>
  <ToastContainer/>
    <Header/>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/product/:id" element={<Productdetails />} />
    <Route path="/Cart" element={<CartDetails/>}/>
    </Routes>

    </Router>
  </Fragment>
  
  )
}

export default App
