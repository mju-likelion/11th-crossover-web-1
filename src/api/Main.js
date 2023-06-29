import Axios from "./Axios";

export const AxiosMain = async (page) => {
  try {
    const response = await Axios.get("/api/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    return alert(error);
  }
};
