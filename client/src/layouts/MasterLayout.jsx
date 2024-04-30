import React from "react";
import Sidebar from "../components/Sidebar";

const MasterLayout = (props) => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2 lg:col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5">{props.children}</div>
    </div>
  );
};

export default MasterLayout;
