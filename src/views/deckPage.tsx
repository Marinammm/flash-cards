import React, { useContext } from 'react'
import { Pressable, Text, View } from 'react-native'
import { DeckContext } from '../contexts/DeckContext'

const DeckPage = () => {
  const { selectedDeck } = useContext(DeckContext)
  return (
    <View>
      <Text>{selectedDeck.name}</Text>
      <Text>Grade: {selectedDeck.grade}</Text>
      <Text>Times reviewed: {selectedDeck.reviews}</Text>
      <Pressable>
        <Text>Review</Text>
      </Pressable>
    </View>
  )
}

export default DeckPage
