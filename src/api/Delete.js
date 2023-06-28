import Axios from "./Axios";

export const AxiosDelete = (id, usecallbackFunction) => {
  Axios.delete(`/api/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      usecallbackFunction();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
