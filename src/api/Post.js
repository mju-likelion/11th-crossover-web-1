import Axios from "./Axios";

export const AxiosPost = (data, usecallbackFunction) => {
  const { title, detail } = data;

  Axios.post(
    "/api/posts",
    { title: title, content: detail },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  )
    .then((res) => {
      usecallbackFunction();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
