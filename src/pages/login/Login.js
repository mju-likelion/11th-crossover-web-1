import { styled } from "styled-components";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import SigningButton from "../../components/SigningButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [isIdError, setIsIdError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isIdEmpty, setIsIdEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isCorrect] = useState(false);
  const [disabled, setDisabled] = useState(true);

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
    console.log(id);
    e.target.value === "" ? setIsIdEmpty(true) : setIsIdEmpty(false);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
    e.target.value === ""
      ? setIsPasswordEmpty(true)
      : setIsPasswordEmpty(false);
  };

  const clearId = (e) => {
    setId("");
  };

  const clearPassword = (e) => {
    setPassword("");
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

  useEffect(() => {
    (id && password) !== "" ? setDisabled(false) : setDisabled(true);
  }, [id, password]);

  return (
    <>
      <Header isVisible={false} />
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
        <SigningButton
          disabled={disabled}
          text={"로그인"}
          clickEvent={checkContents}
        />
      </LoginContentArea>
    </>
  );
};

const LoginContentArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.div`
  width: 150px;
  height: 74px;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
`;

export default Login;
