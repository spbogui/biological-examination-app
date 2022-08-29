import apiClient from "../../../setup/http-common";
import { Patient } from "../../models/openmrs/patient";

const API_URL = "/patient";

const findOne = async (
  uuid: string,
  params: string = "v=full"
): Promise<Patient> => {
  const response = await apiClient.get<any>(API_URL + `/${uuid}?${params}`);
  return response.data.results;
};

const findOneByIdentifier = async (
  identifier: string,
  params: string = "v=full"
): Promise<Patient[]> => {
  const response = await apiClient.get<any>(
    API_URL + `?identification=${identifier}&${params}`
  );
  return response.data.results;
};

const PatientService = {
  findOne,
  findOneByIdentifier,
};

export default PatientService;
