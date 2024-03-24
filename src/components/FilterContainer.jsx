import React from 'react'
import FiltersTab from './FiltersTab'
import FilterCards from './FiltersCards'
function FilterContainer({cardData}) {
  return (
    <>
    {/* <FiltersTab/> */}
    <FilterCards cardData={cardData}/>
    </>
  )
}

export default FilterContainer