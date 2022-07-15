import axios from 'axios';

export const APP_ID = 'B9I6OaxhqWCQtc0Fe7m';

export const api = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

export const createNewApp = async () => {
  const response = await api.post('/apps');

  // return response.data.result.slice(15, 34);
  return response.data.result;
};

export const fetchBooks = async () => {
  const response = await api.get(`/games/${APP_ID}/books`);
  return response.data.result;
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
