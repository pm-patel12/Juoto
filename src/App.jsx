import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/storeFront/Home";
import StoreLayout from "./layout/StoreLayout";
import ThemeVariables from "./utils/ThemeVariables";
import { AppProvider } from "./ThemeProvider";
import CheckOut from "./pages/storeFront/CheckOut";
import CursorEffect from "./utils/CursorEffects";

const App = () => {
  // Bootstrap tooltips
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);
  return (
    <>
      {/* Store Front Routes Starts */}
      <AppProvider>
        {/* <CursorEffect /> */}
        <ThemeVariables />
        <Router>
          <Routes>
            <Route path="" element={<StoreLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
      {/* Store Front Routes Ends */}
    </>
  );
};

export default App;
