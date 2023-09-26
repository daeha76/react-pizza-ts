import { Link } from "react-router-dom";
import { styled } from "styled-components";

const TopBar = styled.div`
  height: 5rem;
  background-color: rgb(192, 0, 0);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0) 70%
  );
  display: flex;
  align-items: stretch;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  padding: 0 3rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;
const Logo = styled(Link)`
  display: flex;
  > img {
    margin-right: 3rem;
    width: 9rem;
  }
`;
const NavTab = styled(Link)`
  margin: 0;
  padding: 0.3rem 1.8rem;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
  position: relative;
  text-transform: uppercase;
  transition: 0.2s ease-out;

  &:hover {
    color: white;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .active {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff2cc;
  }

  img {
    height: 2rem;
    margin-bottom: 0.25rem;
  }

  .active img {
    filter: brightness(0) saturate(100%) invert(93%) sepia(18%) saturate(797%)
      hue-rotate(316deg) brightness(109%) contrast(101%);
  }

  .active {
    &::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      z-index: 1;
      width: 0px;
      height: 0px;
      border-left: 0.6rem solid transparent;
      border-right: 0.6rem solid transparent;
      border-top: 1rem solid rgb(205, 51, 51);
    }
  }
`;

function Header() {
  return (
    <TopBar>
      <Logo to={"/"}>
        <img src="images/logo.svg" />
      </Logo>

      <NavTab to={"/"}>
        <img src="images/pizza-slice.svg" />
        <div>Get Pizza</div>
      </NavTab>
    </TopBar>
  );
}
export default Header;
