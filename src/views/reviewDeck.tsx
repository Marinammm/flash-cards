import React, { useState, useEffect, useContext } from 'react'
import { DeckContext } from '../contexts/DeckContext'
import { Card, RootStackParamList } from '../types'
import { Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button } from '../components'
import { PAGES } from '../NavigationStack'

type ReviewDeckScreenProp = StackNavigationProp<RootStackParamList, typeof PAGES.REVIEW_DECK>

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
      navigation.navigate(PAGES.DECK_PAGE)
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
      <View style={styles.card}>
        <Text>{currentCard?.prompt}</Text>
      </View>
      <View style={styles.promptButton}>
        <Button onClick={() => setShowAnswer(true)}>
          Show Answer
        </Button>
      </View>
    </View>
  )

  const answer = (
    <View>
      <View style={styles.card}>
        <Text>{currentCard?.answer}</Text>
      </View>
      <View style={styles.answerButtons}>
        <Button onClick={() => onChangeCard(true)}>
          Right
        </Button>
        <Button onClick={() => onChangeCard(false)}>
          Wrong
        </Button>
      </View>
    </View>
  )
  const screen = !showAnswer ? prompt : answer

  return (
    <View style={styles.container}>
      {loading ? (<Text>Loading</Text>) : screen}
    </View>
  )
}

export default ReviewDeck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  card: {
    backgroundColor: '#ffe205',
    height: 250,
    width: 300,
    marginVertical: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  promptButton: {
    alignItems: 'center'
  },
  answerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
