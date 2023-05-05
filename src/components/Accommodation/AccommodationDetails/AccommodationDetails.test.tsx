import { render, screen } from '@testing-library/react';
import AccommodationDetails from './AccommodationDetails';

it('Render AccommodationDetails correctly.', () => {
  const mockedProps = {
    description: 'Votre maison loin de chez vous...',
    equipments: [
      'Parking',
      'Sèche Cheveux',
      'Machine à laver',
      'Wi-fi',
      'Cuisine équipée',
      'Télévision',
    ],
  };

  render(<AccommodationDetails {...mockedProps} />);

  // Labels
  expect(screen.getByText(/Description/i)).toBeInTheDocument();
  expect(screen.getByText(/Équipements/i)).toBeInTheDocument();

  // Contents
  expect(screen.getByText(mockedProps.description)).toBeInTheDocument();
  mockedProps.equipments.forEach((equipment) => {
    expect(screen.getByText(equipment)).toBeInTheDocument();
  });
});
