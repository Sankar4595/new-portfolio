import { Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { NotFound, Loader, ProjectDetails } from "./components";
import Contact from "./pages/Contact";
import About from "./pages/About";
import QRCodeGenerator from "./pages/qrcode";
import BaseApp from "./baseurl";
const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <BaseApp>
                <Home />
              </BaseApp>
            }
          />
          <Route
            path="/about"
            element={
              <BaseApp>
                <About />
              </BaseApp>
            }
          />
          <Route
            path="/project"
            element={
              <BaseApp>
                <Project />
              </BaseApp>
            }
          />
          <Route
            path="/project/:id"
            element={
              <BaseApp>
                <ProjectDetails />
              </BaseApp>
            }
          />
          <Route
            path="/contact"
            element={
              <BaseApp>
                <Contact />
              </BaseApp>
            }
          />
          <Route
            path="/404"
            element={
              <BaseApp>
                <NotFound />
              </BaseApp>
            }
          />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route path="/qrcode" element={<QRCodeGenerator />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
