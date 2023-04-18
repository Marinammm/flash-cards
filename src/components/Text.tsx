import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import { FontWeight, FontStyle } from '../types'
import { useFonts } from 'expo-font'

type StyledTextProps = {
  size?: number
  color?: string
  weight?: FontWeight
  style?: FontStyle
  children: ReactNode
}

const StyledText = ({
  size = 14,
  color = '#292929',
  weight = 'normal',
  style = 'normal',
  children
}: StyledTextProps) => {
  const [fontsLoaded] = useFonts({
    'poppins': require('../../assets/fonts/Poppins-Regular.ttf')
  })

  if (!fontsLoaded) return null

  return (
    <Text style={{
      fontSize: size,
      fontWeight: weight,
      color: color,
      fontStyle: style,
      fontFamily: 'poppins'
    }}>
      {children}
    </Text>
  )
}

export default StyledText
