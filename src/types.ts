export type RootStackParamList = {
  Home: undefined
  CreateDeck: undefined
  DeckPage: undefined
  ReviewDeck: undefined
}

export type Card = {
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

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined

export type FontStyle = 'normal' | 'italic' | undefined
