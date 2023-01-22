/* eslint-disable indent */
import axios from "axios";
// import router from "./router";
import store from "@/store";

const instance = axios.create({
  // baseURL: process.env.MIX_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
    "access-control-allow-credentials": true,
    // "X-Requested-With": "XMLHttpRequest",
  },
  // headers: { Authorization: getToken() ? "Bearer " + getToken() : null }
  // You can add your headers here
});

instance.defaults.timeout = 20000;

instance.interceptors.request.use(
  (config) => {
    const token = store.getters["authentication/getAccessToken"];
    // console.log("interceptor token ==>> ", token);
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (response) => {
//     console.log("axios ", response);
//     if (response.status === 200 || response.status === 201) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   (error) => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         case 400:
//           //do something
//           break;
//         case 401:
//           router.replace({
//             path: "/login",
//             query: { redirect: router.currentRoute.fullPath },
//           });
//           break;
//         case 403:
//           router.replace({
//             path: "/login",
//             query: { redirect: router.currentRoute.fullPath },
//           });
//           break;
//         case 404:
//           alert("page not exist");
//           break;
//         case 502:
//           setTimeout(() => {
//             router.replace({
//               path: "/login",
//               query: {
//                 redirect: router.currentRoute.fullPath,
//               },
//             });
//           }, 1000);
//           break;
//       }
//       console.error("here", error);
//       return Promise.reject(error.response);
//     }
//   }
// );

export default instance;
