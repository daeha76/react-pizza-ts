import { Pizza } from "models/Pizza";
import { Topping } from "models/Topping";
import { toppings } from "db";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PizzaTopping } from "models/PizzaTopping";

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
const FormBodySpan = styled.span`
  min-width: 110px;
  text-align: right;
`;
const FormBody = styled.form`
  flex-grow: 1;
  padding: 0.5rem 3rem 1rem 0;
  div {
    display: flex;
    margin-top: 1rem;
    align-items: center;
  }
  lavel {
    text-align: right;
    width: 200px;
    margin: 0 1.5rem;
  }
  ${FormBodySpan}
`;
const SelectedToppings = styled.div`
  text-align: center;
  display: block;
  padding-left: 4rem;
`;
const SelectedTopping = styled.div`
  display: inline-block;
  background-color: #a04343;
  color: white;
  padding: 0.2rem 1rem;
  border-radius: 2rem;
  margin: 0.4rem 0.3rem;
  font-weight: 700;
  & span {
    font-weight: 100;
    font-size: 0.8rem;
  }
  & button {
    background: none;
    border: none;
    color: white;
    padding: 0.2rem 0.2rem 0.3rem 0.2rem;
    cursor: pointer;
    &:hover {
      color: yellow;
    }
  }
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
  pizza: Pizza;
}
export default function ConfigurePizzaDialog({ pizza }: IPizzaProps) {
  const [size, setSize] = useState<number>(pizza.defaultSize);
  const [selectedToppingId, setSelectedToppingId] = useState(-1);
  const [pizzaToppings, setPizzatoppings] = useState<PizzaTopping[]>([]);
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    pizza.size = parseInt(event.target.value);
    setSize(pizza.size);
  };
  const handleToppingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value);
    addTopping(toppings[index]);
  };
  const addTopping = (topping: Topping) => {
    if (pizzaToppings.find((pt) => pt.topping === topping) === undefined) {
      setPizzatoppings([...pizzaToppings, new PizzaTopping(topping)]);
    } else {
      alert("Topping already added!");
    }
    setSelectedToppingId(-1);
  };
  const pizzaSizeSelect = (
    <input
      type="range"
      min={pizza.minimumSize}
      max={pizza.maximumSize}
      step="1"
      value={size}
      onChange={handleSizeChange}
    />
  );
  const selectedPizzaPrice = (
    <FormBodySpan>
      {pizza.size} £{pizza.getFormattedTotalPrice()}
    </FormBodySpan>
  );
  const loadingToppings = (
    <select className="custom-select" disabled>
      <option>(loading...)</option>
    </select>
  );
  const maximumReached = <div>(maximum reached)</div>;
  const toppingSelectGuide = (
    <option value="-1" disabled selected>
      (select)
    </option>
  );
  const toppingSelectOptions = (
    <select
      className="custom-select"
      value={selectedToppingId}
      onChange={handleToppingChange}
    >
      {toppingSelectGuide}
      {toppings.map((topping, index) => (
        <option key={index} value={index}>
          {topping.name} - (+£{topping.getFormattedPrice()})
        </option>
      ))}
    </select>
  );
  return (
    <Container>
      <Dialog>
        <Title>
          <h2>{pizza.name}</h2>
          {pizza.description}
        </Title>
        <FormBody>
          <div>
            <label>Size: </label>
            {pizzaSizeSelect}
            {selectedPizzaPrice}
          </div>
          <div>
            <label>Extra Toppings:</label>
            {toppings === null
              ? loadingToppings
              : pizzaToppings.length >= 6
              ? maximumReached
              : toppingSelectOptions}
          </div>
          <SelectedToppings>
            {pizzaToppings.map((tp, index) => (
              <SelectedTopping key={index}>
                {tp.topping.name}
                <span>{tp.topping.getFormattedPrice()}</span>
                <button type="button">x</button>
              </SelectedTopping>
            ))}
          </SelectedToppings>
          <Buttons>
            <button className="btn btn-secondary mr-auto">Cancel</button>
            <span className="mr-center">
              Price:{" "}
              <span className="price">{pizza.getFormattedTotalPrice()}</span>
            </span>
            <button className="btn btn-success ml-auto">Order</button>
          </Buttons>
        </FormBody>
      </Dialog>
    </Container>
  );
}
