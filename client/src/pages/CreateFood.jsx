import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import MasterLayout from "../layouts/MasterLayout";
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
  return (
    <MasterLayout>
      <div className="mt-20">
        <hr className="border-cls-6" />
        <div className="p-10">
          <h1 className="text-2xl font-bold text-cls-3">Create Food Item</h1>
          <form action="#" className="mt-8 grid grid-cols-3 gap-6">
            {jsonInput.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </form>
          <div className="mt-8">
            <Button />
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default CreateFood;
