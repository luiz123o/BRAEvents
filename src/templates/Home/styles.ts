import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
    z-index: -999;

    li {
      display: flex;
      flex-direction: column;
      background: ${theme.colors.white};
      border-radius: ${theme.border.radius};
      padding: ${theme.spacings.medium};
      width: 300px;
      img {
        align-self: center;
        max-width: 100%;
      }
      > strong {
        font-size: 16px;
        line-height: 20px;
        color: ${theme.colors['purple.600']};
        margin-top: 5px;
      }
      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }
    }
  `}
`
export const CardImage = styled.a`
  min-height: 14rem;
  position: relative;
  padding-bottom: 1rem;
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
export const MainCard = styled.div`
  ${({ theme }) => css`
    text-align: justify;
    .description {
      font-size: ${theme.font.sizes.small};
    }
    .local {
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors['purple.500']};
      color: ${theme.colors.white};
      padding: ${theme.spacings.xxsmall};
      border: 0;
      border-radius: 0 2rem 2rem 0;
    }
  `}
`
export const FooterCard = styled.div`
  ${({ theme }) => css`
    div {
      p {
        padding-top: ${theme.spacings.xxsmall};
        text-align: right;
        font-size: 1rem;
      }
    }
  `}
`
export const SearchContent = styled.div`
  ${({ theme }) => css`
    margin-top: 5rem;
    justify-content: space-between;
    display: flex;
    > div {
      width: 30rem;
    }
  `}
`
export const CheckTheme = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 2rem;
  }
`
