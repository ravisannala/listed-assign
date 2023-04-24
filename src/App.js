import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BreadCrumb from './components/BreadCrumb';
import Meta from './components/meta';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Mainpage from './components/Mainpage';


const App = () => {
  return (
      
      <div>
       

     <Meta title={"Login"} />
     <BreadCrumb title="Login" />
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="forgot-password" element={<Forgotpassword />} />
      <Route path="signup" element={<Signup />} />
      <Route path="reset-password" element={<Resetpassword />} />
      <Route path="signup" element={<Signup />} />
      <Route path="reset-password" element={<Resetpassword />} />
      <Route path="main-page" element={<Mainpage />} />
      </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App;
