import { useEffect, useState } from "react";
import { styled } from "styled-components";
import SmallButton from "./SmallButton";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../api/Axios";
import { AxiosDelete } from "../api/Delete";

const ShowBox = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(`/api/posts/${params.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        error.response.data.message.map((message) => alert(message));
      });
  }, [params.id]);

  const title = data.title;
  const titleCount = String(data.title).length;

  const detail = data.content;
  const detailCount = String(data.content).length;
  const isActive = useState(true);

  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  return (
    <>
      <ShowArea>
        <ShowTitleArea>
          <TitleContent>
            <TitleDiv>제목: </TitleDiv>
            <TitleBox>{title}</TitleBox>
            <TitleCount>({titleCount} / 20)</TitleCount>
          </TitleContent>
        </ShowTitleArea>
        <DetailBoxArea>
          <DetailContent>
            <DetailBox>{detail}</DetailBox>
          </DetailContent>
          <DetailCount>({detailCount} / 140)</DetailCount>
        </DetailBoxArea>
        <AlarmArea>
          <AlarmContent>※ 작성된 게시글은 수정이 불가합니다.</AlarmContent>
          <ButtonArea>
            <SmallButton
              type={"black"}
              text={"삭제하기"}
              isActive={isActive}
              isMine={data.isMine}
              clickEvent={() => AxiosDelete(params.id, goMain)}
            />
          </ButtonArea>
        </AlarmArea>
      </ShowArea>
    </>
  );
};

const ShowArea = styled.div`
  width: 794px;
`;

const ShowTitleArea = styled.div`
  width: 794px;
  height: 134px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  margin-top: 21px;
`;

const DetailBoxArea = styled.div`
  width: 794px;
  height: 733px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  margin-top: 16px;
`;

const TitleContent = styled.div`
  width: 715px;
  height: 24px;
  display: flex;
  align-items: center;
  margin-left: 35px;
  margin-top: 57px;
`;

const TitleDiv = styled.div`
  width: 55px;
  height: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`;

const TitleBox = styled.div`
  width: 560px;
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  border: none;
`;

const TitleCount = styled.div`
  height: 24px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-left: 18px;
`;

const DetailContent = styled.div`
  width: 714px;
  height: 660px;
  margin-top: 35px;
  margin-left: 35px;
`;

const DetailBox = styled.div`
  width: 714px;
  height: 627px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border: none;
`;

const DetailCount = styled.div`
  height: 24px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY};
  float: right;
  margin-right: 35px;
`;

const AlarmArea = styled.div`
  width: 794px;
  height: 151px;
  margin-top: 16px;
`;

const AlarmContent = styled.div`
  width: 726px;
  height: 28px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const ButtonArea = styled.div`
  width: 233px;
  height: 70px;
  float: right;
`;

export default ShowBox;
