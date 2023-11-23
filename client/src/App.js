import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar';
import JD from './components/JD';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';


function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element={<JD />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
