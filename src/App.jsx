import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/Error/404";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
}
