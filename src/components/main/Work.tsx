import Router from "next/router";
import Image from "next/image";
const Work = () => {
    return (

        <div className='grid grid-cols-2 sm:my-5 lg:my-0 xl:p-7 lg:grid-cols-4'>
            <div className="flex items-center justify-center col-span-2 order-1">
                <div className="">
                    <Image src='/work.png' alt="image" width={400} height={400} layout='intrinsic'></Image>
                </div>
            </div>
            <div className='m-4 xs:m-6 sm:m-8 md:m-10 lg:ml-0  flex flex-col md:pr-5 md:py-5  lg:py-10 lg:pr-10 xl:py-14 xl:pr-12  text-[#37474F]  space-y-4 sm:space-y-6 col-span-2 order-2' >
                <div>
                    <h1 className='text-2xl sm:text-3xl lg:text-heading  font-bold font-Jost'>How it Works</h1>
                </div>
                <div className='text-xs xs:text-sm sm:text-para font-medium  mt-3  '>
                    <p className=" font-medium text-sm sm:text-base    font-Inter leading-normal">Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion consectetur elit. Vesti at bulum odio aea the dumm the ipsumm suada and consectetur elit.</p>


                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w1.png" alt="image" width={40} height={40} layout='fixed' />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost '>Write your Notes or Upload It</h1>
                        <p className=" text-sm sm:text-base font-medium  sm:mt-3 md:mr-32 lg:mr-0 font-Inter leading-normal  ">Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w2.png" alt="image" width={40} height={40} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost '>Categorized It In Related Subjects</h1>
                        <p className=" text-sm sm:text-base font-medium  sm:mt-3 md:mr-32 lg:mr-0 font-Inter leading-normal ">Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4 '>
                        <Image src="/w3.png" alt="image" width={40} height={40} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost  '>Access Your Notes Anywhere</h1>
                        <p className=" font-medium  mt-3  font-Inter leading-normal">Grursus mal suada faci lisis Lorem ipsum dolarorit, is slorem ipsum dolarorit.</p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Work;