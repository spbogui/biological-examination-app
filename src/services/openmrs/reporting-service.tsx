import apiClient from "../../../setup/http-common";

const API_URL = "/reportingrest";

const evaluateDataSet = async (uuid: string, params: any) => {
  const response = await apiClient.post<any>(
    API_URL +
      `/dataSet/${uuid}?v=custom:(rows,metadata:(column),definition:(name))`,
    params
  );
  return response.data;
};

const ReportingService = {
  evaluateDataSet,
};

export default ReportingService;
