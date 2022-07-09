import React from 'react';
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';

export default function Footer() {
    return (
        < footer >
            <div className=' relative h-full w-full'>
                <Image src='/footer.png' alt="" className='object-cover object-left-top' layout='fill' style={{ filter: 'brightness(0.2)' }} />
                <div className='relative top-0 left-0 p-10 lg:p-14 grid grid-cols-1  lg:grid-cols-5 space-y-4 '>
                    <div className='text-white  xl:text-[1.1rem] md:col-span-2 xs:mr-7 sm:mr-10 md:mr-16  xl:mr-20 '>
                        <div className='mb-5 '>
                            <Image src='/logo.png' alt='logo image' height={44.86} width={200} />
                        </div>
                        <p className='text-sm md:text-base font-Inter text-[#E5E5E5] lg:mr-6 leading-[26px] '>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &aposContent here, content here&apos, making it look like readable English. Many desktop publishing.</p>
                    </div>
                    <div className='col-span-3'>
                        <div className='grid grid-col-1 text-sm lg:text-base xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 space-y-10 xs:space-y-0 '>


                            <div className='flex flex-col  text-white lg:-ml-9'>
                                <div>
                                    <h1 className='text-xl font-Jost font-medium'>Get In Touch</h1>
                                    <div className="w-14 h-[2px] rounded-md  bg-button my-3"></div>
                                </div>
                                <div className='flex items-center justify-start'>
                                    <div className='my-3 mr-3'>
                                        <div className='relative w-[45px] h-[45px]' >
                                            <Image src='/mail.png' alt='mail' layout="fill" />
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h2 className='font-Jost font-medium leading-[18px]'>Email Address</h2>
                                        <p className='font-Inter font-medium text-xs sm:text-sm md:text-md lg:text-[15px] leading-[15px] text-[#E5E5E5]'>testmail@mail.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start'>
                                    <div className='my-3 mr-3'>
                                        <div className='relative w-[45px] h-[45px]' >
                                            <Image src='/phone.png' alt='mail' layout="fill" />
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h2 className='font-Jost font-medium leading-[18px]'>Phone</h2>
                                        <p className='font-Inter font-medium text-xs sm:text-sm md:text-md lg:text-[15px] leading-[15px] text-[#E5E5E5]'>+977-9837485974</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start'>
                                    <div className='my-3 mr-3'>
                                        <div className='relative w-[45px] h-[45px]' >
                                            <Image src='/location.png' alt='mail' layout="fill" />
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h2 className='font-Jost font-medium leading-[18px]'>location</h2>
                                        <p className='font-Inter font-medium text-xs sm:text-sm md:text-md lg:text-[15px] leading-[15px] text-[#E5E5E5]'>Kathmandu, Nepal</p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col  text-white sm:ml-8'>
                                <div className='mb-5'>
                                    <h1 className='text-xl font-Jost font-medium'>Our Links</h1>
                                    <div className="w-14 h-[2px] rounded-md bg-button my-3"></div>
                                </div>
                                <div className='flex flex-col space-y-1 sm:space-y-2 font-medium font-Inter sm:text-sm  md:text-md lg:text-base leading-[26px]'>
                                    <p>Support</p>
                                    <p>About Us</p>
                                    <p>Contact Us</p>
                                    <p>Trending Notes</p>
                                    <p>Become an Author</p>
                                </div>
                            </div>
                            <div className='flex flex-col text-white mt-5 sm:mt-0'>
                                <div className='mb-5'>
                                    <h1 className='text-xl font-Jost font-medium'>Subscribe</h1>
                                    <div className="w-14 h-[2px] rounded-md  bg-button my-3"></div>
                                </div>
                                <p className='mb-4  sm:text-md md:text-base leading-[26px] font-medium'>Get latest notes in your mail, subscribe to our newsletter.</p>
                                <div className=" flex flex-col">
                                    <div className='pb-2'>
                                        <input type="text" className="py-1 mb-4 mr-6 rounded-lg border-slate-400 pl-2 bg-transparent border-b-2 outline-none" placeholder="Insert your Email" />
                                    </div>
                                    <button className='btn-text w-[145px] orange-btn'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' sm:text-base  lg:text-lg flex items-center justify-center bg-black text-white h-12'>
                <p className='text-xs mb-2 md:text-[15px]'>Copyright © 2022 NoteGhar - All rights reserved. </p>

            </div>


        </ footer >
    )
}
