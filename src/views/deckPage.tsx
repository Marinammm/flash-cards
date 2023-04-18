import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, FlatList, View, StyleSheet } from 'react-native'
import { DeckContext } from '../contexts/DeckContext'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../types'
import { StyledText, Button, Card } from '../components'

type DeckPageScreenProp = StackNavigationProp<RootStackParamList, 'DeckPage'>

const DeckPage = () => {
  const { selectedDeck } = useContext(DeckContext)
  const navigation = useNavigation<DeckPageScreenProp>()

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <StyledText size={18}>{selectedDeck.name}</StyledText>
      </View>
      <View style={styles.info}>
        <StyledText>Grade: {selectedDeck.grade}</StyledText>
        <StyledText>Times reviewed: {selectedDeck.reviews}</StyledText>
      </View>
      <View style={styles.buttons}>
        <Button onClick={() => navigation.navigate('ReviewDeck')}>
          Review
        </Button>
        <Button onClick={() => {}}>Edit</Button>
      </View>
      <StyledText size={16}>Cards</StyledText>
      <FlatList
        data={selectedDeck.cards}
        renderItem={({ item }) => <Card prompt={item.prompt} answer={item.answer} />}
        numColumns={5}
        style={{ marginTop: 15 }}
      />
    </View>
  )
}

export default DeckPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 8,
  },
  title: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  card: {
    backgroundColor: '#ffe205',
    height: 50,
    width: 50,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  }
})
