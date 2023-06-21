import styled from "styled-components";

const SmallButton = ({ text, isActive, clickEvent, type }) => {
  return (
    <Button type={type} isActive={isActive} clickEvent={clickEvent}>
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
      : props.isActive
      ? props.theme.colors.BLUE2
      : props.theme.colors.BLUE1};
  border-radius: 25px;
  color: #ffffff;
  font-size: 21px;
  line-height: 44px;
  text-align: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
