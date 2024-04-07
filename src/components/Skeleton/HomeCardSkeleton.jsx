import React from 'react'

const HomeCardSkeleton = () => {
    return (

        <div role="status" className="max-w-sm animate-pulse md:p-6 ">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-200 dark:bg-gray">

            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-48 mb-4"></div>
            <div className='flex justify-between'>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-32 mb-2"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-32 mb-2"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray"></div>
            <div className="flex items-center mt-4">
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-32 mb-2"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>

    )
}

export default HomeCardSkeleton