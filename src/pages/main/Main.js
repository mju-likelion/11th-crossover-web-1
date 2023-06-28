import { styled } from "styled-components";
import Header from "../../components/Header";
import SmallButton from "../../components/SmallButton";
import ContentBox from "../../components/ContentBox";
import { useNavigate } from "react-router-dom";
import { AxiosMain } from "../../api/Main";
import { useState, useEffect } from "react";

const Main = () => {
  const goWrite = useNavigate();
  const goPost = useNavigate();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AxiosMain();
        setPost(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header isVisible={true} />
      <MainPageArea>
        <ContentArea>
          <ButtonArea>
            <SmallButton
              isActive={true}
              text={"작성하기"}
              clickEvent={() => goWrite("/write")}
            />
          </ButtonArea>
          <DetailArea>
            {post &&
              post.map((item, idx) => (
                <ContentBox
                  key={idx}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  createdAt={item.createdAt}
                  isMine={item.isMine}
                  updatedAt={item.updatedAt}
                  onClick={() => goPost(item.id)}
                />
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
