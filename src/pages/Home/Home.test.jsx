import { render } from 'utils/tests';
import Home from './Home';
import { accommodationsCtx } from 'contexts/accommodations';
import { CustomRouter } from 'App';
import { screen, waitFor } from '@testing-library/react';

describe('Home component', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockFetchData = jest.fn();
  const mockAccommodations = [];

  it('should call fetchData if accommodations is empty', () => {
    render(
      <CustomRouter>
        <Home />
      </CustomRouter>,
      {
        value: {
          accommodations: mockAccommodations,
          fetchData: mockFetchData,
        },
        context: accommodationsCtx,
      }
    );

    expect(mockFetchData).toHaveBeenCalledTimes(1);
  });

  it('should render Title component', () => {
    render(
      <CustomRouter>
        <Home />
      </CustomRouter>,
      {
        value: {
          accommodations: mockAccommodations,
          fetchData: mockFetchData,
        },
        context: accommodationsCtx,
      }
    );

    expect(
      screen.getByText('Chez vous, partout et ailleurs')
    ).toBeInTheDocument();
  });

  it('should render the loading state if fetching', () => {
    render(
      <CustomRouter>
        <Home />
      </CustomRouter>,
      {
        value: {
          accommodations: mockAccommodations,
          fetchData: mockFetchData,
          loading: true,
        },
        context: accommodationsCtx,
      }
    );

    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });

  it('should render Content component', () => {
    render(
      <CustomRouter>
        <Home />
      </CustomRouter>,
      {
        value: {
          accommodations: [
            {
              id: '1',
              title: 'Mock Accommodation 1',
            },
            {
              id: '2',
              title: 'Mock Accommodation 2',
            },
            {
              id: '3',
              title: 'Mock Accommodation 3',
            },
          ],
          fetchData: mockFetchData,
        },
        context: accommodationsCtx,
      }
    );

    const accommodationsCards = screen.getAllByTestId(
      'test-accommodation-card'
    );

    expect(accommodationsCards).toHaveLength(3);
    expect(screen.getByText('Mock Accommodation 1')).toBeInTheDocument();
    expect(screen.getByText('Mock Accommodation 2')).toBeInTheDocument();
    expect(screen.getByText('Mock Accommodation 3')).toBeInTheDocument();
  });

  it('should render the no accommodations found if accommodations.length === 0', async () => {
    render(
      <CustomRouter>
        <Home />
      </CustomRouter>,
      {
        value: {
          accommodations: [],
          fetchData: mockFetchData,
          loading: false,
        },
        context: accommodationsCtx,
      }
    );

    await waitFor(() => {
      expect(
        screen.getByText("Il n'y a aucun logement à afficher.")
      ).toBeInTheDocument();
    });
  });
});
