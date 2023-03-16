import { useState } from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'
import uuid from 'react-native-uuid'
import StorageMethods from '../StorageData'
import { Deck } from '../types'

type Card = {
  prompt: string
  answer: string
}

const CreateDeck = () => {
  const [deckName, setDeckName] = useState('');
  const [newPrompt, setNewPrompt] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [deckCards, setDeckCards] = useState<Array<Card>>([]);

  const addCard = () => {
    const newDeck = [ ...deckCards, { prompt: newPrompt, answer: newAnswer }];
    setDeckCards(newDeck);
    setNewPrompt('');
    setNewAnswer('');
  }

  const saveDeck = async () => {
    const newDeck: Deck = {
      name: deckName,
      id: uuid.v4().toString(),
      cards: deckCards,
      grade: 0,
      reviews: 0
    }
    await StorageMethods.write(newDeck)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name your deck:"
        onChangeText={setDeckName}
        value={deckName}
      />
      <TextInput
        placeholder="Prompt:"
        multiline
        numberOfLines={5}
        onChangeText={setNewPrompt}
        value={newPrompt}
      />
      <TextInput
        placeholder="Answer:"
        multiline
        numberOfLines={5}
        onChangeText={setNewAnswer}
        value={newAnswer}
      />
      <Button title="Save Card" onPress={addCard} />
      <Button title="Finish Deck" onPress={saveDeck}/>
    </View>
  )
}

export default CreateDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
