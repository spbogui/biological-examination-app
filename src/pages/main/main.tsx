import React from 'react';
import './main.css'
import {AppShell, Header, Navbar, useMantineTheme} from "@mantine/core";
import useUserContext from "../../hooks/use-user-context/use-user-context";
import {CustomRouter} from "../../setup/routes-manager/custom-router";
import customHistory from "../../setup/routes-manager/history";
import {Route, Routes} from "react-router-dom";
import RequestListPage from "../request-list-page/request-list-page";
import HomePage from "../home-page/home-page";
import RequestPage from "../request-page/request-page";
import RequestResultPage from "../request-result-page/request-result-page";

export type MainProps = {}

 const Main = ({}: MainProps) => {
    const theme = useMantineTheme();
    const { connectedUser, userLocation } = useUserContext();
     return (
         <CustomRouter history={customHistory}>
             <AppShell
                 padding={0}
                 navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
                 header={<Header height={60} p="xs">{/* Header content */}</Header>}
             >
                 <Routes>
                     <Route element={<HomePage />} path={"/"} />
                     <Route element={<RequestListPage />} path={"/list"} />
                     <Route element={<RequestPage />} path={"/request"} />
                     <Route element={<RequestPage />} path={"/request/:id"} />
                     <Route element={<RequestResultPage />} path={"/request-result/:id"} />
                 </Routes>
             </AppShell>
     </CustomRouter>
     )
         ;
}

export default Main;