import api from "./axios";

export const getTodoItems = async () => {
  try {
    const res = await api.get("/Todos");
    console.log("in the todoapi.js");
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("error fetching todos", error);
    throw error;
  }
};
