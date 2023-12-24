import React from 'react'

const NotFound404 = () => {
    return (
        <>
            <section class="mt-6">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h1 class="mb-4 text-7xl text-slate-900 tracking-tight font-extrabold lg:text-9xl">4O4</h1>
                        <p class="mb-4 text-3xl tracking-tight font-bold text-slate-700 md:text-4xl ">Something's missing.</p>
                        <p class="mb-4 text-lg font-light text-gray-600 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        <a href="/" class="inline-flex text-white bg-black rounded-sm text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound404