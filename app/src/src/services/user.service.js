import axios from "axios";
import instance from "./api.service";

const END_POINT = "/account";

const update = async (credentials) => {
  try {
    const res = await instance.put(`${END_POINT}`, credentials);
    return res.data;
  } catch (error) {
    alert("mot de passe incorrect");
    console.error(error);
  }
};

const UserService = {
  update,
};

export default UserService;
