import apiClient from "../../../setup/http-common";
import {
  Location,
  LocationAttribute,
  LocationAttributeSave,
} from "../../models/openmrs/location";

const API_URL = "/location";

const findOne = async (uuid: string, params: string) => {
  const response = await apiClient.get<any>(API_URL + `/${uuid}?${params}`);
  return response.data;
};

const findAll = async (params: string): Promise<Location[]> => {
  const response = await apiClient.get<any>(API_URL + `?${params}`);
  return response.data.results;
};

const findAttributes = async (
  uuid: string,
  params: string
): Promise<LocationAttribute[]> => {
  const response = await apiClient.get<any>(
    API_URL + `/${uuid}/attribute?${params}`
  );
  return response.data.results;
};

const addOrUpdateAttribute = async (
  data: any,
  uuid: string,
  attributeUuid: string = ""
) => {
  const response = await apiClient.post<LocationAttributeSave>(
    API_URL +
      `/${uuid}/attribute${attributeUuid !== "" ? "/" + attributeUuid : ""}`,
    data
  );
  return response.data;
};

const addOrUpdate = async (data: any, uuid: string = "") => {
  const response = await apiClient.post<any>(
    API_URL + `/${uuid !== "" ? "/" + uuid : ""}`,
    data
  );
  return response.data;
};

const LocationService = {
  findOne,
  findAll,
  findAttributes,
  addOrUpdate,
  addOrUpdateAttribute,
};

export default LocationService;
