import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoreLayout from "./layout/StoreLayout";
import { StoreConfigProvider } from "./StoreConfigContext";

const App = () => {
  return (
    <>
      {/* Store Front Routs Starts */}
      <StoreConfigProvider>
        <Router>
          <Routes>
            <Route path="" element={<StoreLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </StoreConfigProvider>
      {/* Store Front Routs Ends */}
    </>
  );
};

export default App;
