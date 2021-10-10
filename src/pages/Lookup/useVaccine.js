import axios from "axios";
import { useQuery } from "react-query";

const useVaccine = (id) => {
  return useQuery(["lichtiem", id], async () => {
    const { data } = await axios.get(
      `http://hackathon.sohoceravietnam.com/api/register/${id}/appointment`
    );
    return data;
  });
};

export default useVaccine;
