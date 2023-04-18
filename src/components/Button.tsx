import React, { ReactNode } from 'react'
import { Pressable } from 'react-native'
import StyledText from './Text'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const getButtonHeight = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 20
    case 'md':
      return 30
    case 'lg':
      return 40
    default: return 12
  }
}

const getButtonWidth = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 80
    case 'md':
      return 100
    case 'lg':
      return 150
    default: return 16
  }
}

const Button = ({
  children,
  onClick,
  disabled = false,
  size = 'md',
}: ButtonProps) => {
  return (
    <Pressable
      onPress={() => onClick()}
      disabled={disabled}
      style={{
        height: getButtonHeight(size),
        width: getButtonWidth(size),
        backgroundColor: '#769cd0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      }}
    >
      <StyledText color="#ededed">{children}</StyledText>
    </Pressable>
  )
}

export default Button
