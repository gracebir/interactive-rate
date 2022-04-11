import styled from "styled-components";
import RateCard from "./components/RateCard";

const BodyContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`

function App() {
  return (
    <BodyContainer>
      <RateCard/>
    </BodyContainer>
  );
}

export default App;
