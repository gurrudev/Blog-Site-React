import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import FilterContainer from '../components/FilterContainer'
import Cover from '../components/Cover'
import { getBlogsData } from '../../api/apiCalls'
// import { useDispatch } from 'react-redux'
import CoverSkeleton from '../components/Skeleton/CoverSkeleton'
import HomeCardSkeleton from '../components/Skeleton/FilterCardsSkeleton'
import { Helmet } from 'react-helmet'

const Home = () => {

    const [cardData, setCardData] = useState([])

    // const token = localStorage.getItem('token');

    // const dispatch = useDispatch()

    const BlogCardData = async () => {
        const data = await getBlogsData()
        setCardData(data?.blogs_data)
    }

    useEffect(() => {
        BlogCardData()
    }, [])

    return (<>
        <Helmet>
            <title>BlogHub</title>
        </Helmet>
        <div className=''>
            <Banner />
            <Cards cardsData={cardData} totalCards={cardData.length || 8} isLoading={(cardData.length === 0) ? true : false} />
            {(cardData.length === 0) ?
                <CoverSkeleton /> : <Cover />
            }
            {(cardData.length === 0) ?
                <HomeCardSkeleton /> : <FilterContainer cardData={cardData} />
            }
        </div></>
    )
}

export default Home