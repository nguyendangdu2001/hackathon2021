import axios from "axios";
import { useQuery } from "react-query";

const useDistrict = (id) => {
  console.log(id, "id");
  return useQuery(
    ["district", id],
    async () => {
      const { data } = await axios.get(
        `http://hackathon.sohoceravietnam.com/api/district/${id}`
      );
      return data?.map((v) => {
        return { name: v?._name, value: v?._district_id };
      });
    },
    { enabled: !!id }
  );
};

export default useDistrict;
