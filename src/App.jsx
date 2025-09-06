import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoreLayout from "./layout/StoreLayout";
import { StoreConfigProvider } from "./StoreConfigContext";
import ThemeVariables from "./utils/ThemeVariables";
import { ThemeProvider } from "./hook/useTheme";

const App = () => {
  return (
    <>
      {/* Store Front Routes Starts */}
      <StoreConfigProvider>
        <ThemeVariables />
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="" element={<StoreLayout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </StoreConfigProvider>
      {/* Store Front Routes Ends */}
    </>
  );
};

export default App;
