import Router from "next/router";
import Image from "next/image";
const Work = () => {
    return (

        <div className='grid grid-cols-2 md:grid-cols-4 my-20'>
            <div className="flex items-center justify-center col-span-2">
                <div>
                    <Image src='/work.png' alt="image" width={400} height={400} layout='intrinsic'></Image>
                </div>
            </div>
            <div className='flex flex-col p-10 text-[#37474F] space-y-6 col-span-2' >
                <div>
                    <h1 className='leading-[59px] text-5xl  font-bold font-Jost'>How it Works</h1>
                </div>
                <div className='mt-3 leading-6 font-Inter'>
                    <p >Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion consectetur elit. Vesti at bulum odio aea the dumm the ipsumm suada and consectetur elit.</p>


                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w1.png" alt="image" width={50} height={50} />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-2xl font-bold font-Jost '>Write your Notes or Upload It</h1>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w2.png" alt="image" width={50} height={50} />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-2xl font-bold font-Jost '>Categorized It In Related Subjects</h1>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w3.png" alt="image" width={50} height={50} />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-2xl font-bold font-Jost '>Access Your Notes Anywhere</h1>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit, is slorem ipsum dolarorit.</p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Work;