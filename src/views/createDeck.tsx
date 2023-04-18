import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import uuid from 'react-native-uuid'
import StorageMethods from '../StorageData'
import { Deck } from '../types'
import { Button } from '../components'

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
      <View style={styles.title}>
        <TextInput
          placeholder="Name your deck:"
          onChangeText={setDeckName}
          value={deckName}
          style={styles.titleInput}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.card}>
          <TextInput
            placeholder="Prompt:"
            multiline
            numberOfLines={5}
            onChangeText={setNewPrompt}
            value={newPrompt}
            style={styles.cardInput}
          />
          <View style={styles.divide} />
          <TextInput
            placeholder="Answer:"
            multiline
            numberOfLines={5}
            onChangeText={setNewAnswer}
            value={newAnswer}
            style={styles.cardInput}
          />
        </View>
        <Button onClick={addCard}>Save Card</Button>
      </View>
      <Button onClick={saveDeck} size="lg">Finish Deck</Button>
    </View>
  )
}

export default CreateDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    paddingRight: 50,
    paddingLeft: 20,
    elevation: 3,
  },
  titleInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 40,
  },
  boxShadow: {

  },
  card: {
    backgroundColor: '#ffe205',
    height: 250,
    width: 300,
    marginVertical: 30,
    display: 'flex',
    justifyContent: 'space-around',
    elevation: 1,
  },
  cardInput: {
    borderBottomWidth: 1,
    height: 40,
    marginHorizontal: 30,
  },
  divide: {
    borderStyle: 'dashed',
    borderTopWidth: 1,
  }
});
