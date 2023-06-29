import { styled } from "styled-components";
import success_img from "../assets/images/icon_success.svg";
import error_img from "../assets/images/icon_error.svg";
import cancel_img from "../assets/images/icon_cancel.svg";

const InputBox = ({
  helptext,
  placeholdertext,
  iserror,
  isempty,
  iscorrect,
  inputevent,
  passwordtype,
  data,
  clickevent,
}) => {
  return (
    <>
      <InputArea>
        <InputTextBox iserror={iserror} iscorrect={iscorrect}>
          <Input
            placeholder={placeholdertext}
            iserror={iserror}
            iscorrect={iscorrect}
            onChange={(e) => {
              inputevent(e);
            }}
            type={passwordtype ? "password" : "text"}
            value={data}
          ></Input>
          <ImgArea>
            <ColoredImg
              src={iscorrect ? success_img : error_img}
              alt="coloredIcon_image"
              iserror={iserror}
            />
            {isempty || (
              <CancelImg
                src={cancel_img}
                alt="cancel_image"
                onClick={(e) => {
                  clickevent(e);
                }}
              />
            )}
          </ImgArea>
        </InputTextBox>
        <HelperTextArea
          helptext={helptext}
          iserror={iserror}
          iscorrect={iscorrect}
          isempty={isempty}
        >
          {helptext}
        </HelperTextArea>
      </InputArea>
    </>
  );
};

const InputArea = styled.div`
  width: 540px;
  height: 124px;
  margin-bottom: 16px;
`;

const InputTextBox = styled.div`
  width: 540px;
  height: 90px;
  padding: 29px, 27px;
  border-radius: 25px;
  border: 1px solid
    ${({ iserror, iscorrect, theme }) =>
      iscorrect
        ? theme.colors.GREEN
        : iserror
        ? theme.colors.RED
        : theme.colors.GRAY};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 440px;
  height: 28px;
  color: ${({ iserror, iscorrect, theme }) =>
    iscorrect ? theme.colors.GREEN : iserror ? theme.colors.RED : "black"};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  border: none;
  outline: none;
`;

const ImgArea = styled.div`
  width: 72px;
  height: 32px;
  display: flex;
`;

const ColoredImg = styled.img`
  display: ${({ iserror }) => (iserror ? "block" : "none")};
  margin-right: 5px;
`;

const CancelImg = styled.img`
  display: flex;
  margin-left: auto;
`;

const HelperTextArea = styled.div`
  width: 495px;
  height: 19px;
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  color: ${({ iserror, iscorrect, theme }) =>
    iscorrect
      ? theme.colors.GREEN
      : iserror
      ? theme.colors.RED
      : theme.colors.GRAY};
  display: ${({ iserror, isempty }) => (iserror || isempty ? "block" : "none")};
  margin: 10px 22.5px 0px 22.5px;
`;

export default InputBox;
