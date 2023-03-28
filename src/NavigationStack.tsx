import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/home'
import CreateDeck from './views/createDeck'
import DeckPage from './views/deckPage'
import ReviewDeck from './views/reviewDeck'

const Stack = createNativeStackNavigator()

const NavigationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='CreateDeck' component={CreateDeck} />
    <Stack.Screen name='DeckPage' component={DeckPage} />
    <Stack.Screen name='ReviewDeck' component={ReviewDeck} />
  </Stack.Navigator>
);

export default NavigationStack;
