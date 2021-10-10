import React from "react";
import StepForm from "./StepForm";

const RegisterVaccine = () => {
  return (
    <div className="flex-grow">
      <div>
        <div className="">
          <div className="container mx-auto text-2xl font-bold">
            Đằng ký tiêm cá nhân
          </div>
          <StepForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterVaccine;
