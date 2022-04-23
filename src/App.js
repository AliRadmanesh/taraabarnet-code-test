import { HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Router from "./routes/Router";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Router />
    </HashRouter>
  );
};

export default App;
