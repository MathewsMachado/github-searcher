import styled, { css } from 'styled-components';

import { Wrapper as PrimaryHeading } from 'components/PrimaryHeading';

export type ComponentsProps = {
  size?: 'small' | 'medium' | 'large';
};

export const Wrapper = styled.div<ComponentsProps>`
  ${({ size }) => css`
    display: flex;
    align-items: center;

    ${PrimaryHeading} {
      font-size: 2.7rem;
      margin-left: 0.4rem;
    }

    ${size !== 'small' && modifiers[size!]()}
  `};
`;

export const Github = styled.svg`
  max-width: 7.5rem;
`;

const modifiers = {
  medium: () => css`
    align-items: baseline;

    ${PrimaryHeading} {
      font-size: 5rem;
    }

    ${Github} {
      max-width: 15rem;
    }
  `,
  large: () => css`
    display: block;

    ${PrimaryHeading} {
      font-size: 7rem;
      line-height: 7rem;
    }

    ${Github} {
      max-width: 22.5rem;
    }
  `,
};
