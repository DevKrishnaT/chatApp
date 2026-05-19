import React, { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact/contact";
import ChatingArea from "./components/chatingArea/ChatingArea";

const App = () => {
  return (
    <div className="h-full w-full dark:bg-[#0F172A] overflow-hidden">
      <div className="flex w-full h-full ">
        <div className="dark:bg-[#111827] basis-[5%] dark:text-black  bg-[#F8FAFC]">A</div>
        <div className="basis-[35%] h-full w-full">
          <Contact />
        </div>
        <div className="dark:bg-[#111827] bg-[#F8FAFC] basis-full  h-full w-full">
          <ChatingArea />
        </div>
      </div>
    </div>
  );
};

export default App;
