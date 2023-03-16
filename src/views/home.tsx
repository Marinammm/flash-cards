import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import { RootStackParamList, Deck } from '../types'
import StorageMethods from '../StorageData'

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

const Home = () => {
  const [decks, setDecks] = useState<Array<Deck>>()
  const navigation = useNavigation<HomeScreenProp>()

  useEffect(() => {
    const getDecks = async () => {
      const data = await StorageMethods.read()
      setDecks(data.decks)
    }

    getDecks()
  }, [])

  const deck = (name: string) => (
    <View>
      <Text>{name}</Text>
    </View>
  )

  const emptyDeckList = (
    <View style={styles.container}>
      <Button title='New deck' onPress={() => navigation.navigate('CreateDeck')} />
      <Text>You don't have any decks yet</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => deck(item.name)}
        keyExtractor={item => item.id}
        ListEmptyComponent={emptyDeckList}
      />
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
