import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useForm1Data from "./Form1Data";
const Form1 = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const submit = (data) => {
    console.log(data);
    onSubmit?.(data);
  };
  const city = watch("city");
  const ward = watch("ward");

  useEffect(() => {
    console.log(city);
    return () => {};
  }, [city]);
  const { formData } = useForm1Data({ cityForm: city, wardForm: ward });
  return (
    <div className="container">
      <form className="space-y-6" onSubmit={handleSubmit(submit)}>
        <div></div>
        <div className="space-y-6">
          <div className="text-2xl font-semibold">1.Thông tin người tiêm</div>
          <div className="grid grid-cols-4 gap-x-4 gap-y-4">
            {formData?.map(
              ({
                label,
                name,
                placeholder,
                type,
                className,
                require,
                option,
                defaultValue,
                formProps,
              }) => (
                <div className={`${className} space-y-1`}>
                  <div className="font-medium">
                    {label}
                    {!require && (
                      <span className="font-normal text-gray-700">
                        {" "}
                        - Optional
                      </span>
                    )}
                  </div>
                  {type !== "select" && (
                    <input
                      type={type !== "select" ? type : "text"}
                      className="w-full input"
                      {...register(name, {
                        required: require && "Bạn cần nhập " + label,
                        ...formProps,
                      })}
                    />
                  )}
                  {type === "select" && (
                    <select
                      defaultValue={defaultValue}
                      className="relative input"
                      {...register(name, {
                        required: require && "Bạn cần nhập " + label,
                      })}
                    >
                      {option?.map(({ value, name }) => (
                        <option value={value} className="max-w-md line-clamp-1">
                          {name}
                        </option>
                      ))}
                    </select>
                  )}
                  <span className="text-red-600 ">
                    <ErrorMessage errors={errors} name={name} />
                  </span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="p-2 text-2xl font-semibold bg-blue-500 rounded-lg text-gray-50">
            Tiếp theo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
