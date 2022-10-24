import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import PersistentDrawerRight from "./Navbar";

function Header() {
  return (
    <Box>
      <Router>
        <PersistentDrawerRight />
        {/*           <Routes >
            <Route path="/" element={<Accueil />} />
            <Route path="/nouveau-voyage " element={<Nouveauvoyage/>} />
            <Route path="/" element={<Accueil />} /> 
          </Routes> */}
      </Router>
    </Box>
  );
}

export default Header;
