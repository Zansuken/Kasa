import { render, screen } from '@testing-library/react';
import { CustomRouter } from 'App';
import About from './About';
import aboutData from 'data/about.json';

describe('Render About correctly.', () => {
  const renderAbout = () =>
    render(
      <CustomRouter>
        <About />
      </CustomRouter>
    );

  it('Render the cover', () => {
    renderAbout();

    const cover = screen.getByRole('img');

    expect(cover).toBeInTheDocument();
    expect(cover).toHaveAttribute('alt', 'Paysage montagneux');
  });

  it('Render the cards list.', () => {
    renderAbout();

    const list = screen.getAllByTestId('deploying-card-content');

    expect(aboutData.length).toBe(list.length);

    aboutData.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
