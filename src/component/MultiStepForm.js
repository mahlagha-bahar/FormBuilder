import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { Address } from "./stepForm/Address";
import { Contact } from "./stepForm/Contact";


import { Submit } from "./stepForm/Submit";

const defaultData = {
  firstName: " ",
  lastName: " ",
  address: " ",
  city: " ",
  phone: " ",
  email: " ",
};

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  
  { id: "submit" },
];
export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep:0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
  
    case "submit":
      return <Submit {...props} />;
  default:
  
  return (
    <div>
      <h1>Multi</h1>
    </div>
  );
  
}
}
