import { styled } from "styled-components";
import Header from "../../components/Header";
import DetailBox from "../../components/DetailBox";

const Content = () => {
  return (
    <>
      <Header isVisible={true} />
      <ContentPageArea>
        <ContentArea>
          <DetailBox isWrite={false} />
        </ContentArea>
      </ContentPageArea>
    </>
  );
};

const ContentPageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentArea = styled.div`
  width: 783px;
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default Content;
