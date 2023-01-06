import React from "react";
import styled from "styled-components";

import { Challenge1Page } from "./pages/Challenge1/Challenge1";

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Challenge1Page />
    </StyledApp>
  );
}

export default App;
