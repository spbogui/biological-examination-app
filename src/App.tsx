import React, {createContext} from 'react';
import './App.css';
import useGetSession from "./hooks/use-get-session/use-get-session";
import {Center, Loader} from "@mantine/core";
import {NotificationsProvider} from "@mantine/notifications";
import Main from "./pages/main/main";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.locale("fr");
dayjs.extend(customParseFormat);
export const UserContext = createContext<any>({});

function App() {
  const { userInfo, isLoading } = useGetSession();
  return (
      <>
        {isLoading ? (
            <Center style={{ width: "100%", height: "80vh" }}>
              <Loader size={"xl"} />
            </Center>
        ) : (
            <UserContext.Provider value={userInfo}>
              <NotificationsProvider
                  position="top-right"
                  zIndex={2077}
                  limit={10}
                  autoClose={4000}
              >
                <Main />
              </NotificationsProvider>
            </UserContext.Provider>
        )}
      </>
  );
}

export default App;
