import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, Text, Button, StyleSheet, FlatList, Pressable } from 'react-native'
import { RootStackParamList, Deck } from '../types'
import StorageMethods from '../StorageData'
import { DeckContext } from '../contexts/DeckContext'

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

const Home = () => {
  const [decks, setDecks] = useState<Array<Deck>>()
  const navigation = useNavigation<HomeScreenProp>()

  const { setSelectedDeck } = useContext(DeckContext)

  useEffect(() => {
    const getDecks = async () => {
      const data = await StorageMethods.read()
      setDecks(data.decks)
    }

    getDecks()
  }, [])

  const onPressDeck = (deck: Deck) => {
    setSelectedDeck(deck)

    navigation.navigate('DeckPage')
  }

  const deck = (deck: Deck) => (
    <View>
      <Pressable onPress={() => onPressDeck(deck)}>
        <Text>
          {deck.name}
        </Text>
      </Pressable>
    </View>
  )

  const emptyDeckList = (
    <View style={styles.container}>
      <Text>You don't have any decks yet</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => deck(item)}
        keyExtractor={item => item.id}
        ListEmptyComponent={emptyDeckList}
      />
      <Button title='New deck' onPress={() => navigation.navigate('CreateDeck')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
