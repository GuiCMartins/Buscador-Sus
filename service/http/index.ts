import axios from "axios";

export const httpClient = (params) => {
  return axios.create({
    baseURL: `http://tabnet.datasus.gov.br/cgi/tabcgi.exe?${params}`,
  });
};