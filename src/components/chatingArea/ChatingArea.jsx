import React, { useState } from "react";
import Header from "./header/header";

const ChatingArea = ({ Name, id }) => {
  const [isActive, setActive] = useState(true);
  return (
    <div className={`${isActive ? "flex" : "hidden"} h-full w-full`}>
      <div className="basis-[7%] w-full">
        <Header Name={Name} />
      </div>
      <div className="basis-full"></div>
      <div className="basis-[10%]">
        <input type="text" />
      </div>
    </div>
  );
};

export default ChatingArea;
