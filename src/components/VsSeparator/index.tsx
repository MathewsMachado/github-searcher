/* eslint-disable */
import styled, { css } from 'styled-components';

import { theme } from 'styles/theme';

type VsSeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
};

const VsSeparatorWrapper = styled.svg`
  ${({ theme }) => css`
    fill: ${theme.color.accent};
  `};
`;

function VsSeparator({ orientation = 'vertical' }: VsSeparatorProps) {
  return (
    <VsSeparatorWrapper
      id={orientation}
      viewBox={orientation === 'vertical' ? '0 0 153 581' : '0 0 534 47'}
      xmlns='http://www.w3.org/2000/svg'
    >
      {orientation === 'vertical' && (
        <>
          <title>&quot;vs&quot; word with a line above and below</title>
          <path d='M24.8225 247.8L41.5025 306L57.9425 247.8H82.5425L53.1425 333H29.8625L0.1025 247.8H24.8225ZM137.795 275.64C137.795 275.64 137.115 275.24 135.755 274.44C134.395 273.64 132.595 272.76 130.355 271.8C128.115 270.76 125.675 269.84 123.035 269.04C120.395 268.24 117.795 267.84 115.235 267.84C113.235 267.84 111.595 268.16 110.315 268.8C109.035 269.44 108.395 270.52 108.395 272.04C108.395 274.28 109.795 275.88 112.595 276.84C115.475 277.72 119.355 278.96 124.235 280.56C129.515 282.16 134.075 284 137.915 286.08C141.755 288.16 144.715 290.84 146.795 294.12C148.875 297.32 149.915 301.6 149.915 306.96C149.915 312.08 148.995 316.4 147.155 319.92C145.315 323.36 142.835 326.12 139.715 328.2C136.595 330.28 133.115 331.8 129.275 332.76C125.435 333.64 121.515 334.08 117.515 334.08C113.435 334.08 109.155 333.68 104.675 332.88C100.275 332 95.995 330.84 91.835 329.4C87.675 327.88 83.875 326.12 80.435 324.12L90.515 303.6C90.515 303.6 91.315 304.08 92.915 305.04C94.515 306 96.635 307.08 99.275 308.28C101.915 309.48 104.835 310.56 108.035 311.52C111.315 312.48 114.595 312.96 117.875 312.96C120.435 312.96 122.195 312.64 123.155 312C124.195 311.28 124.715 310.36 124.715 309.24C124.715 307.56 123.835 306.28 122.075 305.4C120.315 304.44 117.995 303.56 115.115 302.76C112.315 301.88 109.195 300.88 105.755 299.76C98.235 297.2 92.755 294.16 89.315 290.64C85.875 287.04 84.155 282.12 84.155 275.88C84.155 269.56 85.635 264.28 88.595 260.04C91.555 255.8 95.435 252.6 100.235 250.44C105.115 248.2 110.355 247.08 115.955 247.08C120.115 247.08 124.115 247.6 127.955 248.64C131.875 249.6 135.515 250.8 138.875 252.24C142.315 253.68 145.315 255.04 147.875 256.32L137.795 275.64Z' />
          <line
            x1='80'
            y1='-1.31134e-07'
            x2='80'
            y2='220'
            strokeWidth='6'
            stroke={theme.color.accent}
          />
          <line
            x1='80'
            y1='357'
            x2='80'
            y2='581'
            strokeWidth='6'
            stroke={theme.color.accent}
          />
        </>
      )}
      {orientation === 'horizontal' && (
        <>
          <title>&quot;vs&quot; word with a line on each side</title>
          <path d='M249.108 9.6L254.668 29L260.148 9.6H268.348L258.548 38H250.788L240.867 9.6H249.108ZM286.765 18.88C286.765 18.88 286.538 18.7467 286.085 18.48C285.632 18.2133 285.032 17.92 284.285 17.6C283.538 17.2533 282.725 16.9467 281.845 16.68C280.965 16.4133 280.098 16.28 279.245 16.28C278.578 16.28 278.032 16.3867 277.605 16.6C277.178 16.8133 276.965 17.1733 276.965 17.68C276.965 18.4267 277.432 18.96 278.365 19.28C279.325 19.5733 280.618 19.9867 282.245 20.52C284.005 21.0533 285.525 21.6667 286.805 22.36C288.085 23.0533 289.072 23.9467 289.765 25.04C290.458 26.1067 290.805 27.5333 290.805 29.32C290.805 31.0267 290.498 32.4667 289.885 33.64C289.272 34.7867 288.445 35.7067 287.405 36.4C286.365 37.0933 285.205 37.6 283.925 37.92C282.645 38.2133 281.338 38.36 280.005 38.36C278.645 38.36 277.218 38.2267 275.725 37.96C274.258 37.6667 272.832 37.28 271.445 36.8C270.058 36.2933 268.792 35.7067 267.645 35.04L271.005 28.2C271.005 28.2 271.272 28.36 271.805 28.68C272.338 29 273.045 29.36 273.925 29.76C274.805 30.16 275.778 30.52 276.845 30.84C277.938 31.16 279.032 31.32 280.125 31.32C280.978 31.32 281.565 31.2133 281.885 31C282.232 30.76 282.405 30.4533 282.405 30.08C282.405 29.52 282.112 29.0933 281.525 28.8C280.938 28.48 280.165 28.1867 279.205 27.92C278.272 27.6267 277.232 27.2933 276.085 26.92C273.578 26.0667 271.752 25.0533 270.605 23.88C269.458 22.68 268.885 21.04 268.885 18.96C268.885 16.8533 269.378 15.0933 270.365 13.68C271.352 12.2667 272.645 11.2 274.245 10.48C275.872 9.73333 277.618 9.36 279.485 9.36C280.872 9.36 282.205 9.53333 283.485 9.88C284.792 10.2 286.005 10.6 287.125 11.08C288.272 11.56 289.272 12.0133 290.125 12.44L286.765 18.88Z' />
          <line
            y1='23'
            x2='216'
            y2='23'
            strokeWidth='2'
            stroke={theme.color.accent}
          />
          <line
            x1='318'
            y1='23'
            x2='534'
            y2='23'
            strokeWidth='2'
            stroke={theme.color.accent}
          />
        </>
      )}
    </VsSeparatorWrapper>
  );
}

export { VsSeparator, VsSeparatorWrapper };
