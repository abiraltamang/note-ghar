import React, { useEffect } from "react";
import Signincomponent from "../../components/signin/Signincomponent";
import APIS from "../../helpers/EndPoints";
import { useRouter } from "next/router";
import { postApiData } from "../../helpers/AxiosInstances";
import { getKey, setKey } from "../../helpers/sessionKey";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();

  const signInHandler = async (data: any, formikProps: any) => {
    const url = APIS.LOGIN;
    const formData = data;
    const response = await postApiData({ url, formData, formikProps });
    console.log("response", response);
    if (response?.status === 200 || response.status === 201) {
      const userAuth = {
        accessToken: response?.data.access,
        refressToken: response.data.refresh,
      };
      setKey("userAuth", JSON.stringify(userAuth));
      toast.success("Login Success!!");
      router.push("/Dashboard/Notes");
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
}
