import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { url } from 'inspector';
type Props = {
    image: any,
}
export default function Cards({ image }: Props) {
    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full" src={`/${image}.jpg`} alt="Sunset in the mountains" width={400} height={400} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Economics Complete Note</div>
                <p className="text-gray-700 text-base">
                </p>It is a long established fact that a reader will be distracted for the post.
            </div>
            <div className='flex items-center justify-between m-5'>
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

    )
}
