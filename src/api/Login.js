import Axios from "./Axios";

export const AxiosLogin = (data, usecallbackFunction) => {
  const { id, password } = data;

  Axios.post("/api/auth/login", {
    id,
    password,
  })
    .then((res) => {
      usecallbackFunction(res.data.accessToken);
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
