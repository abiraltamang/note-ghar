import React from "react";
import Courses from "../../components/frontend/main/Courses";
import Navbar from "../../components/frontend/main/Navbar";
import Notecover from "../../components/frontend/notes/Notecover";
import MainLayout from "../../Layouts/MainLayout";

import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";

const Notes = () => {
  const { isLoading: currentUserLoading, data: courseData } = useGetHook({
    queryKey: "courseData",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });

  return (
    <div>
      <MainLayout>
        <Notecover detail="Notes" />
        <Courses
          currentUserLoading={currentUserLoading}
          courseData={courseData}
        />
      </MainLayout>
    </div>
  );
};
export default Notes;
