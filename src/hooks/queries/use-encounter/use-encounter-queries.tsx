import { useQuery } from "react-query";
import EncounterService from "../../../services/openmrs/encounter-service";

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
