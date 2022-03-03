import './App.css';
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from "./components/Footer"

function App () {
  const currantYear = new Date().getFullYear();
  return (
    <div className='container'>
      
      <NavBar />
      <Outlet />
      <Footer currantYear={currantYear} />
    </div>
  )
}

export default App
