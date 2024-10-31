import { User } from '@utils/types/user';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const checkServerStatus = () => {
  return fetch(`${apiUrl}/`).then((response) => response.text());
};

export const registerUser = (email: string, password: string, name: string): Promise<User> => {
  return fetch(`${apiUrl}/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then((response) => response.json());
};

export const signIn = (email: string, password: string): Promise<User> => {
  return fetch(`${apiUrl}/signin`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => response.json());
};

export const detectFace = (input: string) => {
  return fetch(`${apiUrl}/imageurl`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: input,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error detecting face');
      }
      return response.json();
    })
    .catch((err) => {
      throw err;
    });
};

export const updateEntries = (userId: string) => {
  return fetch(`${apiUrl}/image`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: userId,
    }),
  }).then((response) => response.json());
};
