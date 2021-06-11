import { createContext, ReactNode, useContext, useState } from 'react'

import { api } from '../services/api'
import { Event, Stock } from '../types/types'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Event[]
  addEvent: (EventId: number) => Promise<void>
  removeEvent: (EventId: number) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Event[]>(() => {
    const storagedCart =
      typeof Storage !== 'undefined' && localStorage.getItem(`@MBLabs:cart`)

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })
  const addEvent = async (eventId: number) => {
    try {
      const { data: eventStock } = await api.get<Stock>(`/stock/${eventId}`)

      if (eventStock.amount <= 1) {
        throw new Error('Quantidade solicitada fora de estoque')
      }

      let existingEvent = cart.find((event) => event.id === eventId)
      let newCart: Event[] = []

      if (!existingEvent) {
        const { data } = await api.get<Omit<Event, 'amount'>>(
          `/events/${eventId}`
        )

        existingEvent = {
          ...data,
          amount: 1
        }

        newCart = [...cart, existingEvent]
        setCart(newCart)
      } else {
        newCart = cart.map((event) =>
          event.id !== eventId
            ? event
            : {
                ...event,
                amount: event.amount - 1
              }
        )

        setCart(newCart)
      }

      localStorage.setItem(`@MBLabs:cart`, JSON.stringify(newCart))
    } catch (err) {
      throw new Error('Não está mais disponivel')
    }
  }
  const removeEvent = async (eventId: number) => {
    try {
      const event = cart.find((event) => event.id === eventId)

      if (!event) {
        throw new Error('Produto não existe')
      }

      const newCart = cart.filter((event) => event.id !== eventId)

      localStorage.setItem(`@MBLabs:cart`, JSON.stringify(newCart))

      setCart(newCart)
    } catch {
      throw new Error('Erro na remoção do evento')
    }
  }
  return (
    <CartContext.Provider value={{ cart, addEvent, removeEvent }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
