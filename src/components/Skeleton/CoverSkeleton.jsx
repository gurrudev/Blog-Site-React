import React from 'react'

const CoverSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className='hidden lg:block md:block p-20 sm:pb-12 sm:pt-0'>
                <div className="relative ">
                    <div className='w-full h-[320px] flex flex-col items-center justify-center bg-gray-100' >
                        <div class="flex flex-col items-center justify-center gap-4">
                            <div class="lg:w-[850px] md:w-[550px] h-5 bg-gray-200 rounded-full "></div>
                            <div class="w-[550px] h-4 bg-gray-200 rounded-full "></div>
                            <div class="w-32 p-5 bg-gray-200 rounded "></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoverSkeleton