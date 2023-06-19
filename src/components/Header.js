import React from "react";
import plane_img from "../assets/images/icon_airplane.svg";
import logout_img from "../assets/images/icon_logout.svg";
import { styled } from "styled-components";

// 하단 border, isVisible props 추가
const Header = ({ isVisible }) => {
  //로그인과 회원가입에서는 로그아웃 버튼이 나올 필요가 없으르모 isVisible=false로 놓으면 됩니다.
  return (
    <HeaderTopArea>
      <HeaderTitleBox>
        <HeaderTitle>비행기레터</HeaderTitle>
        <img src={plane_img} alt="plane_image" />
      </HeaderTitleBox>
      <HeaderLogout>
        <LogoutImg src={logout_img} isVisible={isVisible} alt="logout_image" />
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
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export default Header;
