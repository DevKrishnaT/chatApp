import React, { useEffect, useState } from "react";
import SidebarChat from "../../ui/chats/sidebarChat";

const Contact = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    setDark(document.documentElement.classList.contains("dark"));
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");

    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  return (
    <div className="h-screen w-full dark:bg-[#0B1220] border border-[#CBD5E1] dark:border-[#1E293B]">
      <div className="chat-area p-4 flex justify-between items-center border-b dark:border-b-[#1E293B] border-b-[#CBD5E1]">
        <div className="text-[#0F172A] dark:text-[#F8FAFC] text-2xl font-bold capitalize">
          Chat
        </div>
        <div className="dark:text-white flex gap-2 items-center">
          <div>
            <button
              className="p-2  px-4 border rounded-2xl "
              onClick={toggleTheme}
            >
              {dark ? "Dark" : "Light"}
            </button>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 h-full">
        <SidebarChat Name={"Krishna"} Recent_Message={"Abe kha ho"} />
      </div>
    </div>
  );
};

export default Contact;
