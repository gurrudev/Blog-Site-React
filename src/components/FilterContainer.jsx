/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import FiltersTab from './FiltersTab'
import FilterCards from './FiltersCards'

function FilterContainer({ cardData }) {
  
  return (
    <>
       <FilterCards cardData={cardData} />
    </>
  )
}

export default FilterContainer