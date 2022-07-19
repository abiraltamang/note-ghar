import Axios from 'axios';
import { getKey } from "./sessionKey";


const API_ROOT = "https://backend.noteghar.com/api";


//create axios instance
export const instance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});


//get data from api
export const getApiData = async (url: any, param?: any, auth = false) => {
  let response;
  const key:any = (getKey("userAuth"))
  try {
    response = await instance({
      method: 'GET',
      url: `${url}`,
      params: param,
      headers: {
        Authorization: auth ? `Bearer ${JSON.parse(key).accessToken}` : "",  
      },
      transformResponse: [
        function (responseData) {
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    return e.response;
  }
  return response;
};

//post data to api
export const postApiData = async (data: any) => {
    const { url, formData, formikProps } = data;
    let response;
    try {
      response = await instance({
        method: "POST",
        url: `${url}`,
        data: formData,
        // headers: {
        //   Authorization: `Bearer ${accessToken()}`,
        // },
        transformResponse: [
          function (responseData) {
            return JSON.parse(responseData);
          },
        ],
      });
    } catch (e: any) {
      formikProps?.setErrors(e.response.data);
      return e.response;
    }
    return response;
  };
