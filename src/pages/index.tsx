import type { NextPage } from "next";
import CallAction from "../components/frontend/main/CallAction";
import Courses from "../components/frontend/main/Courses";
import Coverpage from "../components/frontend/main/Coverpage";
import Features1 from "../components/frontend/main/Features1";
import Features2 from "../components/frontend/main/Features2";
import Footer from "../components/frontend/main/Footer";
import Testimonial from "../components/frontend/main/Testimonial";
import Work from "../components/frontend/main/Work";
import Navbar from "../components/frontend/main/Navbar";
import APIS from "../helpers/EndPoints";
import useGetHook from "../hooks/useGetHooks";

const Home: NextPage = () => {
  const { isLoading: currentUserLoading, data: courseData } = useGetHook({
    queryKey: "courseData",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });

  console.log("course", courseData);

  return (
    <div>
      <Navbar />
      <Coverpage height={700} />
      <Features1 />
      <Features2 />
      <Courses courseData={courseData} />
      <CallAction />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
