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
  const goLogin = useNavigate();

  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AxiosMain(page);
        callbackFunctions.getDataSuccess(data);
        setPage((prev) => prev + 1);
      } catch (error) {
        alert(error);
      }
    };
    if (!localStorage.getItem("token")) {
      goLogin("/login");
      alert("로그인이 필요합니다!");
    } else {
      fetchData();
    }
  }, []);

  const callbackFunctions = {
    getDataSuccess: (data) => {
      setPost((prevData) => [...prevData, ...data]);
    },
    setPageIncrease: () => {
      setPage((prev) => prev + 1);
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + Math.floor(window.scrollY) >=
        document.documentElement.scrollHeight
      ) {
        AxiosMain(page).then((data) => {
          callbackFunctions.getDataSuccess(data);
          callbackFunctions.setPageIncrease();
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <>
      <Header isvisible={true} />
      <MainPageArea>
        <ContentArea>
          <ButtonArea>
            <SmallButton
              isactive={true}
              ismine={true}
              text={"작성하기"}
              clickevent={() => goWrite("/write")}
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
