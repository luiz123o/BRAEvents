import Button, { ButtonProps } from 'components/Button'

import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({ hasText, size = 'small' }: WishlistButtonProps) => {
  const ButtonText = 'Add to Wishlist'

  XMLSerializer

  return (
    <Button minimal size={size} style={{ filter: 'none' }}>
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
