import './App.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path="/" 
            element={
              <>
                <Home/>
                <Footer />
              </>
            }
          />
          
        </Routes>
      </Router>
    </>
  )
}

export default App