import { useQuery } from "react-query";
import PatientService from "../../../services/openmrs/patient-service";
import ProviderService from "../../../services/openmrs/provider-service";
import { SelectItem } from "@mantine/core";
import EncounterService from "../../../services/openmrs/encounter-service";
import ObsService from "../../../services/openmrs/obs-service";

export const useFindPatient = (
  identifier: string | undefined,
  params: string = "v=full"
) => {
  const {
    data,
    refetch: findPatient,
    isLoading,
  } = useQuery(
    ["patient", identifier, params],
    async () =>
      await PatientService.findOneByIdentifier(
        identifier ? identifier : "",
        params
      ),
    { enabled: identifier !== undefined }
  );

  const patient = data && data.length > 0 ? data[0] : undefined;
  return {
    patient,
    findPatient,
    isLoading,
  };
};
