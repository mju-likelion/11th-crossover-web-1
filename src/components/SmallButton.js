import styled from "styled-components";

const SmallButton = ({ text, isActive, clickEvent }) => {
  return (
    <Button isActive={isActive} clickEvent={clickEvent}>
      {text}
    </Button>
  );
};

export default SmallButton;

const Button = styled.button`
  width: 233px;
  height: 70px;
  background-color: ${(props) =>
    props.isActive ? theme.colors.BLUE2 : theme.colors.BLUE1};
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
