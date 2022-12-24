import { render, screen } from '@testing-library/react';
import TopSection from './TopSection';

type Props = {
  host: { name: string; picture: string };
  location: string;
  rating: string;
  tags: string[];
  title: string;
};

describe('Render TopSection correctly.', () => {
  const mockedProps = {
    host: {
      name: 'John Doe',
      picture: '/profile-picture',
    },
    location: 'Amsterdam',
    rating: '3',
    tags: ['Nice', 'Cool', 'Awesome'],
    title: 'Best accomodation.',
  };

  const renderTopSection = (Props: Props) => render(<TopSection {...Props} />);

  it('Render the title and tags section.', () => {
    renderTopSection(mockedProps);

    const titleTags = screen.getByTestId('title-tags-test');

    expect(titleTags).toBeInTheDocument();
    expect(screen.getByText(mockedProps.title)).toBeInTheDocument();

    mockedProps.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('Render the review and owner section.', () => {
    renderTopSection(mockedProps);

    const orangeStars = screen.getAllByTestId('orange-star-test');
    const greyStars = screen.getAllByTestId('grey-star-test');
    const profilePicture = screen.getByAltText('profile picture');
    const firstname = mockedProps.host.name.split(' ')[0];
    const lastname = mockedProps.host.name.split(' ')[1];

    expect(orangeStars).toHaveLength(3);
    expect(greyStars).toHaveLength(2);

    expect(screen.getByText(firstname)).toBeInTheDocument();
    expect(screen.getByText(lastname)).toBeInTheDocument();
    expect(profilePicture).toHaveAttribute('src', mockedProps.host.picture);
  });
});
