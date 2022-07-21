import React from "react";
import { useRouter } from "next/router";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";
import Details from "../../../components/backend/notes/Details";
import LoadingSpinner from "../../../components/reusable/loadingspinner/Spinner";
import { GetServerSideProps, NextPage } from "next";
import { getApiData } from "../../../helpers/AxiosInstances";

type Props = {
  data: any;
};

const Notedetails = (props: Props) => {
  const { data } = props;
  console.log(data, "noteData SSR");
  // if (!props.data) {
  //   return <h1>statusCode={404}</h1>;
  // }
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
  console.log(noteDetailData, "noteDetailData");
  return (
    <div className="flex bg-[#EEF1F8]  space-x-[20px]">
      {noteDetailDataLoading ? (
        <LoadingSpinner />
      ) : (
        <Details noteDetailData={noteDetailData} />
      )}
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({
//   params,
//   res,
// }) => {
//   try {
//     // const { noteID } = params;
//     const url = `${APIS.NOTES}`;
//     const auth = true;
//     const parma = ""
//     const data = await getApiData(url, parma, auth);
//     return {
//       props: data ,
//     };
//   } catch {
//     res.statusCode = 404;
//     return {
//       props: {},
//     };
//   }
// };
export default Notedetails;
