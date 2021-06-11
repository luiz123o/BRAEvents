import * as S from './styles'
import Base from '../Base'
import { useCart } from 'contexts/useCart'
import Image from 'next/image'
import formatPrice from 'utils/format-price'
import { Container } from 'components/Container'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { DeleteOutline } from '@styled-icons/material-outlined'
import Link from 'next/link'

export interface Event {
  id: number
  name: string
  description: string
  theme: string
  local: string
  price: number
  image: string
  amount: number
}

export const Cart = () => {
  const { cart, removeEvent } = useCart()
  const cartFormatted = cart.map((event) => ({
    ...event,
    priceFormatted: formatPrice(event.price),
    priceTotal: formatPrice(event.amount * event.price)
  }))

  const total = formatPrice(
    cart.reduce((sumTotal, event) => {
      sumTotal += event.price * event.amount

      return sumTotal
    }, 0)
  )
  function handleRemoveEvent(eventId: number) {
    removeEvent(eventId)
  }
  return (
    <>
      <Base>
        <Container>
          <S.Wrapper>
            {cartFormatted.map((event) => (
              <S.EventContent key={event.id}>
                <S.ImageContent>
                  <Image
                    src={event.image}
                    alt={event.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </S.ImageContent>
                <S.CardContent>
                  <S.CardInfo>
                    <Heading color="purple.800" size="huge" lineBottom>
                      {event.name}
                    </Heading>
                    <span>{event.theme}</span>
                    <Heading color="purple.800" size="medium">
                      {event.description}
                    </Heading>

                    <S.CardInfoLocal>
                      <p>
                        <strong>Local: </strong>
                        {event.local}
                      </p>
                    </S.CardInfoLocal>
                  </S.CardInfo>

                  <S.Footer>
                    <div className="price">{event.priceFormatted}</div>
                  </S.Footer>
                  <Button
                    icon={<DeleteOutline className="remove" size={20} />}
                    minimal
                    size="large"
                    data-testid="remove-product"
                    onClick={() => handleRemoveEvent(event.id)}
                  >
                    Remover
                  </Button>
                </S.CardContent>
              </S.EventContent>
            ))}
          </S.Wrapper>
          <Link href="/sign-in">
            <S.ButtonContainer>
              <Button>Finalizar</Button>
            </S.ButtonContainer>
          </Link>
        </Container>
      </Base>
    </>
  )
}
