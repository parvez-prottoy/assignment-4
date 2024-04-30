import React from "react";
import { NavLink } from "react-router-dom";

const List = (list) => {
  return (
    <NavLink to={list.to}>
      <li className="flex items-center gap-2 p-4 bg-cls-5 mb-4 rounded-md text-white cursor-pointer">
        <span className="text-2xl">
          <ion-icon name={list.icon}></ion-icon>
        </span>
        <span>{list.text}</span>
      </li>
    </NavLink>
  );
};

export default List;
