import axios from "axios";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";

const Token = async (refreshToken) => {
  const { newAccessToken } = await axios.get(`${CONFIG.serverUrl}/auth/refresh?token=${refreshToken}`);
  Cookies.set("bbeep-access-token", newAccessToken);
};

export default Token;
