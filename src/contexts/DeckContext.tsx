import React, { createContext, useState } from 'react'
import { Deck } from '../types'

type DeckContextType = {
  selectedDeck: Deck
  setSelectedDeck: (deck: Deck) => void
}

type DeckProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const DeckContext = createContext<DeckContextType>({} as DeckContextType)

const deckContext = (): DeckContextType => {
  const [selectedDeck, setSelectedDeck] = useState<Deck>({
    name: '',
    id: '',
    cards: [],
    grade: 0,
    reviews: 0
  })

  return { selectedDeck, setSelectedDeck }
}

const DeckProvider = ({ children }: DeckProviderProps) => {
  const { selectedDeck, setSelectedDeck } = deckContext()
  return (
    <DeckContext.Provider value={{ selectedDeck, setSelectedDeck }}>
      {children}
    </DeckContext.Provider>
  )
}

export default DeckProvider
