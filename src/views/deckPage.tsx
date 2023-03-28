import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import { DeckContext } from '../contexts/DeckContext'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../types'

type DeckPageScreenProp = StackNavigationProp<RootStackParamList, 'DeckPage'>

const DeckPage = () => {
  const { selectedDeck } = useContext(DeckContext)
  const navigation = useNavigation<DeckPageScreenProp>()
  return (
    <View>
      <Text>{selectedDeck.name}</Text>
      <Text>Grade: {selectedDeck.grade}</Text>
      <Text>Times reviewed: {selectedDeck.reviews}</Text>
      <Pressable onPress={() => navigation.navigate('ReviewDeck')}>
        <Text>Review</Text>
      </Pressable>
    </View>
  )
}

export default DeckPage
