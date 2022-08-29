import React from "react";
import { useQuery } from "react-query";
import SessionService from "../../services/session-service";
import { SessionInfo } from "../../models/openmrs/settings";

const useGetSession = () => {
  const { data, isLoading } = useQuery(
    ["session"],
    async () => {
      return await SessionService.authenticate();
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const userInfo: SessionInfo = data ? data : undefined;
  return {
    userInfo,
    isLoading,
  };
};

export default useGetSession;
