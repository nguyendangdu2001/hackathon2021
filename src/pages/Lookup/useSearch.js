import axios from "axios";
import { useQuery } from "react-query";

const useSearch = (props) => {
  return useQuery(
    "search",
    async () => {
      const { data } = await axios.get(
        `http://hackathon.sohoceravietnam.com/api/register/search?indentity_card=${props?.iden}&phone=${props?.phone}`
      );
      return data;
    },
    { enabled: !!props }
  );
};

export default useSearch;
