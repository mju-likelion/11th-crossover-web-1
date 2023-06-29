import styled from "styled-components";

const SmallButton = ({ text, isactive, clickevent, type, ismine }) => {
  return (
    <Button
      type={type}
      isactive={isactive}
      ismine={ismine}
      onClick={(e) => {
        clickevent(e);
      }}
    >
      {text}
    </Button>
  );
};

export default SmallButton;

const Button = styled.button`
  width: 233px;
  height: 70px;
  background-color: ${(props) =>
    props.type === "black"
      ? props.theme.colors.GRAY
      : props.isactive
      ? props.theme.colors.BLUE2
      : props.theme.colors.BLUE1};
  border-radius: 25px;
  color: #ffffff;
  font-size: 21px;
  line-height: 44px;
  text-align: center;
  display: ${({ ismine }) => (ismine ? "block" : "none")};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
