import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import MasterLayout from "../layouts/MasterLayout";
import { baseUrl } from "../utility/APICalling";

const UpdateFood = () => {
  const [foodData, setFoodData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const getFoodById = async (id) => {
    const res = await axios.get(`${baseUrl}/foods/food/${id}`);
    setFoodData(res.data["data"]);
  };
  useEffect(() => {
    (async () => {
      await getFoodById(id);
    })();
  }, []);
  const updateFood = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const code = formData.get("code");
    const image = formData.get("image");
    const category = formData.get("category");
    const quantity = formData.get("quantity");
    const price = formData.get("price");
    const data = {
      name,
      code,
      image,
      category,
      quantity,
      price,
    };
    await axios.patch(`${baseUrl}/foods/update/${id}`, data);
    navigate("/");
  };
  return (
    <MasterLayout>
      <div className="mt-20">
        <hr className="border-cls-6" />
        <div className="p-10">
          <h1 className="text-2xl font-bold text-cls-3">Update Food Item</h1>
          <form
            onSubmit={updateFood}
            className="mt-8 grid lg:grid-cols-3 gap-6"
          >
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-cls-3 mb-2"
              >
                Food Name
              </label>

              <input
                type="text"
                id=""
                name="name"
                defaultValue={foodData !== null ? foodData.name : ""}
                className="mt-1 w-full rounded-md border border-cls-2  text-sm  p-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-cls-3 mb-2"
              >
                Food Code
              </label>

              <input
                type="text"
                id=""
                name="code"
                defaultValue={foodData !== null ? foodData.code : ""}
                className="mt-1 w-full rounded-md border border-cls-2  text-sm  p-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-cls-3 mb-2"
              >
                Food Image
              </label>

              <input
                type="text"
                id=""
                name="image"
                defaultValue={foodData !== null ? foodData.image : ""}
                className="mt-1 w-full rounded-md border border-cls-2  text-sm  p-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-cls-3 mb-2"
              >
                Food Category{" "}
              </label>

              <input
                type="text"
                id=""
                name="category"
                defaultValue={foodData !== null ? foodData.category : ""}
                className="mt-1 w-full rounded-md border border-cls-2  text-sm  p-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-cls-3 mb-2"
              >
                QTY
              </label>

              <input
                type="text"
                id=""
                name="quantity"
                defaultValue={foodData !== null ? foodData.quantity : ""}
                className="mt-1 w-full rounded-md border border-cls-2  text-sm  p-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-cls-3 mb-2"
              >
                Price
              </label>

              <input
                type="text"
                id=""
                name="price"
                defaultValue={foodData !== null ? foodData.price : ""}
                className="mt-1 w-full rounded-md border border-cls-2  text-sm  p-4"
              />
            </div>
            <div className="mt-4">
              <Button />
            </div>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
};

export default UpdateFood;
