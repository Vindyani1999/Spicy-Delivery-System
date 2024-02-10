import axios from "axios";

export const getAll = async () => {
  const { data } = await axios.get("/api/spices");
  return data;
};

export const search = async (searchTerm) => {
  const { data } = await axios.get("/api/spices/search/" + searchTerm);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get("/api/spices/tags");
  return data;
};

export const getAllByTag = async (tag) => {
  if (tag === "All") return getAll();
  const { data } = await axios.get("/api/spices/tag/" + tag);
  return data;
};

export const getById = async (spicyId) => {
  const { data } = await axios.get("/api/spices/" + spicyId);
  return data;
};
