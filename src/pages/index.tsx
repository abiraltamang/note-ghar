import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getKey } from "../helpers/sessionKey";
import CallAction from "../components/frontend/main/CallAction";
import Courses from "../components/frontend/main/Courses";
import Coverpage from "../components/frontend/main/Coverpage";
import Features1 from "../components/frontend/main/Features1";
import Features2 from "../components/frontend/main/Features2";
import Testimonial from "../components/frontend/main/Testimonial";
import Work from "../components/frontend/main/Work";
import APIS from "../helpers/EndPoints";
import useGetHook from "../hooks/useGetHooks";
import { getApiData } from "../helpers/AxiosInstances";
import MainLayout from "../Layouts/MainLayout";
import { useRouter } from "next/router";


type Props = {
  data: any;
};

const Home = (props: Props) => {
  const router = useRouter();
  const [loadPage, setLoadPage] = useState(false);
  const { data } = props;
  console.log(data, "data ssr")

  useEffect(() => {
    if (!getKey("userAuth")) {
      router.push("/Signin");
    } else {
      setLoadPage(true);
    }
  }, []);
  
  const { isLoading: currentUserLoading, data: courseData } = useGetHook({
    queryKey: "courseData",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });

  return (
    <>
      {loadPage ? (
        <MainLayout>
          <Coverpage height={700} />
          <Features1 />
          <Features2 />
          <Courses currentUserLoading={currentUserLoading} courseData={courseData} />
          <CallAction />
          <Work />
          <Testimonial />
        </MainLayout>
      ) : null}
    </>
  );
};

export default Home;
// export const getServerSideProps = async () => {
//   const url = APIS.NOTES;
//   const parma = "";
//   const auth = true;
//   const response = await getApiData(url, parma, auth);
//   if (!response) {
//     return {
//       props: {},
//     };
//   }

//   const data = await response.json()
//   console.log(data, "data ssr root")
//   return {
//     props: { data },
    
//   };
// };
