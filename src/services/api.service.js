import axios from 'axios';

export const APP_ID = 'HGsLWg6ScL418xCAV7ve';

export const api = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

export const createNewApp = async () => {
  const response = await api.post('/apps');

  return response.data;
};

export const fetchBooks = async () => {
  const { data } = await api.get(`/apps/${APP_ID}/books`);
  return Object.entries(data).map((pair) => ({ ...pair[1][0], id: pair[0] }));
};

export const addNewBook = async ({ id, ...otherBookProps }) => {
  await api.post(`/apps/${APP_ID}/books`, {
    item_id: id,
    ...otherBookProps,
  });
};

export const removeBookById = async (bookId) => {
  await api.delete(`/apps/${APP_ID}/books/${bookId}`);
};
