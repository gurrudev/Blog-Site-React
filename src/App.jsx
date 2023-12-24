import './App.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BlogPost from './pages/BlogPost'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/" 
            element={
              <>
                <Home/>
                <Footer />
              </>
            }
          />
          
          <Route path='/post/:id' element={<BlogPost/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App