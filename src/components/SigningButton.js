import styled from "styled-components";

const SigningButton = ({ text, disabled, clickEvent }) => {
  return (
    <>
      <Button disabled={disabled} clickEvent={clickEvent}>
        {text}
      </Button>
    </>
  );
};

export default SigningButton;

const Button = styled.button`
  width: 540px;
  height: 90px;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.BLUE1 : props.theme.colors.BLUE2};
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
