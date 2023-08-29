import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/Styles.css";

const Home = React.lazy(() => import("./views/Home/Home"));
const Languages = React.lazy(() => import("./views/Languages/Languages"));
const Programming = React.lazy(() => import("./views/Programming/Programming"));
const ProjectHistory = React.lazy(() =>
  import("./views/Project-history/ProjectHistory")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" name="home" element={<Home></Home>}></Route>
        <Route
          path="/languages"
          name="languages"
          element={<Languages></Languages>}
        ></Route>
        <Route
          path="/programming"
          name="programming"
          element={<Programming></Programming>}
        ></Route>
        <Route
          path="/projecthistory"
          name="projecthistory"
          element={<ProjectHistory></ProjectHistory>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
