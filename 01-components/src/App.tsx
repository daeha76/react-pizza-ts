import styled from "styled-components";
import { pizzas } from "./db";
import Header from "./components/Header";
import { Link, Outlet } from "react-router-dom";

const PizzaCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 2rem;
  justify-content: center;
  padding-left: 0;
`;
const PizzaItem = styled.li<PizzaItemProps>`
  height: 10rem;
  position: relative;
  background-image: ${(props) => `url(${props.imgUrl || null})`};
  background-size: cover;
  border-radius: 0.5rem;
  list-style-type: none;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease-out;

  &:hover {
    transform: scale(1.02);
  }

  .pizza-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 80%);
    padding: 1rem;
    color: #fff2cc;
    cursor: pointer;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    line-height: 1.25rem;

    .pizza-title {
      color: white;
      font-size: 1.4rem;
      margin: 0.2rem 0 0.4rem 0;
      font-family: "Bahnschrift", Arial, Helvetica, sans-serif;
      text-transform: uppercase;
    }

    .pizza-price {
      position: absolute;
      bottom: 0.5rem;
      right: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 0rem 0.7rem;
      border-radius: 4px;
      background-color: #08af08;
      color: white;
      line-height: 2rem;
    }
  }
`;
interface PizzaItemProps {
  imgUrl: string;
}

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <h1>Best Seller Authors</h1>
      <PizzaCards>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} imgUrl={pizza.imageUrl}>
            <div className="pizza-info">
              <div className="pizza-title">{pizza.name}</div>
              <div className="pizza-description">{pizza.description}</div>
              <div className="pizza-price">£{pizza.basePrice}</div>
            </div>
          </PizzaItem>
        ))}
      </PizzaCards>
    </div>
  );
}

export default App;
