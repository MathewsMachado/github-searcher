import { theme } from 'styles/theme';
import { PrimaryHeading } from 'components/PrimaryHeading';

import * as S from './styles';

type LogoProps = S.Props & {
  githubColor?: 'primary' | 'secondary';
};

export function Logo({ size = 'small', githubColor = 'primary' }: LogoProps) {
  return (
    <S.LogoWrapper size={size}>
      <S.Github
        fill={theme.color[githubColor]}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 360.18 97.41'
      >
        <title>&quot;GitHub&quot; word</title>
        <path
          d='M69.37 41.69H39.11a1.41 1.41 0 00-1.42 1.42V57.9a1.42 1.42 0 001.42 1.42h11.8v18.39s-2.65.9-10 .9c-8.65 0-20.73-3.16-20.73-29.72s12.6-30.07 24.41-30.07c10.23 0 14.63 1.8 17.43 2.67a1.43 1.43 0 001.7-1.39l3.37-14.3a1.31 1.31 0 00-.54-1.1C65.41 3.88 58.47 0 40.93 0 20.73 0 0 8.6 0 49.92s23.73 47.49 43.73 47.49c16.55 0 26.6-7.08 26.6-7.08a1.23 1.23 0 00.46-1.07V43.11a1.42 1.42 0 00-1.42-1.42zM225.36 5A1.41 1.41 0 00224 3.53h-17A1.41 1.41 0 00205.5 5v32.89h-26.56V5a1.41 1.41 0 00-1.41-1.42h-17A1.41 1.41 0 00159.08 5v89.13a1.42 1.42 0 001.41 1.43h17a1.42 1.42 0 001.41-1.43V56h26.6v38.15a1.42 1.42 0 001.41 1.43H224a1.43 1.43 0 001.41-1.43zM101.53 16.65a11 11 0 10-11 11.11 11 11 0 0011-11.11zm-1.22 58.67V34.15a1.42 1.42 0 00-1.41-1.42h-17a1.63 1.63 0 00-1.47 1.59v59c0 1.74 1.08 2.25 2.48 2.25h15.3c1.68 0 2.09-.82 2.09-2.27zm189.81-42.45h-16.91a1.41 1.41 0 00-1.4 1.42V78a19.14 19.14 0 01-10.4 3.14c-6.1 0-7.72-2.76-7.72-8.74V34.29a1.41 1.41 0 00-1.4-1.42h-17.17a1.41 1.41 0 00-1.4 1.42v41c0 17.74 9.88 22.08 23.48 22.08 11.15 0 20.15-6.17 20.15-6.17a34.29 34.29 0 00.62 3.64 1.49 1.49 0 001.24.77h10.92a1.42 1.42 0 001.41-1.42v-59.9a1.43 1.43 0 00-1.42-1.42zm46.23-2.01a31.76 31.76 0 00-16.14 4.29V5a1.41 1.41 0 00-1.41-1.42h-17.09A1.41 1.41 0 00300.3 5v89.13a1.42 1.42 0 001.41 1.43h11.86a1.43 1.43 0 001.24-.76 28.4 28.4 0 00.72-4.11s7 6.62 20.22 6.62c15.53 0 24.43-7.88 24.43-35.37S346 30.86 336.35 30.86zm-6.67 50.25a20.31 20.31 0 01-9.85-2.84V50a22.54 22.54 0 018.74-2.84c6.09-.54 12 1.3 12 15.82-.04 15.35-2.69 18.38-10.89 18.13zM149.29 32.72h-12.78V15.84c0-.64-.33-1-1.07-1H118c-.68 0-1 .3-1 .95v17.49s-8.73 2.11-9.32 2.28a1.41 1.41 0 00-1 1.36v11a1.42 1.42 0 001.32 1.39h9v26.38c0 19.6 13.75 21.52 23 21.52a38.91 38.91 0 0010.15-1.67 1.32 1.32 0 00.8-1.28V82.2a1.43 1.43 0 00-1.41-1.42c-.75 0-2.65.3-4.61.3-6.28 0-8.41-2.92-8.41-6.7V49.31h12.78a1.42 1.42 0 001.41-1.43V34.15a1.42 1.42 0 00-1.42-1.43z'
          data-name='Layer 1'
        />
      </S.Github>
      <PrimaryHeading color='accent'>Searcher</PrimaryHeading>
    </S.LogoWrapper>
  );
}
