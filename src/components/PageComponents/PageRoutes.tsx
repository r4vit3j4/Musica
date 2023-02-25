import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import LazyLoad from "./LazyLoad";
import PageLayout from "./PageLayout";
const AppPage = lazy(() => import("../../pages/AppPage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage"));

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route
          index
          element={
            <LazyLoad>
              <AppPage />
            </LazyLoad>
          }
        />
        <Route
          path="about"
          element={
            <LazyLoad>
              <AboutPage />
            </LazyLoad>
          }
        />
        <Route
          path="*"
          element={
            <LazyLoad>
              <ErrorPage />
            </LazyLoad>
          }
        />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
