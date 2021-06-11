import Button from 'components/Button'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.ul`
  ${({ theme }) => css``}
`
export const EventContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
    &::after {
      content: '';
      position: relative;
      border: 0.1rem solid ${theme.colors['purple.100']};
      max-width: 350rem;
      width: 100%;
    }
  `}
`
export const ImageContent = styled.div`
  min-height: 25rem;
  position: relative;
  width: 100%;

  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`
export const CardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price {
      text-align: right;
      padding-top: ${theme.spacings.large};
      padding-right: 20rem;
      color: ${theme.colors['purple.600']};
      font-size: 4rem;
      opacity: 1;
    }
  `}
`
export const Footer = styled.div`
  display: flex;
  margin-top: 5rem;
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    .remove {
      display: inline-block;

      svg {
        width: 10rem;
      }
    }
    p {
      display: inline-block;

      text-align: left;
      position: absolute;
      strong {
        display: inherit;
        position: relative;
      }
    }

    > span {
      position: relative;
      display: inline-block;
      font-size: ${theme.font.sizes.xsmall};
      background: ${theme.colors.white};
      color: ${theme.colors['purple.500']};
      padding: ${theme.spacings.xxsmall} 2rem;
      border: 0.1rem solid ${theme.colors['purple.500']};
      border-radius: 1.5rem;
      margin-top: -${theme.spacings.xsmall};
      margin-bottom: ${theme.spacings.xsmall};
      &::before {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: ${theme.colors['purple.500']};
        border: 0;
        border-radius: 50%;
        left: 6%;
        top: 34%;
        bottom: 20%;
      }
    }
  `}
`
export const CardInfoLocal = styled.div`
  ${({ theme }) => css`
    p {
      background: ${theme.colors['purple.600']};
      border: 0;
      border-radius: 0rem 4rem 4rem 0rem;
      padding: ${theme.spacings.xsmall} ${theme.spacings.xxlarge}
        ${theme.spacings.xsmall} 0.1rem;
      color: ${theme.colors.white};
      text-align: left;
      position: absolute;
      margin-top: 1rem;
      strong {
        display: inherit;
        position: relative;
      }
    }
  `}
`
