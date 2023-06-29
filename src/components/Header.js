import React from "react";
import plane_img from "../assets/images/icon_airplane.svg";
import logout_img from "../assets/images/icon_logout.svg";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ isvisible }) => {
  //로그인과 회원가입에서는 로그아웃 버튼이 나올 필요가 없으르모 isvisible=false로 놓으면 됩니다.

  const navigate = useNavigate();

  const goLogin = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    goLogin("/login");
  };

  return (
    <HeaderTopArea>
      <HeaderTitleBox
        onClick={
          localStorage.getItem("token")
            ? () => navigate("/")
            : () => navigate("/login")
        }
      >
        <HeaderTitle>비행기레터</HeaderTitle>
        <img src={plane_img} alt="plane_image" />
      </HeaderTitleBox>
      <HeaderLogout>
        <LogoutImg
          src={logout_img}
          isvisible={isvisible}
          alt="logout_image"
          onClick={handleLogout}
        />
      </HeaderLogout>
    </HeaderTopArea>
  );
};

const HeaderTopArea = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #717171;
`;

const HeaderTitleBox = styled.div`
  width: 174px;
  height: 34px;
  color: ${({ theme }) => theme.colors.BLUE2};
  display: flex;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  width: 129px;
  height: 38px;
  font-size: 25px;
  font-weight: 600;
  line-height: 34px;
`;

const HeaderLogout = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const LogoutImg = styled.img`
  display: ${({ isvisible }) => (isvisible ? "block" : "none")};
`;

export default Header;
