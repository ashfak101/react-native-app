import { View, Text as RnText } from 'react-native'
import React from 'react'

const Text = ({children}) => {
  return (
      <RnText>{children}</RnText>
  )
}

export default Text