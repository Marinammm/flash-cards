import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, Text, Button, StyleSheet } from 'react-native'
import { RootStackParamList } from '../types'

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>()

  return (
    <View style={styles.container}>
      <Button title='New deck' onPress={() => navigation.navigate('CreateDeck')} />
      <Text>You don't have any decks yet</Text>
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
