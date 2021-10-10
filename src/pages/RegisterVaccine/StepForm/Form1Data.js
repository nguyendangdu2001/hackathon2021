import ehtnic from "./ethnic.json";
import nhomuutien from "./nhomuutien.json";
import nation from "./nation.json";
// import city from "./province.json";
import province from "./ward.json";
import useCity from "./useCity";
import useWard from "./useWard";
import useDistrict from "./useDistrict";
console.log(ehtnic);
const useForm1Data = (prop) => {
  const { data: city } = useCity();
  const { cityForm, wardForm } = prop || {};
  const { data: ward } = useWard(cityForm);
  const { data: district } = useDistrict(cityForm);

  const wardOption = cityForm && province[cityForm];
  console.log(wardOption);
  const formData = [
    {
      name: "name",
      label: "Họ và tên",
      placeholder: "",
      type: "text",
      className: "col-span-4 md:col-span-1",
      require: true,
    },
    {
      name: "birth",
      label: "Ngày sinh",
      placeholder: "",
      type: "date",
      className: "col-span-4 md:col-span-1",
      require: true,
    },
    {
      name: "sex",
      label: "Giới tính",
      placeholder: "",
      type: "select",
      className: "col-span-4 md:col-span-1",
      require: true,
      option: [
        { name: "Nam", value: "MALE" },
        { name: "Nữ", value: "FEMALE" },
      ],
    },
    {
      name: "phone",
      label: "Số điện thoại",
      placeholder: "",
      type: "tel",
      className: "col-span-4 md:col-span-1",
      require: true,
      formProps: {
        validate: {
          isPhoneNumber: (value) => {
            if (!value) return true;
            return (
              /^(0|(\+84)?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
                value
              ) || "Số điện thoại không đúng"
            );
          },
        },
      },
    },
    {
      name: "indentity_card",
      label: "Số CMND/CCCD/HC",
      placeholder: "",
      type: "text",
      className: "col-span-4 md:col-span-1",
      require: true,
      formProps: {
        minLength: { value: 8, message: "Ít nhất 8 ký tự" },
        maxLength: { value: 20, message: "nhiều nhất 20 ký tự" },
      },
    },
    {
      name: "bhyt",
      label: "Số thẻ BHYT",
      placeholder: "",
      type: "text",
      className: "col-span-4 md:col-span-1",
    },
    {
      name: "job",
      label: "Nghề nghiệp",
      placeholder: "",
      type: "text",
      className: "col-span-4 md:col-span-1",
      require: true,
      formProps: {
        minLength: { value: 2, message: "Ít nhất 2 ký tự" },
      },
    },
    {
      name: "dayToVaccine",
      label: "Ngày muốn được tiêm (dự kiến)",
      placeholder: "",
      type: "date",
      className: "col-span-4 md:col-span-1",
      require: true,
    },
    {
      name: "address",
      label: "Địa chỉ",
      placeholder: "",
      type: "text",
      className: "col-span-4",
    },
    {
      name: "city",
      label: "Tỉnh/Thành phố",
      placeholder: "",
      type: "select",
      className: "col-span-4 md:col-span-1",
      require: true,
      option: city,
    },
    {
      name: "ward",
      label: "Quận/Huyện",
      placeholder: "",
      type: "select",
      className: "col-span-4 md:col-span-1",
      require: true,
      option: ward,
    },
    {
      name: "district",
      label: "Xã/Phường",
      placeholder: "",
      type: "select",
      className: "md:col-span-2 col-span-4",
      require: true,
      option: district,
    },
    {
      name: "ethnic",
      label: "Dân tộc",
      placeholder: "",
      type: "select",
      option: ehtnic,
      className: "col-span-4 md:col-span-1",
    },
    {
      name: "nationality",
      label: "Quốc tịch",
      placeholder: "",
      type: "select",
      className: "col-span-4 md:col-span-1",
      option: nation,
      defaultValue: "VN",
    },
    {
      name: "priorityGroup",
      label: "Nhóm ưu tiên",
      placeholder: "",
      type: "select",
      className: "md:col-span-2 col-span-4",
      require: true,
      option: nhomuutien,
    },
  ];
  return { formData };
};

export default useForm1Data;
