import { styled } from "styled-components";
import Header from "../../components/Header";
import DetailBox from "../../components/DetailBox";

const Post = () => {
  return (
    <>
      <Header isVisible={true} />
      <PostPageArea>
        <PostContentArea>
          <DetailBox isWrite={true} />
        </PostContentArea>
      </PostPageArea>
    </>
  );
};

const PostPageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PostContentArea = styled.div`
  width: 783px;
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default Post;
