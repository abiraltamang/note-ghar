import React from "react";
import Notecover from "../../components/frontend/notes/Notecover";
import Courses from "../../components/frontend/main/Courses";
import Navbar from "../../components/frontend/main/Navbar";
import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";
import MainLayout from "../../Layouts/MainLayout";

export default function Trendingnotes() {
  const { isLoading: currentUserLoading, data: courseData } = useGetHook({
    queryKey: "courseData",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });
  return (
    <MainLayout>
      <Notecover detail="Trending Notes" />
      <Courses currentUserLoading={currentUserLoading} courseData={courseData} />
    </MainLayout>
  );
}
