import { styled } from "styled-components";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import LargeButton from "../../components/LargeButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosLogin } from "../../api/Login";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [isIdError, setIsIdError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isIdEmpty, setIsIdEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isCorrect] = useState(false);

  const navigate = useNavigate();

  const PLACEHOLDER_TEXT = {
    id: "아이디",
    password: "비밀번호",
  };

  const HELP_TEXT = {
    id: "영문과 숫자를 조합하여 5 ~ 10 글자로 입력하여 주세요.",
    password: "영문과 숫자,특수기호를 조합하여 8~14글자로 입력하여 주세요.",
  };

  const MESSAGE_TEXT = {
    id: "사용하실 수 없는 아이디 입니다.",
    password: "사용하실 수 없는 비밀번호 입니다.",
  };

  const { id: placeholderId, password: placeholderPassword } = PLACEHOLDER_TEXT;

  const { id: helpId, password: helpPassword } = HELP_TEXT;

  const { id: messageId, password: messagePassword } = MESSAGE_TEXT;

  const [idMessage, setIdMessage] = useState(helpId);
  const [passwordMessage, setPasswordMessage] = useState(helpPassword);

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

  const clearId = () => {
    setId("");
    setIsIdEmpty(true);
    setIsIdError(false);
    setIdMessage(helpId);
  };

  const clearPassword = () => {
    setPassword("");
    setIsPasswordEmpty(true);
    setIsPasswordError(false);
    setPasswordMessage(helpPassword);
  };

  const successToken = (token) => {
    localStorage.setItem("token", token);
    navigate("/");
  };

  const checkContents = () => {
    AxiosLogin({ id, password }, successToken);
    const checkId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,9}$/;
    const checkPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/;
    if (!checkId.test(id) && checkPassword.test(password)) {
      setIsIdError(true);
      setIsPasswordError(false);
      setIdMessage(messageId);
    } else if (checkId.test(id) && !checkPassword.test(password)) {
      setIsIdError(false);
      setIsPasswordError(true);
      setPasswordMessage(messagePassword);
    } else if (!checkId.test(id) && !checkPassword.test(password)) {
      setIsIdError(true);
      setIsPasswordError(true);
      setIdMessage(messageId);
      setPasswordMessage(messagePassword);
    }
  };

  return (
    <>
      <Header isVisible={false} />
      <LoginPageArea>
        <LoginContentArea isLogin={localStorage.getItem("token")}>
          <LoginTitle>로그인</LoginTitle>
          <InputBox
            helptext={idMessage}
            placeholdertext={placeholderId}
            iserror={isIdError}
            isempty={isIdEmpty}
            iscorrect={isCorrect}
            passwordtype={false}
            inputevent={onChangeId}
            data={id}
            clickevent={clearId}
          />
          <InputBox
            helptext={passwordMessage}
            placeholdertext={placeholderPassword}
            iserror={isPasswordError}
            isempty={isPasswordEmpty}
            iscorrect={isCorrect}
            passwordtype={true}
            inputevent={onChangePassword}
            data={password}
            clickevent={clearPassword}
          />
          <ButtonArea>
            <LargeButton
              isactive={id && password}
              text={"로그인"}
              clickevent={checkContents}
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
  display: ${({ isLogin }) => (isLogin ? "none" : "block")};
`;

const LoginTitle = styled.div`
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
