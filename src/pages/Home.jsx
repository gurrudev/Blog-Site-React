import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import FilterContainer from '../components/FilterContainer'
import Cover from '../components/Cover'
import {getBlogsData} from '../../api/apiCalls'
import { useDispatch } from 'react-redux'

const Home = () => {

    const [cardData, setCardData] = useState(null)

    const token = localStorage.getItem('token');

    const dispatch = useDispatch()

    // console.log(token)

    const BlogCardData = async() => {
        const data = await getBlogsData()
        setCardData(data.blogs_data)
    }

    useEffect(()=>{
        BlogCardData()
    },[])

    return (
        <div className=''>
            <Banner />
            <Cards cardsData={cardData} totalCards={8} cardAction={''}/>
            <Cover />
            <FilterContainer />
        </div>
    )
}

export default Home