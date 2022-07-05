import React from 'react'

type Props = {
    buttontitle: any,
};
export default function ButtonComponent({ buttontitle }: Props) {
    return (
        <div>
            <button className="bg-button border-button text-white p-2 px-8 rounded-lg cursor-pointer ">
                {buttontitle}
            </button>
        </div>
    )
}
