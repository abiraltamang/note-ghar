import React from "react";
import Profile from "./Profile";

type Props = {
  userData: any;
};

export default function search(props: Props) {
  const { userData } = props;

  return (
    <div className="relative bg-white px-6 py-4 flex justify-between items-center rounded-md placeholder-Header text-lg">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6  w-6 mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Notes"
          className="outline-none "
        />
      </div>
      <div>
        <Profile userData={userData} />
      </div>
    </div>
  );
}
