import React, { useEffect } from "react";
import Authorlist from "../../../components/backend/author/Authorlist";
import useGetHook from "../../../hooks/useGetHooks";
import APIS from "../../../helpers/EndPoints";
import AuthorDropDown from "../../../components/backend/dropdown/AuthorDropdown";
import Category from "../../../components/backend/dropdown/Category";

const Authors = () => {
  const { isLoading: authorListLoading, data: authorListDatas } = useGetHook({
    queryKey: "authorListData",
    url: APIS.AUTHORS,
    parma: "",
    auth: true,
  });

  return (
    <div className=" overflow-scroll">
      <div
        className="flex justify-between items-start bg-white"
        style={{ padding: "1rem 1rem 0 1rem" }}
      >
        <h2 className="font-Inter text-lg font-medium">Notes list</h2>
        <div className="flex space-x-5">
          <AuthorDropDown />
          <Category />
        </div>
      </div>
      <Authorlist
        authorListLoading={authorListLoading}
        authorLists={authorListDatas}
      />
    </div>
  );
};
export default Authors;
