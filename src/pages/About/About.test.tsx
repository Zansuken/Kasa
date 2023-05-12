import { screen } from '@testing-library/react';
import { CustomRouter } from 'App';
import About from './About';
import { appCtx } from 'contexts/app';
import { render } from 'utils/tests';

const { getByRole, getAllByTestId } = screen;

describe('Render About correctly.', () => {
  beforeEach(() => {
    render(
      <CustomRouter>
        <About />
      </CustomRouter>,
      {
        value: {
          about: {
            content: {
              sections: [
                { label: 'label1', content: 'content1' },
                { label: 'label2', content: 'content2' },
                { label: 'label3', content: 'content3' },
                { label: 'label4', content: 'content4' },
              ],
            },
            fetchData: jest.fn(),
          },
        },
        context: appCtx,
      }
    );
  });

  it('Render the cover', () => {
    const cover = getByRole('img');

    expect(cover).toBeInTheDocument();
    expect(cover).toHaveAttribute('alt', 'Paysage montagneux');
  });

  it('Render the cards list.', () => {
    const list = getAllByTestId('deploying-card-content');

    expect(list).toHaveLength(4);
  });
});
