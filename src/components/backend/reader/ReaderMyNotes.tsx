import React from "react";
import Link from "next/link";

const lists = [
  {
    title: "Physics note",
    category: "sciene",
    author: "Mr john deo",
    date: "07 jul, 2022",
  },
  {
    title: "Computer note",
    category: "computer sciene",
    author: "Mr man deo",
    date: "07 jul, 2022",
  },
  {
    title: "priniciple of M",
    category: "economics",
    author: "Mr han deo",
    date: "07 jul, 2022",
  },
];

export default function Readerlist() {
  return (
    <div>
      <div className="flex flex-col bg-white p-4 h-[662px] w-full rounded-lg">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-y-auto rounded-t-md">
              <table className="min-w-full">
                <thead className="border-b bg-theme  font-Jost font-light text-white text-[15px]">
                  <tr>
                    <th scope="col" className="  px-6 py-4 text-left">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-4 text-left">
                      Title
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Category
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Author
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Date
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px] font-Inter font-normal">
                  {lists.map((list: any, index: number) => (
                    <tr key={index} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.title}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.category}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.author}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.date}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        <Link href="Readersdetails">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 cursor-pointer opacity-50"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
