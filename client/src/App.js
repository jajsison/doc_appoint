import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import {Button} from "antd/";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
     
        </Routes>

     </BrowserRouter>
     
    </div>
  );
}

export default App;
