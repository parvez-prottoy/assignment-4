import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CardLoader from "../components/CardLoader";
import MasterLayout from "../layouts/MasterLayout";
import { baseUrl } from "../utility/APICalling";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    (async () => {
      await getAllFoods();
    })();
  }, []);
  const getAllFoods = async () => {
    const res = await axios.get(`${baseUrl}/foods`);
    setFoods(res.data["data"]);
  };
  const handleDelete = async (id) => {
    await axios.delete(`${baseUrl}/foods/delete/${id}`);
    await getAllFoods();
  };
  return (
    <MasterLayout>
      <div className="mt-20">
        <hr className="border-cls-6" />
        <div className="p-10">
          <h1 className="text-2xl font-bold text-cls-3">All Foods</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {foods.length > 0 ? (
              foods.map((food) => (
                <Card key={food._id} {...food} handleDelete={handleDelete} />
              ))
            ) : (
              <CardLoader />
            )}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AllFoods;
