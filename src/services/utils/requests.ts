import accommodationsData from '../../data/accommodations.json';

export const getSelectedAccomodation = (selectedId: string) => {
  const selectedAccommodation = accommodationsData.filter(
    (accommodation) => accommodation.id === selectedId
  );
  return selectedAccommodation[0];
};
