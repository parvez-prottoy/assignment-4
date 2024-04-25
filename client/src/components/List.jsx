import React from "react";

const List = (lits) => {
  return (
    <li className="flex items-center gap-2 p-4 bg-cls-5 mb-4 rounded-md text-white cursor-pointer">
      <span className="w-6">
        <ion-icon name={lits.icon}></ion-icon>
      </span>
      {lits.text}
    </li>
  );
};

export default List;
