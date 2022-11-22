import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { PageLayout } from './components/PageLayout/PageLayout';
import React, { useState } from 'react';
import { RouteSuspense } from './components/RouteSuspense/RouteSuspense';
import './App.css';

const RegisterPage = React.lazy(() => import('./views/RegisterPage/RegisterPage'));
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));
const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
const AddPage = React.lazy(() => import('./views/AddPage/AddPage'));

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email) => setUser({email});

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<PageLayout user={user} />}>
          <Route index element={
            <RouteSuspense>
              <HomePage/>
            </RouteSuspense>
          } />
          <Route path="/add" element={
            <RouteSuspense>
              <AddPage/>
            </RouteSuspense>
          } />
        </Route>
        <Route path="/register" element={
        <RouteSuspense>
          <RegisterPage/>
        </RouteSuspense>
        } />
        <Route path="/login" element={
        <RouteSuspense>
          <LoginPage onLogin={handleLogin}/>
        </RouteSuspense>
        } />
      </Routes>
    </div>
  );
}

export default App;
