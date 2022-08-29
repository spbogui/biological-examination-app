import { useQuery } from "react-query";
import PatientService from "../../../services/openmrs/patient-service";
import ProviderService from "../../../services/openmrs/provider-service";
import { SelectItem } from "@mantine/core";
import EncounterService from "../../../services/openmrs/encounter-service";

export const useFindProvider = (
  params: string = "v=full",
  enabled: boolean = true
) => {
  const {
    data,
    refetch: findProviders,
    isLoading,
  } = useQuery(
    ["patient", params],
    async () => await ProviderService.findByQuery(params),
    { enabled }
  );

  const providers = data ? data : [];
  const providerSelectList: SelectItem[] = data
    ? data.map((p: any) => {
        return { label: p.display, value: p.uuid };
      })
    : [];
  return {
    providers,
    findProviders,
    providerSelectList,
    isLoading,
  };
};
