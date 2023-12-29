import React from 'react'
import pic from '../assets/img/banner.jpg'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import Footer from '../components/Footer'
const BlogPost = () => {

    const navigate = useNavigate();

    return (
        <>
            <main className="pb-4">

                <div className="relative overflow-hidden">
                    <div className="w-full h-80">
                        <img className="w-full h-full object-cover" src={pic} alt="Image" />
                        <div className="absolute inset-0 bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                        <div className="absolute top-0 left-0 p-6 text-white text-2xl cursor-pointer" onClick={() => navigate('/')}>
                            <FaArrowLeft />
                        </div>
                        <div className='py-4  px-6  mx-auto w-full max-w-3xl md:pl-14 md:pr-14'>
                            <div className="max-w-3xl absolute bottom-1 text-white pb-6">
                                <div className='flex gap-2 pb-3 form-text text-sm'>
                                    <span className='bg-white bg-opacity-20 backdrop-blur-2xl py-1 px-2 rounded-sm'>Travel</span>
                                    <span className='bg-white bg-opacity-20 backdrop-blur-2xl py-1 px-2 rounded-sm'>Adventure</span>
                                </div>
                                <h1 className="text-[30px] leading-tight uppercase pb-2 form-heading">Best practices and the for successful prototypes.</h1>
                                <div className='flex gap-2 text-sm'>
                                    <p>by {"Joanna Bob"} &nbsp; ── </p>
                                    <div className='flex gap-1'>
                                        <span className='pt-1'><MdOutlineDateRange /></span>
                                        <p>{"June 28, 2023"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 px-6">
                    <article className="mx-auto w-full max-w-3xl md:pl-14 md:pr-14">
                        <div className='form-text'>
                            Lorem ipsumh dolor sit, fuga sit aliquid nesciunt at a vel pariatur blanditiis dolor provident sapiente accusamus exercitationem eligendi iure reiciendis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam deserunt! Porro quisquam placeat odit veritatis vel itaque libero et nemo aliquid quasi! Architecto harum quae excepturi vero quia neque?
                            Cum, rem? Architecto hic aliquid ratione ipsam omnis est quasi, deleniti odit optio qui quaerat doloribus facere ad sunt rerum dolor at non numquam perferendis ea dignissimos dicta ex reiciendis.
                            Sequi debitis velit quis voluptas, quaerat est rem temporibus sed, praesentium alias earum perspiciatis aut animi. Labore fugit deleniti non, numquam error similique. Quos voluptate magnam debitis, nostrum facere et.
                            Illo architecto non perspiciatis tempora optio sunt omnis porro at ratione laborum magni recusandae, consectetur suscipit iure repellat iste veniam quibusdam id impedit odio corporis aut. Harum quis earum delectus!
                            Officia numquam corrupti ullam ipsam! Labore nostrum nobis deserunt temporibus tenetur ipsam porro atque, deleniti sit, incidunt nemo vero. Voluptatem nam dolore reprehenderit dicta illo corporis animi sint laborum tenetur!
                            Optio molestiae ab, dolor quam natus ullam consequuntur itaque possimus ut reiciendis ipsa adipisci facilis quasi necessitatibus nisi veniam corrupti similique esse ea exercitationem, voluptatem est rem eos! Soluta, eum!
                            officiis aspernatur reiciendis asperiores mollitia molestias, nisi, minima eius quas, beatae eaque! Ullam ratione mollitia fugit officiis ab libero aliquid accusantium quos amet. Facilis dignissimos molestiae similique omnis fuga.
                            Distinctio non nulla consectetur? Unde suscipit harum ex, optio facere assumenda cum modi quibusdam quia, maiores in ad nihil tempora excepturi consectetur, consequuntur dolor amet. Molestias totam omnis laborum quia.
                            Ullam neque tenetur corrupti facilis vero magnam culpa totam sapiente harum odit. Accusamus unde dolor laborum deleniti, repudiandae porro suscipit vel facilis mollitia magni perspiciatis blanditiis quidem, vitae, odit iste. quasi similique nemo odit voluptate? Nihil enim fugit voluptate accusamus sint.
                        </div>
                    </article>
                </div>
            </main>
            <Footer />

        </>
    )
}

export default BlogPost