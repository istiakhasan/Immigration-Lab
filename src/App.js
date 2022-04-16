
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className='app'>
        <Header />
       <Routes>
         <Route path='/' element={<Home />}></Route>
       </Routes>
    </div>
  );
}

export default App;