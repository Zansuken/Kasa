import { Accommodation } from 'types/accommodations';
import { Endpoints } from './endpoints';
import { AboutSection } from 'contexts/app';

const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'static' : 'http://localhost:3000';

console.log(process.env);

/**
 * GET request
 * @param url Endpoint to call
 * @returns JSON response
 */
const get = async (url: Endpoints) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) => res.json());

    return response;
  } catch (error) {
    console.error(error);
  }
};

type FetchAccommodations = () => Promise<Accommodation[]>;

/**
 * fetchAccommodations
 * @returns Accommodations
 * @description Fetches accommodations from API
 */
export const fetchAccommodations: FetchAccommodations = async () => {
  try {
    const accommodations = await get(Endpoints.Accommodations);

    return accommodations;
  } catch (error) {
    console.error(error);
  }
};

type FetchAbout = () => Promise<AboutSection[]>;

/**
 * fetchAbout
 * @returns About
 * @description Fetches about from API
 */
export const fetchAbout: FetchAbout = async () => {
  try {
    const about = await get(Endpoints.About);

    return about;
  } catch (error) {
    console.error(error);
  }
};
