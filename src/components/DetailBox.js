import { useEffect, useState } from "react";
import { styled } from "styled-components";
import SmallButton from "./SmallButton";
import { AxiosPost } from "../api/Post";
import { useNavigate } from "react-router-dom";

const DetailBox = ({ isMine }) => {
  const [title, setTitle] = useState("");
  const [titleCount, setTitleCount] = useState(0);

  const [detail, setDetail] = useState("");
  const [detailCount, setDetailCount] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    setTitleCount(e.target.value.length);
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
    setDetailCount(e.target.value.length);
  };

  const goMain = () => {
    navigate("/");
  };

  useEffect(() => {
    title && detail ? setIsActive(true) : setIsActive(false);
  }, [title, detail]);

  return (
    <>
      <DetailArea>
        <DetailTitleArea>
          <TitleContent>
            <TitleDiv>제목: </TitleDiv>
            <InputTitle
              id="title"
              type="text"
              name="title"
              maxLength={20}
              value={title}
              onChange={onChangeTitle}
            />
            <TitleCount>({titleCount} / 20)</TitleCount>
          </TitleContent>
        </DetailTitleArea>
        <DetailBoxArea>
          <DetailContent>
            <InputDetail
              id="detail"
              type="text"
              name="detail"
              maxLength={140}
              value={detail}
              onChange={onChangeDetail}
            />
          </DetailContent>
          <DetailCount>({detailCount} / 140)</DetailCount>
        </DetailBoxArea>
        <AlarmArea>
          <AlarmContent>※ 작성된 게시글은 수정이 불가합니다.</AlarmContent>
          <ButtonArea>
            <SmallButton
              type={!isMine && "black"}
              text={"작성하기"}
              isactive={isActive}
              ismine={isMine}
              clickevent={() => AxiosPost({ title, detail }, goMain)}
            />
          </ButtonArea>
        </AlarmArea>
      </DetailArea>
    </>
  );
};

const DetailArea = styled.div`
  width: 794px;
`;

const DetailTitleArea = styled.div`
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

const InputTitle = styled.input`
  width: 560px;
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  border: none;
  outline: none;
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

const InputDetail = styled.textarea`
  width: 714px;
  height: 627px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border: none;
  outline: none;
  resize: none;
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

export default DetailBox;
