export const BASE_PATH = '/Kasa';

export enum ROUTES {
  HOME = BASE_PATH,
  ACCOMMODATION = `${BASE_PATH}/logements/:logementId`,
  ABOUT = `${BASE_PATH}/a-propos`,
  NOT_FOUND = `${BASE_PATH}/404`,
}
