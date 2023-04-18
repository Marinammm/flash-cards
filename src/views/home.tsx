import React, { useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import { RootStackParamList, Deck } from '../types'
import { StyledText, Button } from '../components'
import StorageMethods from '../StorageData'
import { DeckContext } from '../contexts/DeckContext'

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>()

  const { setSelectedDeck, decks, setDecks } = useContext(DeckContext)

  useEffect(() => {
    const getDecks = async () => {
      const data = await StorageMethods.read()
      setDecks(data.decks)
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
      <Pressable onPress={() => onPressDeck(deck)} style={styles.item}>
        <StyledText>
          {deck.name}
        </StyledText>
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
        style={{ width: '100%' }}
      />
      <Button onClick={() => navigation.navigate('CreateDeck')}>
        New deck
      </Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5
  },
  item: {
    height: 50,
    width: '100%',
    backgroundColor: '#769cd0',
    marginBottom: 10,
    borderRadius: 5,
    padding: 5
  }
});
