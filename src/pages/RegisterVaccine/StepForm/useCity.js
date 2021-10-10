import axios from "axios";
import { useQuery } from "react-query";

const useCity = () => {
  return useQuery("city", async () => {
    const { data } = await axios.get(
      `http://hackathon.sohoceravietnam.com/api/province`
    );
    return data?.map((v) => {
      return { name: v?._name, value: v?.id };
    });
  });
};

export default useCity;
