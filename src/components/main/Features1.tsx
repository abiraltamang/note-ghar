import React from "react";
import Image from "next/image";

const Features1 = () => {
    return (
        <div className="relative hidden lg:block w-full h-32 ">
            <div className="absolute -top-24 xl:-top-40  h-full w-full ">
                <div className="flex w-full h-full justify-evenly items-baseline space-x-6 ">
                    <div className="relative w-[21vw] h-[19vw] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
                            <div>
                                <Image src="/featureicon1.png" alt="cover image" width={50} height={50} />
                            </div>
                            <h2 className="font-bold text-xl text-center">Easy Accessible</h2>
                            <p className=" text-sm text-center mx-6">It is a long established fact that a
                                reader will be distracted by
                                the readable content.</p>
                        </div>
                    </div>
                    <div className="relative w-[20vw] h-[18vw] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
                            <div>
                                <Image src="/featureicon2.png" alt="cover image" width={50} height={50} />
                            </div>
                            <h2 className="font-bold text-xl text-center">Perfect Notes</h2>
                            <p className=" text-sm text-center mx-6">It is a long established fact that a
                                reader will be distracted by
                                the readable content.</p>
                        </div>
                    </div>
                    <div className="relative w-[20vw] h-[18vw] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
                            <div>
                                <Image src="/featureicon3.png" alt="cover image" width={50} height={50} />
                            </div>
                            <h2 className="font-bold text-xl text-center">Save Your Time</h2>
                            <p className=" text-sm text-center mx-6">It is a long established fact that a
                                reader will be distracted by
                                the readable content.</p>
                        </div>
                    </div>
                    <div className="relative w-[20vw] h-[18vw] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
                            <div>
                                <Image src="/featureicon4.png" alt="cover image" width={50} height={50} />
                            </div>
                            <h2 className="font-bold text-xl text-center">Share and Earn</h2>
                            <p className=" text-sm text-center mx-6">It is a long established fact that a
                                reader will be distracted by
                                the readable content.</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default Features1;