import React from "react";
import moment from "moment";
import ViewLinks from "../../reusable/customLink/ViewLinks";
import CustomeTable from "../../reusable/custometable/CustomeTable";
import LoadingSpinner from "../../reusable/loadingspinner/Spinner";

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
  authorLists: any;
  authorListLoading: any;
};
const Authorlist = (props: Props) => {
  const { authorLists, authorListLoading } = props;
  console.log(authorLists, "authorlists");

  let data: any = [];
  authorListLoading
    ? ""
    : authorLists.map((list: any, index: any) =>
        data.push({
          sn: index + 1,
          title: list.user.profile?.full_name,
          category: list.user.email,
          list: list.user.mobile_number,
          reader: "Reader",
          date: moment(list.user.date_joined).format("DD-MM-YYYY"),
          status: "sdf",
          action: (
            <ViewLinks linksto={`Authors/Authordetails/${list.user.id}`} />
          ),
        })
      );

  console.log(data, "data");
  return authorListLoading ? (
    <LoadingSpinner />
  ) : (
    <CustomeTable data={data} columns={columns} hover={true} striped={true} />
  );
};
export default Authorlist;
