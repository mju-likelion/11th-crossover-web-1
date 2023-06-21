import { styled } from "styled-components";
import Header from "../../components/Header";
import SmallButton from "../../components/SmallButton";
import ContentBox from "../../components/ContentBox";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const dataContents = [
    {
      id: "0",
      isMine: false,
      title: "title1",
      detail: "text1",
      time: "15:20",
    },
    {
      id: "1",
      isMine: false,
      title: "title2",
      detail: "text2",
      time: "14:30",
    },
    {
      id: "2",
      isMine: true,
      title: "title3",
      detail: "text3",
      time: "11:24",
    },
  ];

  return (
    <>
      <Header isVisible={true} />
      <MainPageArea>
        <ContentArea>
          <ButtonArea>
            <SmallButton
              isActive={true}
              text={"작성하기"}
              clickEvent={() => navigate("/write")}
            />
          </ButtonArea>
          <DetailArea>
            {dataContents.map((item, idx) => (
              <ContentBox key={item.id} id={idx} dataContents={item} />
            ))}
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
