import React from 'react';
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';

export default function Footer() {
    return (
        <footer className='relative bg-black'>
            <Image src="/footer.png" alt="footer image" className='object-cover object-top' height={400} width={1660} style={{ filter: "brightness(0.15)" }} />
            <div className='absolute top-0 left-0 p-14 grid grid-cols-5 gap-10'>
                <div className='text-white text-[1.1rem] col-span-2  mr-40'>
                    <div className='mb-5'>
                        <Image src='/logo.png' alt='logo image' height={44.86} width={200} />
                    </div>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &aposContent here, content here&apos, making it look like readable English. Many desktop publishing.</p>
                </div>
                <div>
                    <div className='flex flex-col space-y-5 text-white'>
                        <div>
                            <h1 className='text-xl'>Get In Touch</h1>
                            <div className="w-14 h-[2px]  bg-button my-3"></div>
                        </div>
                        <div className='flex'>
                            <div className='my-3 mr-4'>
                                <Image src='/mail.png' alt='mail' width={20} height={20} />
                            </div>
                            <div className='flex flex-col'>
                                <h2>Email Address</h2>
                                <p>testmail@mail.com</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='my-3 mr-4'>
                                <Image src='/phone.png' alt='phone' width={20} height={20} />
                            </div>
                            <div className='flex flex-col'>
                                <h2>Phone Contact</h2>
                                <p>+977-9837485974</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='my-3 mr-4'>
                                <Image src='/location.png' alt='phone' width={20} height={20} />
                            </div>
                            <div className='flex flex-col'>
                                <h2>Location</h2>
                                <p>Kathmandu, Nepal</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='flex flex-col  text-white'>
                    <div className='mb-5'>
                        <h1 className='text-xl'>Our Links</h1>
                        <div className="w-14 h-[2px]  bg-button my-3"></div>
                    </div>
                    <div className='flex flex-col space-y-4'>

                        <p>Support</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Trending Notes</p>
                        <p>Become an Author</p>
                    </div>

                </div>
                <div className='flex flex-col  text-white'>
                    <div className='mb-5'>
                        <h1 className='text-xl'>Subscribe</h1>
                        <div className="w-14 h-[2px]  bg-button my-3"></div>
                    </div>
                    <p className='mb-4'>Get latest notes in your mail, subscribe to our newsletter.</p>
                    <div className=" flex flex-col">
                        <div className='pb-2'>
                            <input type="text" className="py-1 mb-4 mr-6 rounded-lg border-slate-400 pl-2 bg-transparent border-b-2 outline-none" placeholder="Insert your Email" />
                        </div>
                        <ButtonComponent buttontitle="Submit" />
                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center bg-black text-white h-12'>
                <p className='mb-2'>Copyright © 2022 NoteGhar - All rights reserved. </p>

            </div>


        </ footer>
    )
}
