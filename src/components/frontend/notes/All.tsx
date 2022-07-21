import React from "react";
import Notes from "./Notes";
import Feedback from "./Feedback";
import Publisher from "./Publisher";
import Topics from "./Topics";
import Benefits from "./Benefits";
import Categories from "../exam/Categories";
import Relatedexams from "../exam/Relatedexams";
import ExamdetailsTable from "../exam/ExamdetailsTable";


type props = {
  examData: any;
};

const All = (props: props) => {
  const { examData } = props;

  return (
    <>
      <div className="mx-[22px] sm:mx-[55px] md:md:mx-[65px] lg:mx-[80px] xl:mx-[125px] py-16 flex space-x-12 flex-col xl:flex-row items-start justify-between ">
        <div>
          <Notes  examData={examData}/>
          <Feedback />
          <Publisher examData={examData}/>
        </div>
        <div>
          <div className="flex items-center flex-col xs:flex-row justify-center md:flex-col">
            <div className="mb-5 xs:mb-0">
              <ExamdetailsTable examData={examData} />
            </div>
            <Categories />
          </div>
          <div className="mt-5 md:mt-5">
            <Relatedexams />
          </div>
        </div>
      </div>
    </>
  );
};

export default All;
