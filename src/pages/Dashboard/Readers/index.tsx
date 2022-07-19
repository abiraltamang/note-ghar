import React from "react";
import Readerlist from "../../../components/backend/readers/Readerlist";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

export default function Readers() {
  const { isLoading: readerListDatasLoading, data: readerListDatas } = useGetHook({
    queryKey: "authorlist",
    url: APIS.READERS,
    parma: "",
    auth: true,
  }); 

  return (
    <div>
      <Readerlist readerListDatas={readerListDatas} readerListDatasLoading={readerListDatasLoading}/>
    </div>
  );
}
