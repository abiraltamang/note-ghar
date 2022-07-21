import React, { useState } from "react";
import Signincomponent from "../../components/signin/Signincomponent";
import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";
import { useRouter } from "next/router";
import { getApiData } from "../../helpers/AxiosInstances";
import { postApiData } from "../../helpers/AxiosInstances";
import { getKey, setKey } from "../../helpers/sessionKey";
import { toast, ToastContainer } from "react-toastify";
import { InferGetServerSidePropsType } from "next";
import "react-toastify/dist/ReactToastify.css";

// type Data = {}

// export const getServerSideProps = async () => {
//   const url = APIS.CURRENT_USER;
//   const parma = "";
//   const auth = true;
//   const res = await getApiData(url, parma, auth);
//   console.log(res, "res")
//   // const data = await res.json();

//   // if (!data) {
//   //   return {
//   //     redirect: {
//   //       destination: "/",
//   //       permanent: false,
//   //     },
//   //   };
//   // }

//   return {
//     props: { res }, // will be passed to the page component as props
//   };
// };

const Login = () => {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(false);
  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserData",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });

  console.log(currentUserData, "curretn user role");
  const signInHandler = async (data: any, formikProps: any) => {
    const url = APIS.LOGIN;
    const formData = data;
    const response = await postApiData({ url, formData, formikProps });
    if (response?.status === 200 || response.status === 201) {
      const userAuth = {
        accessToken: response?.data.access,
        refressToken: response.data.refresh,
      };
      setKey("userAuth", JSON.stringify(userAuth));
      toast.success("Login Success!!");
      router.push("/");
    } else {
      toast.error(response?.data.detail || "Login Fail!");
    }
  };
  return (
    <>
      <ToastContainer />
      <Signincomponent signInHandler={signInHandler} />
    </>
  );
};
export default Login;
