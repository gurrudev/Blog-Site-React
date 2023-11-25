import React from 'react'
import './FiltersCards.css'
function FiltersCards() {
  return (
    <>
      <div className="filter-container ">
        <div className="filter-cards-container ">
          <div className='main-card sm:hidden md:block'>
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <h2>Title</h2>
            <div className="user-details">
              <p className='user-name'> ~ Ashutosh Pawar</p>
              <p className='date'>June 28, 2023</p>
            </div>
            <p className='des'>description</p>
            <a href="">View Post</a> <span className='underline'></span>
          </div>

          <div className="sub-cards">
            <div className="sub-cards-col">
              <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
              <div className="sub-card-title">
                <h3>tleTitleTitleTit</h3>
                <p className='date'>June 28, 2023</p>
              </div>
            </div>

            <div className="sub-cards-col">
              <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
              <div className="sub-card-title">
                <h3> eTitleTitleTitleTitle eTitleTitleTitleTitle</h3>
                <p className='date'>June 28, 2023</p>
              </div>
            </div>

            <div className="sub-cards-col">
              <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
              <div className="sub-card-title">
                <h3>tleTitleTitleTitle</h3>
                <p className='date'>June 28, 2023</p>
              </div>
            </div>

            <div className="sub-cards-col">
              <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
              <div className="sub-card-title">
                <h3>Title</h3>
                <p className='date'>June 28, 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="recent">
          <div className="sub-cards-col">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title">
              <h3>TitleTitleTitle</h3>
              <p className='date'>June 28, 2023</p>
            </div>
          </div>


          <div className="sub-cards-col">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title">
              <h3>Title</h3>
              <p className='date'>June 28, 2023</p>
            </div>
          </div>

          <div className="sub-cards-col">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title">
              <h3>Title Title Title wefg erhTitle  </h3>
              <p className='date'>June 28, 2023</p>
            </div>
          </div>

          <div className="sub-cards-col">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title">
              <h3>Title</h3>
              <p className='date'>June 28, 2023</p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default FiltersCards