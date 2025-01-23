import React from 'react';
import {useStore} from 'effector-react'
import Header from "./components/Header/Header.tsx";
import { AuthPage } from './components/AuthPage/AuthPage.tsx';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { $auth } from './context/auth.ts';

function App() {
  const isLoggedIn = useStore($auth);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={isLoggedIn ? <Navigate to={'/cost'}/> : <Navigate to='login'/>}/>
          <Route path='/registration' element={<AuthPage type='registration'/>}/>
          <Route path='/login' element={<AuthPage type='login'/>}/>
          <Route path='/costs' element={<h1>Costs</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
