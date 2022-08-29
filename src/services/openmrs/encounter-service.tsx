import apiClient from "../../setup/http-common";
import { Patient, Person } from "../../models/openmrs/patient";
import { Encounter, Obs } from "../../models/openmrs/encounter";

const API_URL = "/encounter";

const findOne = async (uuid: string, params: string): Promise<Encounter> => {
  const response = await apiClient.get<Encounter>(
    API_URL + `/${uuid}?${params}`
  );
  return response.data;
};

const filter = async (
  patient: string,
  encounterType: string,
  params: string,
  limit: string = "1"
): Promise<Encounter[]> => {
  const response = await apiClient.get<any>(
    `/encounter?patient=${patient}&encounterType=${encounterType}&${params}&limit=${limit}`
  );
  return response.data.results;
};

const EncounterService = {
  findOne,
  filter,
};

export default EncounterService;
