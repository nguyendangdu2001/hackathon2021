import React from "react";
import { useForm } from "react-hook-form";
import useRegister from "./useRegister";

const Form3 = ({ back, formData, next }) => {
  const { mutate } = useRegister();
  console.log(formData);
  const submit = () => {
    mutate(formData, {
      onSuccess: () => {
        next();
      },
    });
  };
  const { register, handleSubmit } = useForm();
  return (
    <div className="container px-28">
      <form className="space-y-6" onSubmit={handleSubmit(submit)}>
        <div className="space-y-6 font-medium">
          <div>
            1. Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy
            nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh hoàn toàn.
            Người được tiêm chủng vắc xin phòng COVID-19 có thể phòng được bệnh
            hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi tiêm chủng
            vẫn phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch
            theo quy định.
          </div>
          <div>
            2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số hiện tượng
            bất thường về sức khỏe như các biểu hiện tại chỗ tiêm hoặc toàn
            thân, bao gồm phản ứng thông thường sau tiêm chủng và tai biến nặng
            sau tiêm chủng.
          </div>
          <div>
            3. Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng
            cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám và điều
            trị kịp thời
          </div>
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <span>
              Sau khi đã đọc các nguy cơ nêu trên , tôi đã hiểu về các nguy cơ
              và{" "}
            </span>

            <label
              htmlFor="acceptPolicy"
              className="inline-flex items-center space-x-1"
            >
              <input
                type="checkbox"
                name="acceptPolicy"
                className="rounded"
                {...register("accept", { required: true })}
              />
              <span className="font-medium">Đồng ý tiêm chủng</span>
            </label>
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <button
            className="px-5 py-3 text-xl font-semibold bg-gray-500 rounded-lg text-gray-50"
            type="button"
            onClick={back}
          >
            Quay lại
          </button>
          <button className="px-5 py-3 text-xl font-semibold bg-blue-500 rounded-lg text-gray-50">
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
