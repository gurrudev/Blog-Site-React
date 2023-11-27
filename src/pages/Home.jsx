import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import FilterContainer from '../components/FilterContainer'
const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Cards />
            <FilterContainer />
        </div>
    )
}

export default Home