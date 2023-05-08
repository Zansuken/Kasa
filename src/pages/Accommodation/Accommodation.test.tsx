import { screen, waitFor } from '@testing-library/react';
import Accommodation from './Accommodation';
import { Accommodation as AccommodationType } from 'types/accommodations';
import { accommodationsCtx } from 'contexts/accommodations';
import { CustomRouter } from 'App';
import { render } from 'utils/tests';

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
};

describe('Accommodation component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading message when accommodations is empty', () => {
    render(
      <CustomRouter>
        <accommodationsCtx.Provider
          value={{ ...mockContextValue, accommodations: [] }}
        >
          <Accommodation />
        </accommodationsCtx.Provider>
      </CustomRouter>,
      {
        value: { accommodations: [], fetchData: jest.fn() },
        context: accommodationsCtx,
      }
    );

    expect(screen.getByText('Chargement...')).toBeInTheDocument();
    expect(mockContextValue.fetchData).toHaveBeenCalledTimes(1);
  });

  test('renders accommodation details when accommodations is not empty', async () => {
    const mockAccommodation = mockData[0];

    render(
      <CustomRouter>
        <accommodationsCtx.Provider value={mockContextValue}>
          <Accommodation />
        </accommodationsCtx.Provider>
      </CustomRouter>,
      {
        value: mockContextValue,
        context: accommodationsCtx,
      }
    );

    await mockContextValue.fetchData();

    waitFor(() => {
      expect(screen.getByText(mockAccommodation.title)).toBeInTheDocument();
      expect(screen.getByText(mockAccommodation.location)).toBeInTheDocument();
      expect(screen.getByText(mockAccommodation.tags[0])).toBeInTheDocument();
      expect(screen.getByText(mockAccommodation.host.name)).toBeInTheDocument();
      expect(screen.getByText(mockAccommodation.rating)).toBeInTheDocument();
      expect(
        screen.getByText(mockAccommodation.description)
      ).toBeInTheDocument();
      expect(
        screen.getByText(mockAccommodation.equipments[0])
      ).toBeInTheDocument();
    });
  });
});
