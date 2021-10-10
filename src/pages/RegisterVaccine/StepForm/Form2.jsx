import React from "react";
import { useForm } from "react-hook-form";
import formData from "./Form2Data";
const Form2 = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    onSubmit?.({});
  };
  return (
    <div className="container">
      <form className="space-y-6" onSubmit={handleSubmit(submit)}>
        <div className="space-y-6"></div>
        <table>
          <thead>
            <tr>
              <th className="w-2/5">Tiền sử</th>
              <th>Triệu chứng</th>
              <th>Có</th>
              <th>Không</th>
              <th>Không rõ</th>
            </tr>
          </thead>
          <tbody>
            {formData?.map(({ title }, i) => (
              <tr className=" even:bg-gray-200">
                <td className="p-3 font-medium">{title}</td>
                <td></td>
                <td className="p-3 text-center">
                  <input
                    type="radio"
                    {...register(`tiensubenh.tensubenh${i}`)}
                    value={true}
                  />
                </td>
                <td className="p-3 text-center">
                  <input
                    type="radio"
                    {...register(`tiensubenh.tensubenh${i}`)}
                    value={false}
                    checked
                  />
                </td>
                <td className="p-3 text-center">
                  <input
                    type="radio"
                    {...register(`tiensubenh.tensubenh${i}`)}
                    value={"Not now"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <button className="p-2 text-2xl font-semibold bg-blue-500 rounded-lg text-gray-50">
            Tiếp theo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
