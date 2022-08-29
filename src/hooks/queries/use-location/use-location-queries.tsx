import { useQuery } from "react-query";
import LocationService from "../../../services/openmrs/location-service";

export const useFindLocations = (
  params: string = "v=default",
  enabled: boolean = true
) => {
  const {
    data,
    refetch: getLocations,
    isLoading,
  } = useQuery(
    ["locations", params],
    async () => await LocationService.findAll(params),
    { enabled }
  );

  const locations = data ? data : [];
  return {
    locations,
    getLocations,
    isLoading,
  };
};

export const useFindLocation = (
  uuid: string,
  enabled: boolean = false,
  params: string = "v=default"
) => {
  const { data, refetch: getLocation } = useQuery(
    ["locations", "one", uuid, params],
    async () => await LocationService.findOne(uuid, params),
    { enabled }
  );

  const location = data ? data : undefined;
  return {
    location,
    getLocation,
  };
};

export const useFindLocationAttributes = (
  uuid: string,
  params: string = "",
  enabled: boolean = false
) => {
  const { data, refetch: getLocationAttributes } = useQuery(
    ["locations", "attributes", uuid, params],
    async () => await LocationService.findAttributes(uuid, params),
    { enabled }
  );

  const attributes = data ? data : [];

  return {
    attributes,
    getLocationAttributes,
  };
};
