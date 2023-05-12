import { render, screen } from '@testing-library/react';
import TopSection from './TopSection';
import { ComponentProps } from 'react';

const { getByTestId, getByText, getAllByTestId, getByAltText } = screen;

describe('Render TopSection correctly.', () => {
  const mockedProps: ComponentProps<typeof TopSection> = {
    host: {
      name: 'John Doe',
      picture: '/profile-picture',
    },
    location: 'Amsterdam',
    rating: '3',
    tags: ['Nice', 'Cool', 'Awesome'],
    title: 'Best accommodation.',
  };

  beforeEach(() => {
    render(<TopSection {...mockedProps} />);
  });

  it('Render the title and tags section.', () => {
    const titleTags = getByTestId('title-tags-test');

    expect(titleTags).toBeInTheDocument();
    expect(getByText(mockedProps.title)).toBeInTheDocument();

    mockedProps.tags.forEach((tag) => {
      expect(getByText(tag)).toBeInTheDocument();
    });
  });

  it('Render the review and owner section.', () => {
    const orangeStars = getAllByTestId('orange-star-test');
    const greyStars = getAllByTestId('grey-star-test');
    const profilePicture = getByAltText('profile picture');
    const firstName = mockedProps.host.name.split(' ')[0];
    const lastName = mockedProps.host.name.split(' ')[1];

    expect(orangeStars).toHaveLength(3);
    expect(greyStars).toHaveLength(2);

    expect(getByText(firstName)).toBeInTheDocument();
    expect(getByText(lastName)).toBeInTheDocument();
    expect(profilePicture).toHaveAttribute('src', mockedProps.host.picture);
  });
});
