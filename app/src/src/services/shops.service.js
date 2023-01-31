import axios from "axios";
import instance from "./api.service";

const END_POINT = "/shops";

const getAll = async () => {
  try {
    const res = await instance.get(`${END_POINT}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const createShop = async (credentials) => {
  try {
    const res = await instance.post(`${END_POINT}`, credentials);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getShopsOfUser = async () => {
  try {
    const res = await instance.get(`${END_POINT}/user`);
    console.log("getShopsOfUser");
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getOneShop = async (id) => {
  try {
    const res = await instance.get(`${END_POINT}/user/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const updateShop = async (id, credentials) => {
  try {
    const res = await instance.put(`${END_POINT}/${id}`, credentials);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteShop = async (id) => {
  try {
    const res = await instance.delete(`${END_POINT}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const ShopsService = {
  getAll,
  createShop,
  getShopsOfUser,
  getOneShop,
  updateShop,
  deleteShop,
};

export default ShopsService;
