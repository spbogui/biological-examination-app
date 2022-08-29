import apiClient from "../../setup/http-common";
import { Patient, Person } from "../../models/openmrs/patient";

const API_URL = "/person";

const findOne = async (
  uuid: string,
  params: string = "v=full"
): Promise<Person> => {
  const response = await apiClient.get<Person>(API_URL + `/${uuid}?${params}`);
  return response.data;
};

const addPerson = async (person: any): Promise<Person> => {
  const response = await apiClient.post<Person>(API_URL, person);
  return response.data;
};

const PersonService = {
  findOne,
  addPerson,
};

export default PersonService;
