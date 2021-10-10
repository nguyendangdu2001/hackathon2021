import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LookDetail from "./LookDetail";
import useSearch from "./useSearch";

const Lookup = () => {
  const [formData, setformData] = useState();
  const { data } = useSearch(formData);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setformData(data);
  };
  return (
    <div className="container w-full mx-auto space-y-10">
      <div className="text-3xl font-bold">Tra cứu đăng ký tiêm</div>
      <form className="p-8 space-y-4 shadow" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-8">
          <div className="">
            <div>Số CMND/CCCD/HC</div>
            <input
              type="text"
              className="input"
              {...register("iden", { required: true })}
            />
          </div>
          <div>
            <div>Số điện thoại</div>
            <input
              type="text"
              className="input"
              {...register("phone", { required: true })}
            />
          </div>
        </div>
        <div className="flex justify-center gap-x-3">
          <button type="reset" className="p-3 text-xl font-semibold">
            Nhập lại
          </button>
          <button className="p-3 text-xl font-semibold bg-blue-500 rounded-lg text-gray-50">
            Tra cứu
          </button>
        </div>
      </form>
      {data && (
        <div>
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-1 border border-gray-300">STT</th>
                <th className="p-1 border border-gray-300">Họ và tên</th>
                <th className="p-1 border border-gray-300">Ngày sinh</th>
                <th className="p-1 border border-gray-300">Giới tính</th>
                <th className="p-1 border border-gray-300">Số điện thoại</th>
                <th className="p-1 border border-gray-300">Số CMND/CCCD/CC</th>
                <th className="p-1 border border-gray-300">Trạng Thái</th>
                <th className="p-1 border border-gray-300">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center border border-gray-300">
                  {data?.id}
                </td>
                <td className="border border-gray-300 ">{data?.name}</td>
                <td className="p-1 text-center border border-gray-300">
                  {data?.birth}
                </td>
                <td className="p-1 text-center border border-gray-300">
                  {data?.sex}
                </td>
                <td className="p-1 text-center border border-gray-300">
                  {data?.phone}
                </td>
                <td className="p-1 text-center border border-gray-300">
                  {data?.indentity_card}
                </td>
                <td className="p-1 text-center border border-gray-300">
                  <span className="p-1 bg-indigo-100 border border-indigo-600 rounded-full">
                    Đăng ký thành công
                  </span>
                </td>
                <td className="text-center border border-gray-300">
                  <LookDetail id={data?.id} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* <iframe
        title="[ Insert title here ]"
        aria-label="Map"
        id="datawrapper-chart-8UkRu"
        src="https://datawrapper.dwcdn.net/8UkRu/1/"
        scrolling="no"
        frameborder="0"
        style={{ width: 0, minWidth: "100% !important", border: "none" }}
        height="756"
      ></iframe> */}
    </div>
  );
};

export default Lookup;
