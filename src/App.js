import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import Page404 from './pages/page404';
import ProductDetailPage from './pages/productDetail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './routers/Navigation';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import AboutMe from './components/AboutMe';


function App() {
  return (   
    <div>      
      <Navigation/>
      <Routes>      
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path="/home" exact element={<HomePage />} />
      <Route path="/auth/login" exact element={<Login />} />
      <Route path="/auth/register" exact element={<Register />} />
      <Route path='/aboutme' element={<AboutMe/>} ></Route>
      <Route path='/detalle/:id' element={<ProductDetailPage/>}> </Route>      
      <Route path="/auth/login" exact element={<Login />} />
      <Route path='/*' element={<Page404/>} ></Route>
    </Routes>
    
    </div> 
        
  );
}

export default App;
