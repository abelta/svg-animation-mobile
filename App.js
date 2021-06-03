import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Background, Face, Message, Stars } from './components'

const { height, width } = Dimensions.get('screen')

export default () => {
  const [score, setScore] = useState(0)

  return (
    <Background score={score}>
      <View style={styles.message}>
        <Message />
      </View>
      <View style={styles.face}>
        <Face height={height} score={score} width={width} />
      </View>
      <View style={styles.stars}>
        <Stars score={score} onChange={score => setScore(score)} />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  message: {
    flex: 1,
  },
  face: {
    flex: 1,
  },
  stars: {
    flex: 1,
  },
})
