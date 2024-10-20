import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import BetaInvite from "./pages/BetaInvite/BetaInvite";
import Enquiry from "./pages/Enquiry/Enquiry";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/beta-invite" element={<BetaInvite />} />
          <Route path="/enguiry" element={<Enquiry />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
