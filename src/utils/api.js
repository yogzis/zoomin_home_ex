import axios from 'axios';

const swapi = axios.create({ baseURL: 'https://swapi.dev/api/' });

export const getAllFilms = async () => {
   try {
      const { data } = await swapi.get('films/');
      return data;
   } catch (e) {
      console.log(e);
   }
};
