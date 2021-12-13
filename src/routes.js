import React from "react";
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/links" element={<LinksPage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                    <Route path="/detail/:id" element={<DetailPage/>}/>
                    <Route path="/auth" element={<AuthPage/>}/>
                    {/*<Navigate replace to="/"/>*/}
                </Routes>
            </BrowserRouter>
        )
    }
    return (
        <Routes>
            <Route path="/links"  element={<LinksPage />}/>
            <Route path={"/create"} element = {<CreatePage/>}/>
            <Route path={"/detail"} element = {<DetailPage/>}/>
            <Route path={"/auth"} element = {<AuthPage/>}/>
        </Routes>
    )
}

