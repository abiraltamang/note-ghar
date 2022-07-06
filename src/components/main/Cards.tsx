import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cards() {
    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 ml-12 mb-8' >
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course1.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course2.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course3.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course4.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course1.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course2.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course3.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-0 w-72 h-96 shadow-lg shadow-slate-300 rounded-lg grid grid-rows-5'>
                <div className='absolute z-20 px-4 top-44 left-5 font-medium font-Jost leading-1  flex items-center text-white text-sm justify-between  w-64 rounded-md p-2'>
                    <p >Price: Rs 250</p>
                    <p>4.5</p>
                </div>
                <div className='absolute top-44 left-5 bg-black z-10  opacity-50 w-64 h-10 rounded-md p-2'></div>
                <div className=' row-span-3'>
                    <div>
                        <Image src="/course4.jpg" className='object-cover ' alt="card image" width={500} height={400} />
                    </div>
                </div>
                <div className='flex flex-col m-5 row-span-3 space-y-4 text-[#37474F]'>
                    <h2 className='text-lg font-Jost font-medium leading-4 '>Economics Complete Note</h2>
                    <p className='text-sm'>It is a long established fact that a reader
                        will be distracted for the post.</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center justify-center'>
                            <Image src='/book.png' alt="card image" width={20} height={20} />
                            <span className='ml-2'>400 Readings</span>
                        </div>
                        <Link href='Examdetails'>
                            <div className='cursor-pointer text-theme font-bold decoration-none'>
                                Read Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
