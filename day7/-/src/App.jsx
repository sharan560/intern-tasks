import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './home';
import About from './About';
import Navbar from './components/navbar';



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App
