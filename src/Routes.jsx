import Home from "./pages/Home";

import React from "react";

const Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Routes;
