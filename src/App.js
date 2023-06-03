import './App.css';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import ServiceDetail from './common/ServiceDetail';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service/:serviceId' element={<ServiceDetail/>} />
        </Routes> 
        <Footer/>
      </BrowserRouter> 
    
    </>
  );
}

export default App;
