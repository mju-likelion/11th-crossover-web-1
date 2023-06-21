import { styled } from "styled-components";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import LargeButton from "../../components/LargeButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [isIdError, setIsIdError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isIdEmpty, setIsIdEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isCorrect] = useState(false);

  const navigate = useNavigate();

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

  const messageText = {
    id: "사용하실 수 없는 아이디 입니다.",
    password: "사용하실 수 없는 비밀번호 입니다.",
  };

  const [idMessage, setIdMessage] = useState(helpText.id);
  const [passwordMessage, setPasswordMessage] = useState(helpText.password);

  const onChangeId = (e) => {
    setId(e.target.value);
    e.target.value === "" ? setIsIdEmpty(true) : setIsIdEmpty(false);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    e.target.value === ""
      ? setIsPasswordEmpty(true)
      : setIsPasswordEmpty(false);
  };

  const clearId = (e) => {
    setId("");
    setIsIdEmpty(true);
    setIsIdError(false);
    setIdMessage(helpText.id);
  };

  const clearPassword = (e) => {
    setPassword("");
    setIsPasswordEmpty(true);
    setIsPasswordError(false);
    setPasswordMessage(helpText.password);
  };

  const checkContents = (e) => {
    const checkId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,9}$/;
    const checkPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/;
    if (!checkId.test(id) && checkPassword.test(password)) {
      setIsIdError(true);
      setIsPasswordError(false);
      setIdMessage(messageText.id);
    } else if (checkId.test(id) && !checkPassword.test(password)) {
      setIsIdError(false);
      setIsPasswordError(true);
      setPasswordMessage(messageText.password);
    } else if (!checkId.test(id) && !checkPassword.test(password)) {
      setIsIdError(true);
      setIsPasswordError(true);
      setIdMessage(messageText.id);
      setPasswordMessage(messageText.password);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Header isVisible={false} />
      <LoginPageArea>
        <LoginContentArea>
          <LoginTitle>로그인</LoginTitle>
          <InputBox
            helpText={idMessage}
            placeholderText={placeholderText.id}
            isError={isIdError}
            isEmpty={isIdEmpty}
            isCorrect={isCorrect}
            passwordType={false}
            inputEvent={(e) => onChangeId(e)}
            data={id}
            clickEvent={(e) => clearId(e)}
          />
          <InputBox
            helpText={passwordMessage}
            placeholderText={placeholderText.password}
            isError={isPasswordError}
            isEmpty={isPasswordEmpty}
            isCorrect={isCorrect}
            passwordType={true}
            inputEvent={(e) => onChangePassword(e)}
            data={password}
            clickEvent={(e) => clearPassword(e)}
          />
          <ButtonArea>
            <LargeButton
              isActive={id && password}
              text={"로그인"}
              clickEvent={checkContents}
            />
          </ButtonArea>
          <JoinLink
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입
          </JoinLink>
        </LoginContentArea>
      </LoginPageArea>
    </>
  );
};

const LoginPageArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContentArea = styled.div`
  width: 540px;
  height: 606px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 114px;
`;

const LoginTitle = styled.div`
  width: 150px;
  height: 74px;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 65px;
`;

const ButtonArea = styled.div`
  width: 540px;
  height: 90px;
  margin-top: 61px;
`;

const JoinLink = styled.div`
  width: 88px;
  height: 30px;
  display: flex;
  margin-left: auto;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-top: 31px;
`;

export default Login;
