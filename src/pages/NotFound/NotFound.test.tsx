import { render, screen } from '@testing-library/react';
import { CustomRouter } from 'App';
import NotFound from './NotFound';
describe('Render NotFound correctly.', () => {
  const renderNotFound = () =>
    render(
      <CustomRouter>
        <NotFound />
      </CustomRouter>
    );

  it('Render the content.', () => {
    renderNotFound();

    const img = screen.getByTitle('404-logo');

    const title = screen.getByText(
      /Oups! La page que vous demandez n'existe pas./i
    );

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('Render the link.', () => {
    renderNotFound();

    const link = screen.getByRole('link', {
      name: /Retourner sur la page d'accueil/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
