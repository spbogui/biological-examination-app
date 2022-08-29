import apiClient from "../setup/http-common"

const authenticate = async () => {
    const response = await apiClient.get<any>("/session");
    return response.data;
};

const deleteSession = async () => {
    const response = await apiClient.delete("/session");
    return response.data;
};

const SessionService = {
    authenticate,
    deleteSession,
};

export default SessionService;