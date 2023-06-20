import { styled } from "styled-components";
import LargeButton from "../../components/LargeButton";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import { useState, useEffect } from "react";
import checkBox from "../../assets/images/icon_checkbox.svg";
import fullCheckBox from "../../assets/images/icon_fullcheckbox.svg";

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

  const failText = {
    id: "사용하실 수 없는 아이디 입니다.",
    password: "사용하실 수 없는 비밀번호 입니다.",
    email: "이메일 형식에 맞지 않습니다.",
  };

  const successText = {
    id: "사용 가능한 아이디 입니다.",
    password: "사용 가능한 비밀번호 입니다.",
    email: "사용 가능한 이메일 입니다.",
  };

  const [idMessage, setIdMessage] = useState(helpText.id);
  const [passwordMessage, setPasswordMessage] = useState(helpText.password);
  const [emailMessage, setEmailMessage] = useState(helpText.email);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const checkId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,9}$/;

    if (checkId.test(currentId)) {
      setIsIdError(true);
      setIsIdEmpty(false);
      setIsIdCorrect(true);
      setIdMessage(successText.id);
    } else {
      setIsIdError(true);
      setIsIdEmpty(false);
      setIsIdCorrect(false);
      setIdMessage(failText.id);
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
      setPasswordMessage(successText.password);
    } else {
      setIsPasswordError(true);
      setIsPasswordEmpty(false);
      setIsPasswordCorrect(false);
      setPasswordMessage(failText.password);
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
      setEmailMessage(successText.email);
    } else {
      setIsEmailError(true);
      setIsEmailEmpty(false);
      setIsEmailCorrect(false);
      setEmailMessage(failText.email);
    }
  };

  const clearId = (e) => {
    setId("");
    setIsIdEmpty(true);
    setIsIdError(false);
    setIdMessage(helpText.id);
    setIsIdCorrect(false);
  };

  const clearPassword = (e) => {
    setPassword("");
    setIsPasswordEmpty(true);
    setIsPasswordError(false);
    setPasswordMessage(helpText.password);
    setIsPasswordCorrect(false);
  };

  const clearEmail = (e) => {
    setEmail("");
    setIsEmailEmpty(true);
    setIsEmailError(false);
    setEmailMessage(helpText.email);
    setIsEmailCorrect(false);
  };

  //   useEffect(() => {
  //     (id && password && email) !== "" ? setDisabled(false) : setDisabled(true);
  //   }, [id, password, email]);

  return (
    <>
      <Header isVisible={false} />
      <SignupPageArea>
        <SignupContainer>
          <SignupTitle>회원가입</SignupTitle>
          <InputContainer>
            <InputBox
              helpText={idMessage}
              placeholderText={placeholderText.id}
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
              placeholderText={placeholderText.password}
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
              placeholderText={placeholderText.email}
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
            <AgreePageText>
              [개인정보 수집·이용 동의서] 주식회사 멋쟁이사자처럼은 「정보통신망
              이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 관련
              법령상의 개인정보보호 규정을 준수하여 「멋쟁이사자처럼 대학 11기」
              참가자의 개인정보 및 권익을 보호하고, 개인정보와 관련한 참가자의
              고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을
              두고 있습니다.
              <br />
              <br />
              가. 개인 정보의 수집· 이용에 관한 사항 ▣
              <br />
              <br />
              개인 정보의 수집· 이용 목적 개인 정보는 1차적으로 본 프로그램
              참가신청, 참가신청에 따른 본인확인, 개인식별, 프로그램 진행,
              프로그램 관련 안내/고지사항 등의 전달, 문의사항 또는 불만사항 등의
              확인 및 처리, 분쟁 조정을 위한 기록 보존 등을 위해 사용됩니다.
              이후 멋쟁이사자처럼의 프로그램 및 브랜드 홍보를 위한 마케팅에
              활용될 수 있습니다. 지원 프로세스 관리를 위한 개인정보 열람을
              위해, 본 동아리 지원 의사 확인, 지원관리에 따른 본인 식별·인증,
              지원자 자격 유지·관리, 고충처리(CS) 목적으로 개인정보를
              처리합니다.
              <br />
              <br />
              민원사무 처리를 위해 민원인의 신원 확인, 민원사항 확인, 처리결과
              통보 목적으로 개인정보를 처리합니다.
              <br />
              서비스 제공을 위해 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공,
              본인인증을 목적으로 개인정보를 처리합니다.
              <br />
              <br />▣ 수집하는 개인 정보의 항목
              <br /> 성명, 연락처, 이메일 등 신청 및 프로그램 운영 중 취득한
              정보
              <br />
              <br />▣ 개인 정보의 보유· 이용기간
              <br />
              개인 정보는 원칙적으로 개인 정보의 수집 및 이용목적이 달성되면
              지체 없이 파기합니다. 단, 본 사업 종료 후 참여 인정 문서 발급을
              위한 최소한의 자료(성명, 학번, 학과, 연락처, 이메일)는 사업종료
              이후 5년간 보존됩니다.
              <br />
              <br />
              ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
              <br />
              위 개인 정보의 수집· 이용에 거부할 권리가 있음을 알려드립니다. 단,
              수집항목은 사업 진행을 위한 최소한의 필수 정보로서 개인 정보 수집·
              이용에 동의하지 않으실 경우 프로
              <br />
              그램 참가 및 제반 활동이 불가능합니다.
              <br />
              <br />
              나. 개인 정보 제3자 제공에 관한 사항 <br />
              <br /> ▣ 제공받는 자 <br />
              주식회사 멋쟁이사자처럼 <br />
              <br /> ▣ 제공받는 자의 목적
              <br />
              ‘멋쟁이사자처럼 대학 11기 모집’ 진행 및 운영, 참가자 관리
              <br />
              <br />▣ 제공하는 개인 정보 항목 성명, 연락처, 이메일 등 신청 및
              프로그램 운영 중 취득한 정보 <br />
              <br /> ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익 <br />
              위 제3자에 대한 개인 정보의 제공에 관한 동의를 거부할 수 있으나 본
              프로그램 참가를 위해 필수적이므로 위 사항에 동의하셔야만 참가 및
              활동이 가능합니다.
            </AgreePageText>
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
  margin-bottom: 115px;
`;

const AgreeCheckContainer = styled.div`
  width: 1113px;
  height: 24px;
  display: flex;
  flex-direction: row;
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
  margin-left: 10px;
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
