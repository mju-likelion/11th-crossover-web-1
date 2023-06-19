import styled from "styled-components";

const SmallButton = ({ text, isActive }) => {
  return (
    <>
      <Button isActive={isActive}>{text}</Button>
    </>
  );
};

export default SmallButton;

const Button = styled.button`
  width: 233px;
  height: 70px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.BLUE1 : props.theme.colors.BLUE2};
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