import { styled } from "styled-components";
import LargeButton from "../../components/LargeButton";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import { useState } from "react";
import checkBox from "../../assets/images/icon_checkbox.svg";
import fullCheckBox from "../../assets/images/icon_fullcheckbox.svg";
import { AGREE_PAGE_TEXT } from "../../assets/data/AgreePageText";
import { AxiosSignup } from "../../api/Signup";
import { useNavigate } from "react-router-dom";

const PLACEHOLDER_TEXT = {
  id: "아이디",
  password: "비밀번호",
  email: "이메일",
};

const HELP_TEXT = {
  id: "영문과 숫자를 조합하여 5 ~ 10 글자로 입력하여 주세요.",
  password: "영문과 숫자,특수기호를 조합하여 8~14글자로 입력하여 주세요.",
  email: "사용하실 이메일을 입력해주세요.",
};

const SUCCESS_TEXT = {
  id: "사용 가능한 아이디 입니다.",
  password: "사용 가능한 비밀번호 입니다.",
  email: "사용 가능한 이메일 입니다.",
};

const FAIL_TEXT = {
  id: "사용하실 수 없는 아이디 입니다.",
  password: "사용하실 수 없는 비밀번호 입니다.",
  email: "이메일 형식에 맞지 않습니다.",
};

const {
  id: placeholderId,
  password: placeholderPassword,
  email: placeholderEmail,
} = PLACEHOLDER_TEXT;

const { id: helpId, password: helpPassword, email: helpEmail } = HELP_TEXT;

const {
  id: successId,
  password: successPassword,
  email: successEmail,
} = SUCCESS_TEXT;

const { id: failId, password: failPassword, email: failEmail } = FAIL_TEXT;

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isIdError, setIsIdError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isIdEmpty, setIsIdEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isIdCorrect, setIsIdCorrect] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  const navigate = useNavigate();

  const navigateSuccess = () => {
    navigate("/login");
  };

  const handleComplete = () => {
    if (id && password && email && isCheck) {
      AxiosSignup({ id, password, email }, navigateSuccess);
    }
  };

  const [idMessage, setIdMessage] = useState(helpId);
  const [passwordMessage, setPasswordMessage] = useState(helpPassword);
  const [emailMessage, setEmailMessage] = useState(helpEmail);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const checkId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,9}$/;

    if (checkId.test(currentId)) {
      setIsIdError(true);
      setIsIdEmpty(false);
      setIsIdCorrect(true);
      setIdMessage(successId);
    } else {
      setIsIdError(true);
      setIsIdEmpty(false);
      setIsIdCorrect(false);
      setIdMessage(failId);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    const checkPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/;
    if (checkPassword.test(currentPassword)) {
      setIsPasswordError(true);
      setIsPasswordEmpty(false);
      setIsPasswordCorrect(true);
      setPasswordMessage(successPassword);
    } else {
      setIsPasswordError(true);
      setIsPasswordEmpty(false);
      setIsPasswordCorrect(false);
      setPasswordMessage(failPassword);
    }
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    const checkEmail =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

    if (checkEmail.test(currentEmail)) {
      setIsEmailError(true);
      setIsEmailEmpty(false);
      setIsEmailCorrect(true);
      setEmailMessage(successEmail);
    } else {
      setIsEmailError(true);
      setIsEmailEmpty(false);
      setIsEmailCorrect(false);
      setEmailMessage(failEmail);
    }
  };

  const clearId = () => {
    setId("");
    setIsIdEmpty(true);
    setIsIdError(false);
    setIdMessage(helpId);
    setIsIdCorrect(false);
  };

  const clearPassword = () => {
    setPassword("");
    setIsPasswordEmpty(true);
    setIsPasswordError(false);
    setPasswordMessage(helpPassword);
    setIsPasswordCorrect(false);
  };

  const clearEmail = () => {
    setEmail("");
    setIsEmailEmpty(true);
    setIsEmailError(false);
    setEmailMessage(helpEmail);
    setIsEmailCorrect(false);
  };

  return (
    <>
      <Header isVisible={false} />
      <SignupPageArea>
        <SignupContainer>
          <SignupTitle>회원가입</SignupTitle>
          <InputContainer>
            <InputBox
              helpText={idMessage}
              placeholderText={placeholderId}
              isError={isIdError}
              isEmpty={isIdEmpty}
              isCorrect={isIdCorrect}
              inputEvent={onChangeId}
              passwordType={false}
              data={id}
              clickEvent={clearId}
            />
            <InputBox
              helpText={passwordMessage}
              placeholderText={placeholderPassword}
              isError={isPasswordError}
              isEmpty={isPasswordEmpty}
              isCorrect={isPasswordCorrect}
              inputEvent={onChangePassword}
              passwordType={true}
              data={password}
              clickEvent={clearPassword}
            />
            <InputBox
              helpText={emailMessage}
              placeholderText={placeholderEmail}
              isError={isEmailError}
              isEmpty={isEmailEmpty}
              isCorrect={isEmailCorrect}
              inputEvent={onChangeEmail}
              passwordType={false}
              data={email}
              clickEvent={clearEmail}
            />
          </InputContainer>
        </SignupContainer>

        <AgreeContainer>
          <AgreeCheckContainer>
            <AgreeExplainBox>
              <CheckGreenText>[필수]</CheckGreenText>
              <CheckBlackText>개인정보보호정책</CheckBlackText>
            </AgreeExplainBox>
            <AgreeCheckBox>
              <AgreeCheckText>약관동의</AgreeCheckText>
              <AgreeCheckIcon
                onClick={handleCheck}
                src={isCheck ? fullCheckBox : checkBox}
                alt="checkBox"
              />
            </AgreeCheckBox>
          </AgreeCheckContainer>
          <AgreePageBox>
            <AgreePageText>{AGREE_PAGE_TEXT}</AgreePageText>
          </AgreePageBox>
        </AgreeContainer>
        <LargeButton
          isActive={id && password && email && isCheck}
          text={"완료하기"}
          clickEvent={handleComplete}
        ></LargeButton>
      </SignupPageArea>
    </>
  );
};

export default Signup;

const SignupPageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupContainer = styled.div`
  width: 540px;
  height: 592px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SignupTitle = styled.div`
  width: 280px;
  height: 126px;
  font-size: 54px;
  display: flex;
  justify-content: center;
  margin: 145px 0px 65px 0px;
`;

const InputContainer = styled.div`
  width: 540px;
  height: 404px;
`;

const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1166px;
  height: 410px;
  margin-top: 57px;
  margin-bottom: 115px;
`;

const AgreeCheckContainer = styled.div`
  width: 1166px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const AgreeExplainBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 203px;
  height: 24px;
`;

const CheckGreenText = styled.div`
  color: #2bcd3b;
`;

const CheckBlackText = styled.div`
  color: black;
`;

const AgreeCheckBox = styled.div`
  width: 112px;
  height: 32px;
  display: flex;
  align-items: center;
`;

const AgreeCheckText = styled.div`
  width: 74px;
  height: 24px;
  font-size: 20px;
`;

const AgreeCheckIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const AgreePageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1113px;
  height: 342px;
  border: 2px solid #717171;
  border-radius: 25px;
  padding: 19px 24px 19px 30px;
  margin-top: 12px;
`;

const AgreePageText = styled.div`
  width: 1080px;
  height: 304px;
  font-size: 16px;
  line-height: 22px;
  white-space: pre-line;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 37px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.GRAY}; /* 스크롤바 막대 색상 */
    border-radius: 99px;
  }
`;
