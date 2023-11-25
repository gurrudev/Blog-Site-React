import React from 'react'
import './FiltersCards.css'
function FiltersCards() {
  return (
    <>
      <div className="filter-container ">
        <div className='hidden lg:block'>
          <div className="filter-cards-container">
            <div className='main-card'>
              <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
              <h2 className='uppercase overflow-wrap'>We have launched Flowbite Blocks featuring over</h2>
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
                  <h3 className='uppercase overflow-wrap'>We have launched Flowbite Blocks featuring over</h3>
                  <p className='date'>June 28, 2023</p>
                </div>
              </div>

              <div className="sub-cards-col">
                <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
                <div className="sub-card-title">
                  <h3 className='uppercase overflow-wrap'>We have launched Flowbite Blocks featuring over</h3>
                  <p className='date'>June 28, 2023</p>
                </div>
              </div>

              <div className="sub-cards-col">
                <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
                <div className="sub-card-title">
                  <h3 className='uppercase overflow-wrap'>We have launched Flowbite Blocks featuring over</h3>
                  <p className='date'>June 28, 2023</p>
                </div>
              </div>

              <div className="sub-cards-col">
                <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
                <div className="sub-card-title">
                  <h3 className='uppercase overflow-wrap'>We have launched Flowbite Blocks featuring over We have launched Flowbite Blocks featuring over</h3>
                  <p className='date'>June 28, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent">
          <div className="sub-cards-col">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title">
              <p className='uppercase overflow-wrap'>TitleTitleTitle</p>
              <p className='date'>June 28, 2023</p>
            </div>
          </div>


          <div className="sub-cards-col">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title">
              <p className='uppercase overflow-wrap'>Title</p>
              <p className='date'>June 28, 2023</p>
            </div>
          </div>

          <div className="sub-cards-col">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title">
              {/* <div className=''> */}

                <p className='uppercase overflow-wrap'>We have launched Flowbite Blocks featuring over</p>
                <p className='date'>June 28, 2023</p>
              {/* </div> */}
            </div>
          </div>

          <div className="sub-cards-col ">
            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" srcSet="" />
            <div className="sub-card-title ">
              <p className='uppercase overflow-wrap'>We have launched Flowbite Blocks featuring over</p>
              <p className='date'>June 28, 2023</p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default FiltersCards