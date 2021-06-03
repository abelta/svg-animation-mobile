import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'

export default ({ children, score }) => {
  const animRef = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animRef, {
      toValue: score,
      useNativeDriver: false,
    }).start()
  }, [score])

  return (
    <Animated.View
      style={[
        styles.background,
        {
          backgroundColor: animRef.interpolate({
            inputRange: [0, 1, 2, 3, 4],
            outputRange: [
              'rgb(231, 97, 97)',
              'rgb(247, 152, 48)',
              'rgb(243, 189, 67)',
              'rgb(187, 230, 95)',
              'rgb(95, 230, 118)',
            ],
          }),
        },
      ]}
    >
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    flex: 1,
  },
})
