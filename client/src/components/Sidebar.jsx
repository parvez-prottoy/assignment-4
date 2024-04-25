import React from "react";
import List from "./List";

const sidebarJson = {
  logo: {
    icon: "G",
    text: "CRUD Food",
  },
  lists: [
    {
      id: "list-001",
      icon: "create-outline",
      text: "Create Food",
    },
    {
      id: "list-002",
      icon: "document-text-outline",
      text: "All Foods",
    },
  ],
};

const Sidebar = () => {
  return (
    <div className="p-6 bg-cls-2 h-screen position-fixed">
      <div className="sidebar_logo flex items-center gap-1 text-xl">
        <p className="w-[24px] h-[24px] rounded-full flex justify-center items-center bg-cls-1 text-white font-bold">
          {sidebarJson.logo.icon}
        </p>
        <p className="font-bold text-cls-1">{sidebarJson.logo.text}</p>
      </div>
      <div className="sidebar_menu mt-6">
        <p className="text-cls-3">MENU</p>
        <ul className="mt-4">
          {sidebarJson.lists.map((lits) => (
            <List key={lits.id} {...lits} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
