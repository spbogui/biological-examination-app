import { useQuery } from "react-query";
import { SelectItem } from "@mantine/core";
import LocationService from "../../../services/openmrs/location-service";
import { LocationAttribute } from "../../../models/openmrs/location";
import { locationToSelectionList } from "../../../utils";
import ProviderService from "../../../services/openmrs/provider-service";
import { ProviderAttributeType } from "../../../constants/provider-attribute-type";

export const useFindLocationProviders = (
  location: string,
  enabled: boolean = false,
  params: string = "v=default"
) => {
  const { data, refetch: getProviders } = useQuery(
    ["locations", "providers", params],
    async () => await ProviderService.findByQuery(params),
    { enabled }
  );

  const providers = data
    ? data.filter((p) =>
        p.attributes.some(
          (a) =>
            a.attributeType.uuid === ProviderAttributeType.PROVIDER_LOCATION &&
            a.display.includes(location)
        )
      )
    : undefined;
  return {
    providers,
    getProviders,
  };
};
