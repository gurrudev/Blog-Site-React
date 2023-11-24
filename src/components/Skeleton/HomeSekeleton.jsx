import React from 'react'

const HomeSekeleton = () => {
    return (

        <div role="status" class="max-w-sm animate-pulse md:p-6 ">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-200 dark:bg-gray">

            </div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-48 mb-4"></div>
            <div className='flex justify-between'>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-32 mb-2"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-32 mb-2"></div>
            </div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray"></div>
            <div class="flex items-center mt-4">
                <div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray w-32 mb-2"></div>
                </div>
            </div>
            <span class="sr-only">Loading...</span>
        </div>

    )
}

export default HomeSekeleton