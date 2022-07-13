import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React from 'react'

const authors = ["Mr. John Deo", "Mr. Sanjay Kapor", "Mr. Jems Denor", "Mr. Dhilan"]

function Author() {
    return (

        <div className='absolute top-2 right-48'>

            <Menu>
                <Menu.Button className="w-[156px] p-1 h-[38px] rounded-lg border-[1px] border-themetext  flex items-center justify-evenly font-Inter font-normal ">
                    By Author
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg></Menu.Button>

                <Menu.Items>s
                    <div className='flex flex-col border-[1px] border-themetext rounded w-[156px] p-3 space-y-4 bg-white z-50 '>
                        {authors.map((author: string, index: number) => (
                            <React.Fragment key={index}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href={author}
                                            className={`${active && 'bg-blue-500'}`}
                                        >
                                            {author}
                                        </Link>
                                    )}
                                </Menu.Item>
                            </React.Fragment>
                        ))}
                    </div>

                </Menu.Items>
            </Menu>
        </div>
    )
}
export default Author;