import { useQuery } from "react-query";
import ObsService from "../../../services/openmrs/obs-service";

export const useFindFilteredObs = (
  patientUuid: string,
  concept: string,
  params: string = "v=default",
  limit: string = "1"
) => {
  const { data, refetch: getObs } = useQuery(
    ["patient", "obs", "encounter", "information", patientUuid, concept, ""],
    async () => await ObsService.filter(patientUuid, concept, params, limit),
    { enabled: patientUuid !== "" }
  );
  const obsList = data ? data : [];
  return {
    obsList,
    getObs,
  };
};
