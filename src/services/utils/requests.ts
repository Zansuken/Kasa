import accomodationsData from '../../data/accomodations.json';

export const getSelectedAccomodation = (selectedId: string) => {
  const selectedAccomodation = accomodationsData.filter(
    (accomodation) => accomodation.id === selectedId
  );
  return selectedAccomodation[0];
};
