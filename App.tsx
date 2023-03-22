import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/NavigationStack';
import DeckProvider from './src/contexts/DeckContext'

export default function App() {
  return (
    <NavigationContainer>
      <DeckProvider>
        <NavigationStack />
      </DeckProvider>
    </NavigationContainer>
  );
}
