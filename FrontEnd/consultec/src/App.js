import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import RegisterContainer from './containers/RegisterContainer';
import PasswordContainer from './containers/PasswordContainer';
import AdminDashContainer from './containers/AdminDashContainer';
import TeachersContainer from './containers/TeachersContainer';
import MaterialContainer from './containers/MaterialContainer';
import QuestionContainer from './containers/QuestionContainer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path='/password' element={<PasswordContainer/>}/>
          <Route path='/admin' element={<AdminDashContainer/>}/>
          <Route path='/teacher' element={<TeachersContainer/>}/>
          <Route path='/material' element={<MaterialContainer/>}/>
          <Route path='/question' element={<QuestionContainer/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
