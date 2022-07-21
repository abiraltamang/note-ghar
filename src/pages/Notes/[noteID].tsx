import React from 'react';
import Notecover from '../../components/frontend/notes/Notecover';
import All from '../../components/frontend/notes/All';
import { useRouter } from 'next/router';
import APIS from '../../helpers/EndPoints';
import useGetHook from '../../hooks/useGetHooks';
import MainLayout from '../../Layouts/MainLayout';

export default function Examdetails() {
    const router = useRouter();
  
  const { noteID } = router.query;
   
  const { isLoading: examIDLoading, data: examData } = useGetHook({
    queryKey: "ExamID",
    url: `${APIS.NOTES}${noteID}`,
    parma: "",
    auth: true,
  });
  console.log(examData, "examdata")
    return (
        <MainLayout>
            <Notecover detail={examData?.title} />
            <All examData={examData} /> 
        </MainLayout>
    )
}
