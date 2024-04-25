import React from "react";
import Sidebar from "../components/Sidebar";

const MasterLayout = (props) => {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <div className="col-span-5">{props.children}</div>
    </div>
  );
};

export default MasterLayout;
