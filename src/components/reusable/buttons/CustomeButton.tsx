import React from "react";

type Props = {
  name: any;
  type: any;
};

export const CustomeButton = (props: Props) => {
  const { name, type } = props;
  return (
    <>
      <button type={type} className="purple-btn">
        {name} 
      </button>
    </>
  );
};
