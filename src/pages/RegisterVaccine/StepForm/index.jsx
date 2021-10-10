import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Stepper from "./Stepper";

const StepForm = () => {
  //   const { register, control } = useForm();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const next = () => {
    if (step < form.length - 1) setStep((prev) => ++prev);
  };
  const back = () => {
    if (step > 0) setStep((prev) => --prev);
  };
  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    next();
  };
  const form = [
    <Form1 onSubmit={onSubmit} />,
    <Form2 onSubmit={onSubmit} back={back} />,
    <Form3 back={back} next={next} formData={formData} />,
    <Form4 />,
  ];
  const getForm = (step) => form[step];
  return (
    <div>
      <Stepper step={step} onChange={setStep} />
      <div className="container mx-auto">
        <Suspense
          fallback={
            <div id="loader-wrapper">
              <div id="loader"></div>
            </div>
          }
        >
          {getForm(step)}
        </Suspense>
      </div>
    </div>
  );
};

export default StepForm;
