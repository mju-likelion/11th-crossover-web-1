import { styled } from "styled-components";
import Header from "../../components/Header";
import SmallButton from "../../components/SmallButton";
import ContentBox from "../../components/ContentBox";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header isVisible={true} />
      <MainPageArea>
        <ContentArea>
          <ButtonArea>
            <SmallButton
              isActive={true}
              text={"작성하기"}
              clickEvent={(e) => navigate("/write")}
            />
          </ButtonArea>
          <DetailArea>
            <ContentBox
              id={0}
              isMine={true}
              title="text"
              detail="text"
              time="00:00"
            />
            <ContentBox
              id={1}
              isMine={false}
              title="text"
              detail="text"
              time="00:00"
            />
            <ContentBox
              id={2}
              isMine={true}
              title="text"
              detail="text"
              time="00:00"
            />
          </DetailArea>
        </ContentArea>
      </MainPageArea>
    </>
  );
};

const MainPageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentArea = styled.div`
  width: 783px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ButtonArea = styled.div`
  width: 233px;
  height: 70px;
  float: right;
`;

const DetailArea = styled.div`
  width: 783px;
  margin-top: 23px;
`;

export default Main;
