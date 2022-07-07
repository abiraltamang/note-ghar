import React from 'react';
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';

export default function Footer() {
    return (
        < footer >
            <div className=' relative h-full w-full'>
                <Image src='/footer.png' alt="" className='object-cover object-left-top' layout='fill' style={{ filter: 'brightness(0.2)' }} />
                <div className='relative top-0 left-0 p-14 grid grid-cols-1  md:grid-cols-5 space-y-10 '>
                    <div className='text-white text-lg xl:text-[1.1rem] md:col-span-2 xs:mr-7 sm:mr-10 md:mr-16  xl:mr-20 '>
                        <div className='mb-5 '>
                            <Image src='/logo.png' alt='logo image' height={44.86} width={200} />
                        </div>
                        <p className='text-sm md:text-base'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &aposContent here, content here&apos, making it look like readable English. Many desktop publishing.</p>
                    </div>
                    <div className='col-span-3'>
                        <div className='grid grid-col-1 text-sm lg:text-base xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 space-y-10 xs:space-y-0 '>


                            <div className='flex flex-col space-y-5 text-white md:-ml-6'>
                                <div>
                                    <h1 className='text-xl'>Get In Touch</h1>
                                    <div className="w-14 h-[2px]  bg-button my-3"></div>
                                </div>
                                <div className='flex'>
                                    <div className='my-3 mr-3'>
                                        <Image src='/mail.png' alt='mail' width={20} height={20} layout="fixed" />
                                    </div>
                                    <div >
                                        <h2>Email Address</h2>
                                        <p>testmail@mail.com</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='my-3 mr-3'>
                                        <Image src='/phone.png' alt='mail' width={20} height={20} layout="fixed" />
                                    </div>
                                    <div >
                                        <h2>Phone Contact</h2>
                                        <p>+977-9837485974</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='my-3 mr-3'>
                                        <Image src='/location.png' alt='mail' width={20} height={20} layout="fixed" />
                                    </div>
                                    <div >
                                        <h2>Location</h2>
                                        <p>Kathmandu, Nepal</p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col  text-white'>
                                <div className='mb-5'>
                                    <h1 className='text-xl'>Our Links</h1>
                                    <div className="w-14 h-[2px]  bg-button my-3"></div>
                                </div>
                                <div className='flex flex-col space-y-1 sm:space-y-2 md:space-y-3 '>
                                    <p>Support</p>
                                    <p>About Us</p>
                                    <p>Contact Us</p>
                                    <p>Trending Notes</p>
                                    <p>Become an Author</p>
                                </div>
                            </div>
                            <div className='flex flex-col text-white'>
                                <div className='mb-5'>
                                    <h1 className='text-xl'>Subscribe</h1>
                                    <div className="w-14 h-[2px]  bg-button my-3"></div>
                                </div>
                                <p className='mb-4'>Get latest notes in your mail, subscribe to our newsletter.</p>
                                <div className=" flex flex-col">
                                    <div className='pb-2'>
                                        <input type="text" className="py-1 mb-4 mr-6 rounded-lg border-slate-400 pl-2 bg-transparent border-b-2 outline-none" placeholder="Insert your Email" />
                                    </div>
                                    <ButtonComponent buttontitle="Subscribe" buttoncolor="bg-button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-xs sm:text-base  lg:text-lg flex items-center justify-center bg-black text-white h-12'>
                <p className='mb-2'>Copyright © 2022 NoteGhar - All rights reserved. </p>

            </div>


        </ footer >
    )
}
