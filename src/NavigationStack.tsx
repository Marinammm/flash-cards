import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/home'
import CreateDeck from './views/createDeck'
import DeckPage from './views/deckPage'
import ReviewDeck from './views/reviewDeck'

const Stack = createNativeStackNavigator()

type PagesType = {
  HOME: 'Home'
  CREATE_DECK: 'Create a new deck'
  DECK_PAGE: 'Deck info'
  REVIEW_DECK: 'Review your deck'
}

export const PAGES: PagesType = {
  HOME: 'Home',
  CREATE_DECK: 'Create a new deck',
  DECK_PAGE: 'Deck info',
  REVIEW_DECK: 'Review your deck',
}

const NavigationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={PAGES.HOME} component={Home} />
    <Stack.Screen name={PAGES.CREATE_DECK} component={CreateDeck} />
    <Stack.Screen name={PAGES.DECK_PAGE} component={DeckPage} />
    <Stack.Screen name={PAGES.REVIEW_DECK} component={ReviewDeck} />
  </Stack.Navigator>
);

export default NavigationStack;
