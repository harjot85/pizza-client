import { useQuery } from "react-query";
import axios from "axios";
import { CategorizedMenu } from "./types";

const getCategorizedMenu = async (): Promise<CategorizedMenu[]> => {
  const apiResponse = await axios.get<CategorizedMenu[]>(
    "http://localhost:5152/api/v1/menuitem/categorized"
  );

  return apiResponse.data;
};

export const useCategorizedMenuGet = () => {
  return useQuery(["getCategorizedMenu"], () => getCategorizedMenu());
};
