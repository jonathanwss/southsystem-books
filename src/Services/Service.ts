/* eslint-disable prettier/prettier */
import axios, { AxiosResponse } from 'axios';
import { ISearchBooks } from '../Store/IGoogleApiBooks';

const baseUrl = 'https://www.googleapis.com/books/v1/';
function getAxios() {
    const instanceAxios = axios.create({
      baseURL: baseUrl,
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

export async function serviceGetBooksBySearchTerm(searchTerm: string): Promise<ISearchBooks>{
    try {
        const path = 'volumes';

        const response = await getAxios().get(`${path}?q=${searchTerm}`);

        return response.data;
    } catch (e){
        throw e;
    }
}
