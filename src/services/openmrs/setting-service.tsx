import apiClient from "../../../setup/http-common";
import { Settings } from "../../models/openmrs/settings";

const API_URL = "/systemsetting";

const findAllyByQuery = async (query: string): Promise<Settings[]> => {
  const response = await apiClient.get<any>(
    API_URL + `?v=custom:(property,value)&q=${query}`
  );
  return response.data.results;
};

const SettingService = {
  findAllyByQuery,
};

export default SettingService;
