import Axios from "./Axios";

export const AxiosPost = (data) => {
  const { title, detail } = data;

  Axios.post(
    "/api/posts",
    { title, detail },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  )
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
