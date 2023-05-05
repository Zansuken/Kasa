import { render, screen } from '@testing-library/react';
import { CustomRouter } from 'App';
import AccommodationCard from './AccommodationCard';

describe('Render AccommodationCard correctly.', () => {
  const mockedAccommodation = {
    id: 'cb02d69b',
    title: 'Magnifique appartement Rivoli',
    cover:
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg',
    pictures: [
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg',
    ],
    description:
      'Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.',
    host: {
      name: 'Nathalie Jean',
      picture:
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg',
    },
    rating: '4',
    location: 'Ile de France - Paris 13e',
    equipments: [
      'Wi-fi',
      'Équipements de base',
      'Micro-Ondes',
      'Frigo',
      'Baignoire',
    ],
    tags: ['Louvre', 'Marais', 'Rivoli'],
  };

  const { cover, title, id } = mockedAccommodation;

  const renderAccommodationCard = () =>
    render(
      <CustomRouter>
        <AccommodationCard accommodation={mockedAccommodation} />
      </CustomRouter>
    );

  it('Render the image.', () => {
    renderAccommodationCard();

    const coverImg = screen.getByTestId('accommodation-image');
    expect(coverImg).toBeInTheDocument();
    expect(coverImg).toHaveAttribute('src', cover);
    expect(coverImg).toHaveAttribute(
      'alt',
      `Photographie du logement: ${title}`
    );
  });

  it('Render the link.', () => {
    renderAccommodationCard();

    const link = screen.getByTestId('accommodation-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('title', 'Affiche les détails du logement');
    expect(link).toHaveAttribute('href', `/logements/${id}`);
  });

  it('Render the title.', () => {
    renderAccommodationCard();

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
