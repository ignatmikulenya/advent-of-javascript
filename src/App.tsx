import React from "react";
import styled from "styled-components";

// import { Challenge1Page } from "./pages/Challenge1/Challenge1";
import { Challenge2Page } from "./pages/Challenge2/Challenge2";

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Challenge2Page />
    </StyledApp>
  );
}

export default App;
