import './App.css'
import Banner from './components/Banner'
import Cards from './components/Cards'

import FilterContainer from './components/FilterContainer'
import Footer from './components/Footer'
import Login from './components/credentials/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" 
            element={
              <>
                <Banner />
                <Cards />
                <FilterContainer />
                
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