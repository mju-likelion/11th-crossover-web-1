import { styled } from "styled-components";
import colorProfile_img from "../assets/images/icon_colorProfile.svg";
import defaultProfile_img from "../assets/images/icon_defaultProfile.svg";
import { useNavigate } from "react-router-dom";

const ContentBox = ({ id, dataContents }) => {
  /*
        id는 해당 작성글의 고유 id,
        isMine은 해당 내용이 본인이 작성한 것이면 true,
        title은 해당 내용의 제목,
        detail은 해당 내용의 세부 내용,
        time은 해당 내용의 작성 시간입니다. (아직 확정 안된 임의의 값 입니다.)
    */

  const navigate = useNavigate();
  const { title, content, createdAt, isMine } = dataContents;

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
            <TimeBox>{createdAt}</TimeBox>
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
  width: 52px;
  height: 28px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

export default ContentBox;
