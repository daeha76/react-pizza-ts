import IPizza from "interface/IPizza";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  animation: dialog-container-entry 0.2s;
`;
const Dialog = styled.div`
  background-color: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  z-index: 2000;
  align-self: center;
  margin: auto;
  width: 700px;
  max-height: calc(100% - 3rem);
  animation: dialog-entry 0.4s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`;
const Title = styled.div`
  background-color: #444;
  color: #fff2cc;
  padding: 1.3rem 2rem;
  & h2 {
    color: white;
    font-size: 1.4rem;
    margin: 0;
    font-family: "Bahnschrift", Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    line-height: 1.3rem;
  }
`;
const Body = styled.form`
  flex-grow: 1;
  padding: 0.5rem 3rem 1rem 0;
`;
const Buttons = styled.div`
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background-color: #eee;
  padding: 0 1rem;
`;
interface IPizzaProps {
  pizza: IPizza;
}
export default function ConfigurePizzaDialog({ pizza }: IPizzaProps) {
  return (
    <Container>
      <Dialog>
        <Title>
          <h2>{pizza.name}</h2>
          {pizza.description}
        </Title>
        <Body>
          <Buttons>
            <button className="btn btn-secondary mr-auto">Cancel</button>
            <span className="mr-center">
              Price: <span className="price">{pizza.basePrice}</span>
            </span>
            <button className="btn btn-success ml-auto">Order</button>
          </Buttons>
        </Body>
      </Dialog>
    </Container>
  );
}
