import React from "react";
import plane_img from "../assets/images/icon_airplane.svg";
import logout_img from "../assets/images/icon_logout.svg";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderTopArea>
      <HeaderTitleBox>
        <HeaderTitle>비행기레터</HeaderTitle>
        <img src={plane_img} alt="plane_image" />
      </HeaderTitleBox>
      <HeaderLogout>
        <img src={logout_img} alt="logout_image" />
      </HeaderLogout>
    </HeaderTopArea>
  );
};

const HeaderTopArea = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

export default Header;
