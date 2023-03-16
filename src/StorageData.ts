import AsyncStorage from '@react-native-async-storage/async-storage'
import { Deck } from './types'

const STORAGE_KEY = '@storage_data'

type StorageData = {
  decks: Array<Deck>
}

type StorageMethodsType = {
  read: () => Promise<StorageData>
  write: (newDeck: Deck) => Promise<void>
  clear: () => Promise<void>
}

const getDefaultData = () => ({
  decks: []
})

const StorageMethods: StorageMethodsType = {
  read: async() => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : getDefaultData()
    } catch (error) {
      return getDefaultData()
    }
  },
  write: async(newDeck) => {
    try {
      const currentData = await StorageMethods.read()
      const newDecks = [...currentData.decks, newDeck]
      const newData = JSON.stringify({ decks: newDecks })
      await AsyncStorage.setItem(STORAGE_KEY, newData)
    } catch (error) {
      return
    }
  },
  clear: async() => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      return
    }
  }
}

export default StorageMethods
