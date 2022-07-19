import React, { useEffect, useState } from "react";
import Notes from "../../../components/backend/Notes";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

const Dashboard = () => {
  const [data, setData] = useState([])
  const { isLoading: notesListLoading, data: notesListDatas } = useGetHook({
    queryKey: "authorlist",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });

  useEffect(()=>{
    setData(notesListDatas)
  },[notesListDatas])

  return (
    <div>
      <Notes
        notesListLoading={notesListLoading}
        notesListDatas={data}
      />
    </div>
  );
};
export default Dashboard;
