import React, { useEffect } from "react";
import AuthorDropdown from "./dropdown/AuthorDropdown";
import Category from "./dropdown/Category";
import ViewLinks from "../reusable/customLink/ViewLinks";
import CustomeTable from "../reusable/custometable/CustomeTable";
import moment from "moment";
import LoadingSpinner from "../reusable/loadingspinner/Spinner";
import Datefilter from "./dropdown/Datefilter";

const columns = [
  { field: "sn", header: "S.NO" },
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "author", header: "Author" },
  { field: "reader", header: "Reader" },
  { field: "date", header: "Date" },
  { field: "price", header: "Price" },
  { field: "status", header: "Status" },
  { field: "action", header: "Action" },
];

type Props = {
  notesListLoading: any;
  notesListDatas: any;
};
const Notes = (props: Props) => {
  const { notesListDatas, notesListLoading } = props;
  console.log(notesListDatas, "notesListDatas");

  let data: any = [];
  notesListLoading
    ? ""
    : notesListDatas?.map((list: any, index: any) =>
        data.push({
          sn: index + 1,
          title: list?.title,
          category: "N/A",
          author: list.user.profile?.full_name,
          reader: "Reader",
          date: moment(list.user.date_joined).format("DD-MM-YYYY"),
          price: "100",
          status: "sdf",
          action: <ViewLinks linksto={`Notes/${list.id}`} />,
        })
      );
  return (
    <div className=" relative h-screen w-[100%] bg-white rounded-lg grid grid-cols-5 ">
      <div className="col-span-5">
        <div
          className="flex justify-between  items-start"
          style={{ padding: "1rem 1rem 0 1rem" }}
        >
          <h2 className="font-Inter text-lg font-medium">Notes list</h2>
          <div className="flex space-x-5">
            <AuthorDropdown />
            <Datefilter />
            <Category />
          </div>
        </div>
        {notesListLoading === true ? (
          <LoadingSpinner />
        ) : (
          <CustomeTable
            data={data}
            columns={columns}
            hover={true}
            striped={true}
          />
        )}
      </div>
    </div>
  );
};
export default Notes;
