/* eslint-disable prettier/prettier */
import axios, { AxiosResponse } from 'axios';


function getAxios() {
    const instanceAxios = axios.create({
      baseURL: '',
      timeout: 6000,
      headers: { 'Content-Type': 'application/json' },
    });

    function isInvalidResponse(response: AxiosResponse) {
      return typeof response.data === 'object' && 'result' in response.data && !response.data.result;
    }

    instanceAxios.interceptors.response.use(
      function (response) {
        if (isInvalidResponse(response)) {
          return Promise.reject(response);
        }
        return response;
      },
      function (error) {
        throw error;
      },
    );

    return instanceAxios;
}