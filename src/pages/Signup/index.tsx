import React, { useState } from "react";
import { useRouter } from "next/router";
import APIS from "../../helpers/EndPoints";
import { postApiData } from "../../helpers/AxiosInstances";
import Signupcomponent from "../../components/signup/Signupcomponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const signUpHandler = async (data: any, formikProps: any) => {
    const url = APIS.REGISTER;
    console.log(url, "url");
    const formData = data;
    console.log(formikProps, "formik props")
    const response = await postApiData({ url, formData, formikProps });
    console.log(response.data);
    if (response.status === 200 || response.status === 201) {
      router.push("/Signin");
      toast.success("Login Success");
    } else {
      toast.error(response?.data.detail);
    }
  };
  return (
    <>
      <ToastContainer />
      <Signupcomponent signUpHandler={signUpHandler} message={message} />
    </>
  );
}
