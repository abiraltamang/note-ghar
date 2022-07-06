import React from 'react'

type Props = {
    buttontitle: any,
    buttoncolor: any,
};
export default function ButtonComponent({ buttontitle, buttoncolor }: Props) {
    return (
        <div>
            <button className={` ${buttoncolor} bg-border-button text-white p-2 px-8 rounded-lg cursor-pointer `}>
                {buttontitle}
            </button>
        </div>
    )
}
