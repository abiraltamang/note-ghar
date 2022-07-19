import React from 'react';
import Notecover from '../../components/frontend/notes/Notecover';
import All from '../../components/frontend/notes/All';
import { useRouter } from 'next/router';
import APIS from '../../helpers/EndPoints';
import useGetHook from '../../hooks/useGetHooks';

export default function Examdetails() {
    const router = useRouter();
  
  const { ExamID } = router.query;
   
  console.log('router', router)
  console.log('exid', ExamID)
  const { isLoading: examIDLoading, data: examData } = useGetHook({
    queryKey: "authorlist",
    url: `${APIS.NOTES}${ExamID}`,
    parma: "",
    auth: true,
  });

  console.log('exam', examData)

    return (
        <>
            <Notecover detail="Economics Complete Note" />
            <All examData={examData} />
        </>
    )
}
