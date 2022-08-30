import React, { createContext } from "react";
import "./App.css";
import useGetSession from "./hooks/use-get-session/use-get-session";
import {
  AppShell,
  Center,
  Container,
  Header,
  Loader,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Main from "./main/main";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import RequestListPage from "./pages/request-list-page/request-list-page";
import RequestPage from "./pages/request-page/request-page";
import RequestResultPage from "./pages/request-result-page/request-result-page";

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
          <HashRouter>
            <NotificationsProvider
              position="top-right"
              zIndex={2077}
              limit={10}
              autoClose={4000}
            >
              <Routes>
                <Route element={<Main />} path={"/"}>
                  <Route element={<HomePage />} path={"/"} />
                  <Route element={<RequestListPage />} path={"/list"} />
                  <Route element={<RequestPage />} path={"/request"} />
                  <Route element={<RequestPage />} path={"/request/:id"} />
                  <Route
                    element={<RequestResultPage />}
                    path={"/request-result/:id"}
                  />
                </Route>
              </Routes>
            </NotificationsProvider>
          </HashRouter>
        </UserContext.Provider>
      )}
    </>
  );
}

export default App;
