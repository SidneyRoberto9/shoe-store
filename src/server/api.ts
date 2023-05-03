import axios from 'axios';

import { Response } from '@/@types/api';
import { API_URL, STRAPI_API_TOKEN } from '@/server/utils';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export async function fetchDataFromApi(url: string): Promise<Response> {
  const { data } = await api.get<Response>(`${API_URL}/api/${url}`);

  return data;
}

export async function makePaymentRequest(url: string, payload: any) {
  const { data } = await api.post(`${API_URL}/api/${url}`, payload);

  return data;
}