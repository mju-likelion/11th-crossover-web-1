import styled from "styled-components";

const SigningButton = ({ text, isActive }) => {
  return (
    <>
      <Button isActive={isActive}>{text}</Button>
    </>
  );
};

export default SigningButton;

const Button = styled.button`
  width: 540px;
  height: 90px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.BLUE1 : props.theme.colors.BLUE2};
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
