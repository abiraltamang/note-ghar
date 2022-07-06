import React from "react";
import Image from "next/image";

const Features1 = () => {
    return (
        <div className="relative w-full h-32 ">
            <div className="absolute -top-40  h-full w-full ">
                <div className="flex w-full h-full justify-evenly items-baseline space-x-6 ">
                    <div className="relative w-[305px] h-[293px] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-10 left-13 m-7">
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <Image src="/featureicon1.png" alt="cover image" width={50} height={50} />
                                </div>
                                <h2 className="font-bold text-xl text-center mt-2">Easy Accessible</h2>
                                <p className=" text-base text-center mt-2">It is a long established fact that a
                                    reader will be distracted by
                                    the readable content.</p>
                            </div>
                        </div>

                    </div>
                    <div className="relative w-[305px] h-[293px] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-10 left-13 m-7">
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <Image src="/featureicon2.png" alt="" width={50} height={50} />
                                </div>
                                <h2 className="font-bold text-xl text-center mt-2">Perfect Notes</h2>
                                <p className=" text-base text-center mt-2">It is a long established fact that a
                                    reader will be distracted by
                                    the readable content.</p>
                            </div>
                        </div>

                    </div>
                    <div className="relative w-[305px] h-[293px] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-10 left-13 m-7">
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <Image src="/featureicon3.png" alt="" width={50} height={50} />
                                </div>
                                <h2 className="font-bold text-xl text-center mt-2">Save Your Time</h2>
                                <p className=" text-base text-center mt-2">It is a long established fact that a
                                    reader will be distracted by
                                    the readable content.</p>
                            </div>
                        </div>

                    </div>
                    <div className="relative w-[305px] h-[293px] bg-white rounded-lg shadow-xl">
                        <div className="absolute top-10 left-13 m-7">
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <Image src="/featureicon4.png" alt="" width={50} height={50} />
                                </div>
                                <h2 className="font-bold text-xl text-center mt-2">Save and Earn</h2>
                                <p className=" text-base text-center mt-2">It is a long established fact that a
                                    reader will be distracted by
                                    the readable content.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Features1;