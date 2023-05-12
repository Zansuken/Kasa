import { render, screen } from '@testing-library/react';
import AccommodationDetails from './AccommodationDetails';
import { ComponentProps } from 'react';

describe('AccommodationDetails', () => {
  const { getByText } = screen;

  it('Render AccommodationDetails correctly.', () => {
    const mockedProps: ComponentProps<typeof AccommodationDetails> = {
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
    expect(getByText(/Description/i)).toBeInTheDocument();
    expect(getByText(/Équipements/i)).toBeInTheDocument();

    // Contents
    expect(getByText(mockedProps.description)).toBeInTheDocument();
    mockedProps.equipments.forEach((equipment) => {
      expect(getByText(equipment)).toBeInTheDocument();
    });
  });
});
