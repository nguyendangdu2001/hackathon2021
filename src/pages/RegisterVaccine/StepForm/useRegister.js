import axios from "axios";
import React from "react";
import { useMutation } from "react-query";

const useRegister = () => {
  return useMutation(async (formData) => {
    const { data } = axios.post(
      "http://hackathon.sohoceravietnam.com/api/register",
      { ...formData, status: "waiting", priority: "Low" }
    );
  });
};

export default useRegister;
