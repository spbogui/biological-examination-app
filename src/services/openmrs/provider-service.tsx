import apiClient from "../../setup/http-common";
import { Patient, Person } from "../../models/openmrs/patient";
import { Provider } from "../../models/openmrs/provider";

const API_URL = "/provider";

const findOne = async (
  uuid: string,
  params: string = "v=full"
): Promise<Provider> => {
  const response = await apiClient.get<Provider>(
    API_URL + `/${uuid}?${params}`
  );
  return response.data;
};

const add = async (provider: any) => {
  const response = await apiClient.post<any>(API_URL, provider);
  return response.data.results;
};

const findByQuery = async (
  query: string,
  params: string = "v=full"
): Promise<Provider[]> => {
  const response = await apiClient.get<any>(API_URL + `?q=${query}&${params}`);
  return response.data.results;
};

const ProviderService = {
  findOne,
  add,
  findByQuery,
};

export default ProviderService;
