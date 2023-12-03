import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import FilterContainer from '../components/FilterContainer'
import Cover from '../components/Cover'
const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Cards cardsData={''} totalCards={8} cardAction={''}/>
            <Cover />
            <FilterContainer />
        </div>
    )
}

export default Home