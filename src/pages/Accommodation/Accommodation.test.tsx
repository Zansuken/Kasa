import { screen, waitFor } from '@testing-library/react';
import Accommodation from './Accommodation';
import { Accommodation as AccommodationType } from 'types/accommodations';
import { accommodationsCtx } from 'contexts/accommodations';
import { CustomRouter } from 'Router';
import { render } from 'utils/tests';

const { getByText } = screen;

const mockData: AccommodationType[] = [
  {
    id: '1',
    title: 'Mock Accommodation 1',
    location: 'Mock Location 1',
    tags: ['tag1', 'tag2'],
    host: { name: 'Mock Host 1', picture: 'Mock Picture 1' },
    rating: '4',
    description: 'Mock description 1',
    equipments: ['equip1', 'equip2'],
    pictures: ['pic1', 'pic2'],
    cover: 'cover1',
  },
];

const mockContextValue = {
  accommodations: mockData,
  fetchData: jest.fn(),
  loading: false,
};

describe('Accommodation component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading message when accommodations is empty', () => {
    render(
      <CustomRouter>
        <Accommodation />
      </CustomRouter>,
      {
        value: { ...mockContextValue, accommodations: [], loading: true },
        context: accommodationsCtx,
      }
    );

    expect(getByText('Chargement...')).toBeInTheDocument();
    expect(mockContextValue.fetchData).toHaveBeenCalledTimes(1);
  });

  it('renders accommodation details when accommodations is not empty', async () => {
    const mockAccommodation = mockData[0];

    render(
      <CustomRouter>
        <Accommodation />
      </CustomRouter>,
      {
        value: mockContextValue,
        context: accommodationsCtx,
      }
    );

    await mockContextValue.fetchData();

    waitFor(() => {
      expect(getByText(mockAccommodation.title)).toBeInTheDocument();
      expect(getByText(mockAccommodation.location)).toBeInTheDocument();
      expect(getByText(mockAccommodation.tags[0])).toBeInTheDocument();
      expect(getByText(mockAccommodation.host.name)).toBeInTheDocument();
      expect(getByText(mockAccommodation.rating)).toBeInTheDocument();
      expect(getByText(mockAccommodation.description)).toBeInTheDocument();
      expect(getByText(mockAccommodation.equipments[0])).toBeInTheDocument();
    });
  });
});
