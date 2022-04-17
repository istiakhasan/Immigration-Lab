
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './components/Pages/Login/Register/Register';
import Header from './components/Shared/Header/Header'
import NotFound from './components/Shared/NotFound/NotFound';


function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/checkout' element={
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        } />
        <Route path='/checkout/:serviceId' element={
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
