import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ image, name, _id, handleDelete }) => {
  return (
    <div className="card shadow-sm rounded-lg border border-cls-6">
      <img
        className="rounded-t-md h-[250px]"
        src={String(image)}
        width="100%"
        alt=""
      />
      <div className="card-details p-3">
        <h2 className="text-lg font-medium">{name}</h2>
        <div className="mt-2 space-x-2">
          <NavLink to={`/allFoods/update/${_id}`}>
            <button className="inline-block shrink-0 rounded-md border bg-cls-2 px-12 py-3 text-sm font-medium text-green-400 transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-cls-1">
              Edit
            </button>
          </NavLink>
          <button
            onClick={() => handleDelete(_id)}
            className="inline-block shrink-0 rounded-md border bg-red-200 px-12 py-3 text-sm font-medium text-red-500 transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-cls-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
