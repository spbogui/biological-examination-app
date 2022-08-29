import apiClient from "../../../setup/http-common";
import { Patient, Person } from "../../models/openmrs/patient";
import { Encounter, Obs } from "../../models/openmrs/encounter";

const API_URL = "/obs";

const filter = async (
  patient: string,
  concept: string,
  params: string = "",
  limit: string = "1"
): Promise<Obs[]> => {
  const response = await apiClient.get<any>(
    API_URL + `?patient=${patient}&concept=${concept}&${params}&limit=${limit}`
  );
  return response.data.results;
};

const ObsService = {
  filter,
};

export default ObsService;
