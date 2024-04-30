import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import MasterLayout from "../layouts/MasterLayout";
import { baseUrl } from "../utility/APICalling";
const jsonInput = [
  {
    id: "input-001",
    label: "Food Name",
    name: "name",
  },
  {
    id: "input-002",
    label: "Food Code",
    name: "code",
  },
  {
    id: "input-003",
    label: "Food Image",
    name: "image",
  },
  {
    id: "input-004",
    label: "Food Category ",
    name: "category",
  },
  {
    id: "input-005",
    label: "QTY",
    name: "quantity",
  },
  {
    id: "input-006",
    label: "Price",
    name: "price",
  },
];
const CreateFood = () => {
  const navigate = useNavigate();
  const createFood = async (e) => {
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
    await axios.post(`${baseUrl}/foods`, data);
    navigate("/");
  };
  return (
    <MasterLayout>
      <div className="mt-20">
        <hr className="border-cls-6" />
        <div className="p-10">
          <h1 className="text-2xl font-bold text-cls-3">Create Food List</h1>
          <form
            onSubmit={createFood}
            className="mt-8 grid lg:grid-cols-3 gap-6"
          >
            {jsonInput.map((input) => (
              <Input key={input.id} {...input} />
            ))}
            <div className="mt-4">
              <Button />
            </div>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
};

export default CreateFood;
