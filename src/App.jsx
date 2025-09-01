import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoreLayout from "./layout/StoreLayout";
import { StoreConfigProvider } from "./StoreConfigContext";
import ThemeVariables from "./utils/ThemeVariables";

const App = () => {
  return (
    <>
      {/* Store Front Routes Starts */}
      <StoreConfigProvider>
        <ThemeVariables />
        <Router>
          <Routes>
            <Route path="" element={<StoreLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </StoreConfigProvider>
      {/* Store Front Routes Ends */}
    </>
  );
};

export default App;
