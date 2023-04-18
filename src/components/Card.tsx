import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { StyledText } from './index'
import { Card as CardType } from '../types'

const Card = (card: CardType) => {
  const [showPrompt, setShowPrompt] = useState(true)

  return (
    <Pressable
      onPress={() => setShowPrompt((prev) => !prev)}
      style={styles.card}
    >
      <StyledText>{showPrompt ? card.prompt : card.answer}</StyledText>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
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
