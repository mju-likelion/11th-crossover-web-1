import { styled } from "styled-components";
import success_img from "../assets/images/icon_success.svg";
import error_img from "../assets/images/icon_error.svg";
import cancel_img from "../assets/images/icon_cancel.svg";

const InputBox = ({
  helpText,
  placeholderText,
  isError,
  isEmpty,
  isCorrect,
}) => {
  /* helpText는 Input 박스 밑의 도움말 내용,
  placeholderText는 placeholder의 내용,
  isError는 로그인 버튼을 눌렀을 때 조건에 맞지 않다면 true,
  isEmpty는 Input에 아무런 값이 없을 경우 true,
  isCorrect는 유효성 검사를 통과할 경우 true 입니다.*/

  /*
  로그인과 회원가입 코드에서 쓸 placeholder와 helper Text 내용물 코드
  
  <InputBox
        isError={false}
        isEmpty={true}
        isCorrect={false}
      /> 
    처럼 사용하면 됩니다.

  const placeholderText = {
    id: "아이디",
    password: "비밀번호",
    email: "이메일",
  };

  const helpText = {
    id: "영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.",
    password:
      "영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.",
    email: "사용하실 이메일을 입력해주세요.",
  };
  */

  return (
    <>
      <InputArea>
        <InputTextBox isError={isError} isCorrect={isCorrect}>
          <Input
            placeholder={placeholderText}
            isError={isError}
            isCorrect={isCorrect}
          ></Input>
          <ImgArea>
            <img src={isCorrect ? success_img : error_img} />
            <CancelImg src={cancel_img} isEmpty={isEmpty} />
          </ImgArea>
        </InputTextBox>
        <HelperTextArea
          helpText={helpText}
          isError={isError}
          isCorrect={isCorrect}
        >
          {helpText}
        </HelperTextArea>
      </InputArea>
    </>
  );
};

const InputArea = styled.div`
  width: 540px;
  height: 124px;
`;

const InputTextBox = styled.div`
  width: 540px;
  height: 90px;
  padding: 29px, 27px;
  border-radius: 25px;
  border: 2px solid
    ${({ isError, isCorrect, theme }) =>
      isCorrect ? theme.colors.GREEN : isError ? theme.colors.RED : "black"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 440px;
  height: 28px;
  color: ${({ isError, isCorrect, theme }) =>
    isCorrect ? theme.colors.GREEN : isError ? theme.colors.RED : "black"};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  border: none;
`;

const ImgArea = styled.div`
  width: 72px;
  height: 32px;
  display: flex;
`;

const CancelImg = styled.img`
  margin-left: 5px;
  display: ${({ isEmpty }) => (isEmpty ? "none" : "block")};
`;

const HelperTextArea = styled.div`
  width: 495px;
  height: 19px;
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  color: ${({ isError, isCorrect, theme }) =>
    isCorrect ? theme.colors.GREEN : isError ? theme.colors.RED : "black"};
  margin-top: 10px;
`;

export default InputBox;
