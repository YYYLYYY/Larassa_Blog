import axios from "axios";

export const httpRequest = ({ url, method, params = "", data = {} }) => {
  const instance = axios.create({
    baseURL: `http://127.0.0.1:8090/`,
    headers: {
      'Content-type': 'application/json'
    }
  });
  return instance({ url, method, params, data })
    .then(res => {
      if (res.status == 200) {
        return res.data;
      } else {
        return {
          code: -1
        };
      }
    })
    .catch(error => {
      let res = error.response;
      return {
        code: -1
      };
    });
};
