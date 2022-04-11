import styled from "styled-components";
import RateCard from "./components/RateCard";
import { useRoutes } from 'react-router-dom'
import Rating from "./components/InfoRateCard";

const BodyContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`

function App() {

  const mainRoute = {
    path: '/',
    element: <RateCard />
  }

  const rateRoute = {
    path: '/rating',
    element: <Rating />
  }

  const routing = useRoutes([mainRoute, rateRoute])
  return (
    <BodyContainer>
        {routing}
    </BodyContainer>
  );
}

export default App;
