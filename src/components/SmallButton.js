import styled from "styled-components";

const SmallButton = ({ text, isActive, clickEvent, type, isMine }) => {
  return (
    <Button
      type={type}
      isActive={isActive}
      isMine={isMine}
      onClick={(e) => {
        clickEvent(e);
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
      : props.isActive
      ? props.theme.colors.BLUE2
      : props.theme.colors.BLUE1};
  border-radius: 25px;
  color: #ffffff;
  font-size: 21px;
  line-height: 44px;
  text-align: center;
  display: ${({ isMine }) => (isMine ? "block" : "none")};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
