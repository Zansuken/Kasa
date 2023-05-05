import accommodationsData from '../../data/accommodations.json';

export const getSelectedAccommodation = (selectedId: string) => {
  const selectedAccommodation = accommodationsData.filter(
    (accommodation) => accommodation.id === selectedId
  );
  return selectedAccommodation[0];
};
