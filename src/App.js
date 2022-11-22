import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { LoginPage } from './views/LoginPage/LoginPage';
import { RegisterPage } from './views/RegisterPage/RegisterPage';
import { HomePage } from './views/HomePage/HomePage';
import { AddPage } from './views/AddPage/AddPage';
import { PageLayout } from './components/PageLayout/PageLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/add" element={<AddPage/>} />
        </Route>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
