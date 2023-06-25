import { Axios } from "./Axios";

export const AxiosSignup = (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;

  const { id, password, email } = data;

  Axios.post("/api/auth/register", {
    id,
    password,
    email,
  })
    .then((res) => {
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((err) => alert(err));
    });
};
