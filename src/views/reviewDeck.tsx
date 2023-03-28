import React, { useState, useEffect, useContext } from 'react'
import { DeckContext } from '../contexts/DeckContext'
import { Card, RootStackParamList } from '../types'
import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type ReviewDeckScreenProp = StackNavigationProp<RootStackParamList, 'ReviewDeck'>

const ReviewDeck = () => {
  const { selectedDeck, saveReview } = useContext(DeckContext)
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState<Array<Card> | []>([])
  const [currentCard, setCurrentCard] = useState<Card>()
  const [showAnswer, setShowAnswer] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const navigation = useNavigation<ReviewDeckScreenProp>()

  useEffect(() => {
    setCards([...selectedDeck.cards])
    setLoading(false)
  }, [selectedDeck])

  useEffect(() => {
    if (!loading) getNewCard()
  }, [loading])

  const getNewCard = async () => {
    if (!cards.length) {
      await saveReview(selectedDeck.id, correctCount, selectedDeck.reviews + 1)
      navigation.navigate('DeckPage')
    }

    const index = Math.floor(Math.random() * (cards.length - 1))
    setCurrentCard(cards[index])
    cards.splice(index, 1)
  }

  const onChangeCard = (answeredCorrectly: boolean) => {
    setShowAnswer(false)
    if (answeredCorrectly) setCorrectCount((prev) => prev + 1)
    getNewCard()
  }

  const prompt = (
    <View>
      <Text>{currentCard?.prompt}</Text>
      <Pressable onPress={() => setShowAnswer(true)}>
        <Text>Show Answer</Text>
      </Pressable>
    </View>
  )

  const answer = (
    <View>
      <Text>{currentCard?.answer}</Text>
      <Pressable onPress={() => onChangeCard(true)}>
        <Text>Right</Text>
      </Pressable>
      <Pressable onPress={() => onChangeCard(false)}>
        <Text>Wrong</Text>
      </Pressable>
    </View>
  )
  const screen = !showAnswer ? prompt : answer

  return (
    <View>
      {loading ? (<Text>Loading</Text>) : screen}
    </View>
  )
}

export default ReviewDeck
