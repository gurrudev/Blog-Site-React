import React, { useEffect, useState } from 'react'
import './FiltersCards.css'
import { Link } from 'react-router-dom'
import cardDate from '../utils/cardDate'
import truncate from '../utils/Truncate'
import strippedString from '../utils/strippedString'


function FiltersCards({ cardData }) {

  console.log(cardData)

  let filteredData = cardData.slice(1, 5)

  console.log(filteredData)

  let recentData = cardData.slice(0, 5)

  return (
    <>
      <h1 className='p-8 pb-0 pt-0 sm:p-20 sm:pt-0 sm:pb-10 text-2xl form-heading'>"Recomended"</h1>
      <div className="filter-container p-8  sm:p-20 sm:pt-0 sm:pb-10">

        <div className='hidden lg:block'>
          <div className="filter-cards-container">

            <div className='main-card'>
              <img src={cardData[0]?.image_url} alt="" srcSet="" />
              <h2 className='uppercase overflow-wrap'>{cardData[0]?.title}</h2>
              <div className="user-details text-slate-700">
                <span className=''>by {cardData[0]?.username}</span>
                <span className=''>{cardDate(cardData[0]?.createdAt)}</span>
              </div>
              <p className='des max-w-4xl text-justify'>{cardData[0]?.description ? truncate(strippedString(cardData[0]?.description)) : "No description available"}</p>
              <Link to={`/post/${cardData[0]?._id}`}>View Post</Link> <span className='underline'></span>
            </div>

            <div className="sub-cards">
              {filteredData.map((item, index) =>(
                <div className="sub-cards-col2" key={index}>
                <img className='sub-cards-col2-img' src={item.image_url} alt="" srcSet="" />
                <div className="sub-card-title">
                  <h3 className='uppercase overflow-wrap'>{item.title}</h3>
                  <span className='text-sm text-slate-700'>{cardDate(item.createdAt)}</span>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="recent">
          {recentData.map((item, index)=>(
          <div className="sub-cards-col" key={index}>
            <img src={item.image_url} alt="" srcSet="" />
            <div className="sub-card-title">
              <p className='uppercase overflow-wrap text-sm'>{item.title}</p>
              <span className='text-sm text-slate-700'>{cardDate(item.createdAt)}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FiltersCards