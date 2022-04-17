
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import Header from './components/Shared/Header/Header'


function App() {
  return (
    <div className='app'>
        <Header />
        
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/checkout/:serviceId' element={<CheckOut />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
       </Routes>
    </div>
  );
}

export default App;
