import React, { useEffect, useState } from 'react'
import FiltersTab from './FiltersTab'
import FilterCards from './FiltersCards'
import FilterCardsSkeleton from './Skeleton/FilterCardsSkeleton'

function FilterContainer({ cardData }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardData) return setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {/* <FiltersTab/> */}
      {isLoading ? <FilterCardsSkeleton />
        : <FilterCards cardData={cardData} />
      }

    </>
  )
}

export default FilterContainer