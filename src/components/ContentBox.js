import { styled } from "styled-components";
import colorProfile_img from "../assets/images/icon_colorProfile.svg";
import defaultProfile_img from "../assets/images/icon_defaultProfile.svg";
import { useNavigate } from "react-router-dom";

const ContentBox = ({ content, id, isMine, title, createdAt }) => {
  const navigate = useNavigate();

  const newTime = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDiff = now.getTime() - createdDate.getTime();

    const hours = createdDate.getHours();
    const minutes = String(createdDate.getMinutes()).padStart(2, "0");

    const daysBefore = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (timeDiff < 1000 * 60 * 60 * 24) {
      return `${hours}:${minutes}`;
    } else {
      return `${daysBefore}일 전`;
    }
  };

  return (
    <>
      <ContentArea onClick={() => navigate(`/${id}`)}>
        <ProfileImg src={isMine ? colorProfile_img : defaultProfile_img} />
        <DetailArea>
          <TitleArea>제목 : {title}</TitleArea>
          <DetailBox>
            <DetailContent>{content}</DetailContent>
          </DetailBox>
          <TimeArea>
            <TimeBox>{newTime(createdAt)}</TimeBox>
          </TimeArea>
        </DetailArea>
      </ContentArea>
    </>
  );
};

const ContentArea = styled.div`
  width: 783px;
  height: 343px;
  border-radius: 25px;
  padding: 24px 40px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 54px;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 62px;
  height: 62px;
  margin-top: 20px;
`;

const DetailArea = styled.div`
  width: 598px;
  height: 239px;
  margin-top: 20px;
  margin-left: 41px;
`;

const TitleArea = styled.div`
  width: 598px;
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
`;

const DetailBox = styled.div`
  width: 598px;
  height: 198px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.BLUE1};
  margin-top: 17px;
`;

const DetailContent = styled.div`
  width: 550px;
  height: 162px;
  margin-top: 20px;
  margin-left: 26px;
  font-size: 20px;
  font-weight: 500;
`;

const TimeArea = styled.div`
  width: 598px;
  height: 28px;
  display: flex;
  justify-content: flex-end;
`;

const TimeBox = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

export default ContentBox;
