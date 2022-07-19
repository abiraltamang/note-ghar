import React from "react";
import Link from "next/link";
import LoadingSpinner from "../../reusable/loadingspinner/Spinner";
import moment from "moment";
import ViewLinks from "../../reusable/customLink/ViewLinks";
import CustomeTable from "../../reusable/custometable/CustomeTable";

const headerList = [
  { name: "S.No" },
  { name: "Title" },
  { name: "Category" },
  { name: "list" },
  { name: "Readers" },
  { name: "Date" },
  { name: "Status" },
  { name: "Action" },
];
const columns = [
  { field: "sn", header: "S.NO" },
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "list", header: "List" },
  { field: "reader", header: "Reader" },
  { field: "date", header: "Date" },
  { field: "status", header: "Status" },
  { field: "action", header: "Action" },
];

type Props = {
  readerListDatas: any;
  readerListDatasLoading: any;
};
const Readerlist = (props: Props) => {
  const { readerListDatas, readerListDatasLoading } = props;

  let data: any = [];
  readerListDatasLoading
    ? ""
    : readerListDatas.map((list: any, index: any) =>
        data.push({
          sn: index + 1,
          title: list.user.profile?.full_name || "N/A",
          category: list.user.email || "N/A",
          list: list.user.mobile_number || "N/A",
          reader: "Reader",
          date: moment(list.user.date_joined).format("DD-MM-YYYY"),
          status: "sdf",
          action: (
            <ViewLinks linksto={`Authors/Authordetails/${list.user.id}`} />
          ),
        })
      );

  return readerListDatasLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <CustomeTable data={data} columns={columns} hover={true} striped={true} />
    </>
  );
};
export default Readerlist;
