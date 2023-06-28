import Axios from "./Axios";

export const AxiosDetail = (id, usecallbackFunction) => {
  Axios.get(`/api/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      usecallbackFunction(res.data);
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
