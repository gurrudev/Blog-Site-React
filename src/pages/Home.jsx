import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import FilterContainer from '../components/FilterContainer'
import { getBlogsData } from '../../api/apiCalls'
import HomeSekeleton from '../components/Skeleton/HomeSekeleton'
import Cover from '../components/Cover'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Home = () => {
    const [cardBlogsData, setCardData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { animate } = useAutoAnimate()

    const dataFn = async () => {
        const data = await getBlogsData()
        setCardData(data.blogs_data)
        setIsLoading(false)
    }


    useEffect(() => {
        const timer = setTimeout(() => {
        dataFn()
        }, 2000)
        return () => clearTimeout(timer)
    }, [])


    return (
        <div key={''}>
            <Banner />
            {
                isLoading ? Array(8).fill(0).map((d, i) => (<HomeSekeleton key={i} />)) :
                    cardBlogsData?.filter((item, index) => index < 8)?.map((item) => (
                        <main ref={animate}>
                            <Cards imgUrl={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} title={item.title} description={item.description} clickAction={''} />
                        </main>
                    ))
            }
            <Cover />
            <FilterContainer />
        </div>
    )
}

export default Home