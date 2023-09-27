import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "components/Header";

const Container = styled.div`
  display: flex;
  height: 100%;
  z-index: 1;
  background-color: white;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background: linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.4) 80%);
  padding: 1.5rem !important;
`;

export default function Root() {
  return (
    <div>
      <Header />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </div>
  );
}
