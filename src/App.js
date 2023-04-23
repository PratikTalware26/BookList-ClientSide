import './App.css';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Booklist from './Components/Booklist';
import Addbook from './Components/Addbook';
import Bookdetails from './Components/Bookdetails';
import Editbook from './Components/Editbook';
import { createContext, useState } from 'react';

export const globalData= createContext()

function App() {
  const [token, setToken]= useState(null)
  return (
    <globalData.Provider value={[token, setToken]}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path="/" element={<SignIn/>}/>
        <Route path='/home' element={<Booklist/>}/>
        <Route path="/addbook" element={<Addbook/>}/>
        <Route path="/bookdetails" element={<Bookdetails/>}/>
        <Route path="/editbook" element={<Editbook/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </globalData.Provider>
  );
}

export default App;
