import { useQuery } from "react-query";
import PatientService from "../../../services/openmrs/patient-service";
import ProviderService from "../../../services/openmrs/provider-service";
import { SelectItem } from "@mantine/core";
import EncounterService from "../../../services/openmrs/encounter-service";
import ObsService from "../../../services/openmrs/obs-service";

export const useFindEncounter = (
  uuid: string,
  params: string = "v=full",
  enabled: boolean = true
) => {
  const {
    data,
    refetch: findEncounter,
    isLoading,
  } = useQuery(
    ["encounter", uuid],
    async () => await EncounterService.findOne(uuid, params),
    { enabled }
  );

  const encounter = data ? data : undefined;
  return {
    encounter,
    findEncounter,
    isLoading,
  };
};
