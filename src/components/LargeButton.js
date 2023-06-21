import styled from "styled-components";

const LargeButton = ({ text, isActive, clickEvent }) => {
  return (
    <Button isActive={isActive} onClick={(e) => clickEvent(e)}>
      {text}
    </Button>
  );
};

export default LargeButton;

const Button = styled.button`
  width: 540px;
  height: 90px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.BLUE2 : props.theme.colors.BLUE1};
  border-radius: 25px;
  color: #ffffff;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
