import { styled } from "styled-components";
import LargeButton from "../../components/LargeButton";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import { useState } from "react";
import checkBox from "../../assets/images/icon_checkbox.svg";
import fullCheckBox from "../../assets/images/icon_fullcheckbox.svg";
import { AGREE_PAGE_TEXT } from "../../assets/data/AgreePageText";

const PLACEHOLDER_TEXT = {
  id: "아이디",
  password: "비밀번호",
  email: "이메일",
};

const HELP_TEXT = {
  id: "영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.",
  password:
    "영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.",
  email: "사용하실 이메일을 입력해주세요.",
};

const FAIL_TEXT = {
  id: "사용하실 수 없는 아이디 입니다.",
  password: "사용하실 수 없는 비밀번호 입니다.",
  email: "이메일 형식에 맞지 않습니다.",
};

const SUCCESS_TEXT = {
  id: "사용 가능한 아이디 입니다.",
  password: "사용 가능한 비밀번호 입니다.",
  email: "사용 가능한 이메일 입니다.",
};

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
  //   const [disabled, setDisabled] = useState(true);
  const [isCheck, setIsCheck] = useState(false);

  const checkToggle = () => {
    setIsCheck((prev) => !prev);
  };

  const [idMessage, setIdMessage] = useState(HELP_TEXT.id);
  const [passwordMessage, setPasswordMessage] = useState(HELP_TEXT.password);
  const [emailMessage, setEmailMessage] = useState(HELP_TEXT.email);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const checkId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,9}$/;

    if (checkId.test(currentId)) {
      setIsIdError(true);
      setIsIdEmpty(false);
      setIsIdCorrect(true);
      setIdMessage(SUCCESS_TEXT.id);
    } else {
      setIsIdError(true);
      setIsIdEmpty(false);
      setIsIdCorrect(false);
      setIdMessage(FAIL_TEXT.id);
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
      setPasswordMessage(SUCCESS_TEXT.password);
    } else {
      setIsPasswordError(true);
      setIsPasswordEmpty(false);
      setIsPasswordCorrect(false);
      setPasswordMessage(FAIL_TEXT.password);
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
      setEmailMessage(SUCCESS_TEXT.email);
    } else {
      setIsEmailError(true);
      setIsEmailEmpty(false);
      setIsEmailCorrect(false);
      setEmailMessage(FAIL_TEXT.email);
    }
  };

  const clearId = () => {
    setId("");
    setIsIdEmpty(true);
    setIsIdError(false);
    setIdMessage(HELP_TEXT.id);
    setIsIdCorrect(false);
  };

  const clearPassword = () => {
    setPassword("");
    setIsPasswordEmpty(true);
    setIsPasswordError(false);
    setPasswordMessage(HELP_TEXT.password);
    setIsPasswordCorrect(false);
  };

  const clearEmail = () => {
    setEmail("");
    setIsEmailEmpty(true);
    setIsEmailError(false);
    setEmailMessage(HELP_TEXT.email);
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
              placeholderText={PLACEHOLDER_TEXT.id}
              isError={isIdError}
              isEmpty={isIdEmpty}
              isCorrect={isIdCorrect}
              inputEvent={(e) => onChangeId(e)}
              passwordType={false}
              data={id}
              clickEvent={(e) => clearId(e)}
            />
            <InputBox
              helpText={passwordMessage}
              placeholderText={PLACEHOLDER_TEXT.password}
              isError={isPasswordError}
              isEmpty={isPasswordEmpty}
              isCorrect={isPasswordCorrect}
              inputEvent={(e) => onChangePassword(e)}
              passwordType={true}
              data={password}
              clickEvent={(e) => clearPassword(e)}
            />
            <InputBox
              helpText={emailMessage}
              placeholderText={PLACEHOLDER_TEXT.email}
              isError={isEmailError}
              isEmpty={isEmailEmpty}
              isCorrect={isEmailCorrect}
              inputEvent={(e) => onChangeEmail(e)}
              passwordType={false}
              data={email}
              clickEvent={(e) => clearEmail(e)}
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
                onClick={checkToggle}
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
