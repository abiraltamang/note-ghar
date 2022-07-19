import React from "react";
import Rating from "../notes/Rating";
type Props = {
  price: any;
};
export default function PriceRating({ price }: Props) {
  return (
    <>
      <div className="relative flex items-center w-[75vw] h-[36px] xs:w-[38.150vw] md:w-[23.828vw]  lg:w-[18.403vw]  bg-black opacity-50 rounded-[5px] "></div>
      <div className="absolute w-full h-full flex items-center justify-between px-5 top-0  ">
        <span className="text-sm font-medium font-Jost text-white ">
          Price: Rs {price}
        </span>
        <Rating textColor="text-white" />
      </div>
    </>
  );
}
