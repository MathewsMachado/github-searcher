import { theme } from 'styles/theme';
import { render, s } from 'utils/tests';

import { Footer } from '.';

it('should render the passed text and usernames', () => {
  render(
    <Footer
      text='Searcher, Inc'
      usernames={{ github: 'mathews', linkedin: 'machado' }}
    />
  );
  const links = s.getAllByRole('link');

  expect(s.getByText(/inc/i)).toBeInTheDocument();
  expect(links[0]).toHaveAttribute('href', expect.stringContaining('github'));
  expect(links[1]).toHaveAttribute('href', expect.stringContaining('linkedin'));
});

it('should render a black spaced-between footer', () => {
  render(<Footer text='Searcher, Inc' usernames={{ github: 'mathews' }} />);
  const footer = s.getByRole('contentinfo');

  expect(footer).toHaveStyle({ backgroundColor: theme.color.primary });
  expect(footer).toHaveStyle({ justifyContent: 'space-between' });
});

it('should decrease the padding on small screens', () => {
  render(<Footer text='Searcher, Inc' usernames={{ github: 'mathews' }} />);
  const footer = s.getByRole('contentinfo');

  expect(footer).toHaveStyleRule('padding', `0 ${theme.spacing.xxlarge}`);
  expect(footer).toHaveStyleRule('padding', '0 1rem', {
    media: theme.media.breakpoints('below', 'small'),
  });
});
