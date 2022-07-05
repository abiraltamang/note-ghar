import Router from "next/router";
import Image from "next/image";
const Work = () => {
    return (

        <div className='grid grid-cols-2 my-20'>
            <div className="flex items-center justify-center">
                <div>
                    <Image src='/work.png' width={400} height={400}></Image>
                </div>
            </div>
            <div className='flex flex-col mr-32 text-[#37474F] space-y-6' >
                <div>
                    <h1 className='leading-[59px] text-5xl  font-bold font-Jost'>How it Works</h1>
                </div>
                <div className='mt-3 leading-6 font-Inter'>
                    <p >Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion  </p>
                    <p>consectetur elit. Vesti at bulum odio aea the dumm the ipsumm</p>
                    <p>suada and consectetur elit.</p>


                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w1.png" alt="" width={50} height={50} />
                    </div>
                    <div className='flex flex-col space-y-2 pr-28'>
                        <h1 className='text-2xl font-bold font-Jost '>Write your Notes or Upload It</h1>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w2.png" alt="" width={50} height={50} />
                    </div>
                    <div className='flex flex-col space-y-2 pr-28'>
                        <h1 className='text-2xl font-bold font-Jost '>Categorized It In Related Subjects</h1>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w3.png" alt="" width={50} height={50} />
                    </div>
                    <div className='flex flex-col space-y-2 pr-28'>
                        <h1 className='text-2xl font-bold font-Jost '>Access Your Notes Anywhere</h1>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit, is slorem ipsum dolarorit.</p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Work;