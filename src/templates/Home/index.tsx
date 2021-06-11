import Button from 'components/Button'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'
import { api } from 'services/api'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import { Search } from '@styled-icons/material-outlined'
import formatPrice from 'utils/format-price'
import { useCart } from 'contexts/useCart'
import Heading from 'components/Heading'
import Link from 'next/link'
import themes from '../../../themes.json'

import TextField from 'components/TextField'
import CheckBox from 'components/CheckBox'

interface Event {
  id: number
  name: string
  description: string
  theme: number
  local: string
  price: number
  image: string
}
interface EventFormatted extends Event {
  priceFormatted: string
}

export const Home = () => {
  const [event, setEvent] = useState<EventFormatted[]>([])
  const [searchName, setSearchName] = useState('')
  const [checkTheme, setCheckTheme] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const { addEvent } = useCart()
  const themeEvent = themes.data

  useEffect(() => {
    async function searchEvents() {
      const status =
        isChecked === true
          ? `${isChecked && `/?theme=${checkTheme}`}`
          : `${searchName && `?name=${searchName}`}`
      if (status) {
        const { data } = await api.get<Event[]>(`events${status}`)
        const formattedEvents = data.map<EventFormatted>((event) => ({
          ...event,
          priceFormatted: formatPrice(event.price)
        }))

        setEvent(formattedEvents)
      } else {
        const { data } = await api.get<Event[]>('/events')
        const formattedEvents = data.map<EventFormatted>((event) => ({
          ...event,
          priceFormatted: formatPrice(event.price)
        }))
        setEvent(formattedEvents)
      }
    }
    searchEvents()
  }, [searchName, checkTheme, isChecked])
  //function handleAddProduct(id: number) {
  //  addEvent(id)
  // }

  return (
    <Base>
      <Container>
        <Container>
          <S.SearchContent>
            <div>
              <TextField
                icon={<Search />}
                iconPosition="right"
                type="search"
                value={searchName}
                placeholder="Pesquise o evento pelo nome"
                onInputChange={(name) => {
                  setSearchName(name)
                }}
              />
            </div>
            <S.CheckTheme>
              {themeEvent.map((value, index) => {
                return (
                  <li key={index}>
                    <CheckBox
                      value={value}
                      label={value}
                      onCheck={() =>
                        setCheckTheme(value) & setIsChecked(!isChecked)
                      }
                      isChecked={isChecked}
                    />
                  </li>
                )
              })}
            </S.CheckTheme>
          </S.SearchContent>
        </Container>
        <S.Wrapper>
          {event.map((e) => {
            return (
              <li key={e.id}>
                <S.CardImage>
                  <Image
                    src={e.image}
                    alt={e.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </S.CardImage>

                <Heading size="medium">{e.name}</Heading>
                <S.MainCard>
                  <p className="description">{e.description}</p>
                  <p className="local">Local: {e.local}</p>
                </S.MainCard>

                <S.FooterCard>
                  <Link href="/cart">
                    <Button
                      onClick={() => addEvent(e.id)}
                      minimal={true}
                      size="small"
                      icon={<AddShoppingCart />}
                    >
                      Reserve já
                    </Button>
                  </Link>
                </S.FooterCard>
              </li>
            )
          })}
        </S.Wrapper>
      </Container>
    </Base>
  )
}
