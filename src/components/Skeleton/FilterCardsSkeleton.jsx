import React from 'react'

const FilterCardsSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <h1 className='p-8 pb-0 pt-0 sm:p-20 sm:pt-0 sm:pb-10 text-2xl form-heading '>"Recomended"</h1>
            <div className="filter-container p-8  sm:p-20 sm:pt-0 sm:pb-10">

                <div className='hidden lg:block'>
                    <div className="filter-cards-container">
                        <div className='main-card'>
                            <div className="flex items-center justify-center h-64 w-80 mb-4 bg-gray-200 ">

                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full  w-80 mb-4"></div>
                            <div className='flex justify-between'>
                                <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full "></div>
                            <div className="flex items-center mt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                                </div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="sub-cards">
                            {Array(4).fill(0).map((item, index) => (
                                <div className="sub-cards-col2" key={index}>
                                    <div class="flex items-center justify-center bg-gray-200 rounded w-56 h-28"/>
                                    <div class="w-full">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                                        <div class="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                                        <div class="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                                        <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                                        
                                    </div>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="recent">
                    {Array(5).fill(0).map((item, index) => (
                        <div className="sub-cards-col " key={index}>
                            <div class="flex items-center justify-center bg-gray-200 rounded w-40 h-20"/>
                            <div class="w-full">
                                <div class="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                                
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterCardsSkeleton