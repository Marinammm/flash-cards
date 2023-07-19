import { PAGES } from './NavigationStack'

export type RootStackParamList = {
  [PAGES.HOME]: undefined
  [PAGES.CREATE_DECK]: undefined
  [PAGES.DECK_PAGE]: undefined
  [PAGES.REVIEW_DECK]: undefined
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
