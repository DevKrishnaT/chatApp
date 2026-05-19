import React from "react";

const SidebarChat = ({ Name, Recent_Message }) => {
  return (
    <div className="px-4 py-4">
      <div className="flex dark:hover:bg-[#1a23388a] hover:bg-[#eef1f4] items-center gap-4 rounded-xl px-2 py-2">
        <div className="dark:text-[#F8FAFC] text-[#0F172A] text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className="flex flex-col ">
          <div className="name dark:text-[#F8FAFC] text-[#0F172A] text-xl">
            {Name}
          </div>
          <div className="Recent-Message text-[#334155] dark:text-[#CBD5E1] text-sm">
            {Recent_Message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarChat;
