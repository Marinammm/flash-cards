import React, { createContext, useState } from 'react'
import { Deck } from '../types'
import StorageMethods from '../StorageData'

type DeckContextType = {
  selectedDeck: Deck
  setSelectedDeck: (deck: Deck) => void
  saveReview: (id: string | number, grade: number, reviews: number) => void
  deleteDeck: (id: string | number) => void
  decks: Array<Deck>
  setDecks: (decks: Array<Deck>) => void
}

type DeckProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const DeckContext = createContext<DeckContextType>({} as DeckContextType)

const deckContext = (): DeckContextType => {
  const [decks, setDecks] = useState<Array<Deck> | []>([])
  const [selectedDeck, setSelectedDeck] = useState<Deck>({
    name: '',
    id: '',
    cards: [],
    grade: 0,
    reviews: 0
  })

  const saveReview = async (id: string | number, grade: number, reviews: number) => {
    const userDecks = [...decks]
    const index = userDecks.findIndex((deck) => deck.id === id)
    userDecks[index].reviews = reviews
    userDecks[index].grade = grade

    setDecks(userDecks)
    await StorageMethods.edit(userDecks)
  }

  const deleteDeck = async (id: string | number) => {
    const userDecks = [...decks]
    const index = userDecks.findIndex((deck) => deck.id === id)
    userDecks.splice(index, 1)

    setDecks(userDecks)
    await StorageMethods.delete(id)
  }

  return { selectedDeck, setSelectedDeck, saveReview, deleteDeck, decks, setDecks }
}

const DeckProvider = ({ children }: DeckProviderProps) => {
  const { selectedDeck, setSelectedDeck, saveReview, deleteDeck, decks, setDecks } = deckContext()
  return (
    <DeckContext.Provider value={{ selectedDeck, setSelectedDeck, saveReview, deleteDeck, decks, setDecks }}>
      {children}
    </DeckContext.Provider>
  )
}

export default DeckProvider
