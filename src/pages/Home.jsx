import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import FilterContainer from '../components/FilterContainer'
import Cover from '../components/Cover'
import {getBlogsData} from '../../api/apiCalls'
import { useDispatch } from 'react-redux'
import CoverSkeleton from '../components/Skeleton/CoverSkeleton'

const Home = () => {

    const [cardData, setCardData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const token = localStorage.getItem('token');

    const dispatch = useDispatch()

    useEffect(()=>{
        const timer = setTimeout(() => {
            if(cardData) return setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    })

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
            <Cards cardsData={cardData} totalCards={cardData.length} cardAction={''}/>
            {isLoading?
               <CoverSkeleton/> :<Cover /> 
            }
            <FilterContainer cardData={cardData}/>
        </div>
    )
}

export default Home