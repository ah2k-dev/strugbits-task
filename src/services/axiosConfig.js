import axios from "axios";

export const baseURL = "https://reqres.in/api/users?page=1";

const custAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// attaching jwt token to axios so that it can be used in all the requests and the server can verify the user
// export const attachToken = () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     // axios.headers.Authorization = `${token}`;
//     custAxios.defaults.headers.common["Authorization"] = `${token}`;
//   }
// };

export default custAxios;
