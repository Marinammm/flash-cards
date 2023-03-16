export type RootStackParamList = {
  Home: undefined
  CreateDeck: undefined
}

type Card = {
  prompt: string
  answer: string
}

export type Deck = {
  name: string
  id: string
  cards: Array<Card>
  grade: number
  reviews: number
}
