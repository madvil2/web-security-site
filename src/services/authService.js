import axios from "axios";
import service from "./service";
import { getApiUrl } from "../utils/getApiUrl";

export default {
  checkAuth: () => service.get(getApiUrl("auth/check")),
  login: async (role, username, password) =>
    axios.post(`http://localhost:8000/api/${role}/login`, {
      username,
      password,
    }),
  loginClient: async (phone, phoneHoney) =>
    axios.post(`http://127.0.0.1:33306/api/v1/auth/generate-code`, {
      phone,
      phoneHoney,
    }),
  codeClient: async (phone, code) =>
    axios.post(`http://127.0.0.1:33306/api/v1/auth/login`, {
      phone,
      code,
      fingerprint: window.PX.settings.fingerprint,
    }),
  logout: async () => {
    const resp = await service.post(getApiUrl("auth/logout"));
    return resp.status === 200;
  },
};
