import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import DropDown from "../../reusable/dropdown/DropDown";

const subjects = [
  "Science",
  "Computer Science",
  "Social Studies",
  "Mathematics",
  "Other Categories",
];

function Category() {
  return (
    <DropDown title="By Category" options={subjects}/>
  );
}
export default Category;
