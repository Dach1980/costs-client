import React from 'react';
import { useUnit} from 'effector-react'
import Header from "./components/Header/Header.tsx";
import { AuthPage } from './components/AuthPage/AuthPage.tsx';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import { $auth } from './context/auth.ts';
import { $alert } from './context/alert.ts';
import { Alert } from './components/Alert/Alert.tsx';

function App() {
  const isLoggedIn = useUnit($auth);
  const alert = useUnit($alert)

  return (
    <div className="App">
      <Header />
      {alert.alertText && <Alert props={alert} />}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isLoggedIn ? <Navigate to='/cost'/> : <Navigate to='login'/>}/>
          <Route path='/registration' element={isLoggedIn ? <Navigate to='/cost'/> : <AuthPage type='registration'/>}/>
          <Route path='/login' element={isLoggedIn ? <Navigate to='/cost'/> : <AuthPage type='login'/>}/>
          <Route path='/costs' element={isLoggedIn ? <h1>Costs</h1> : <Navigate to='/login'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
