import React from "react";
import { useRouter } from "next/router";
import APIS from "../../../../helpers/EndPoints";
import useGetHook from "../../../../hooks/useGetHooks";
import Details from "../../../../components/backend/notes/Details";
import LoadingSpinner from "../../../../components/reusable/loadingspinner/Spinner";

export default function Notedetails() {
  const router = useRouter();

  const { noteID } = router.query;

  const { isLoading: noteDetailDataLoading, data: noteDetailData } = useGetHook(
    {
      queryKey: "authorlist",
      url: `${APIS.NOTES}${noteID}`,
      parma: "",
      auth: true,
    }
  );
  return (
    <div className="flex bg-[#EEF1F8]  space-x-[20px]">
      {noteDetailDataLoading ? (
        <LoadingSpinner />
      ) : (
        <Details noteDetailData={noteDetailData} />
      )}
    </div>
  );
}
