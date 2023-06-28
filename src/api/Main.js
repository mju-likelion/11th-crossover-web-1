import Axios from "./Axios";

export const AxiosMain = async () => {
  try {
    const response = await Axios.get("/api/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return alert(error);
  }
};
