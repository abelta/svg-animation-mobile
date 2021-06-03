import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'
import { interpolate } from 'flubber'

const MOUTHS = [
  'M141.5 132.55C140.92 75.87 120.92 48.22 81.5 49.63C42.09 51.03 22.09 78.67 21.5 132.55L141.5 132.55Z',
  'M122.32 87.65C121.94 68.08 108.83 58.53 83 59.02C57.17 59.5 44.06 69.04 43.68 87.65L122.32 87.65Z',
  'M38.02 58.05L99.77 40.83L102.99 52.35L41.23 69.57L38.02 58.05Z',
  'M122.3 64.68C121.94 84.25 108.83 93.79 83 93.31C57.17 92.82 44.06 83.28 43.68 64.68L122.32 64.68Z',
  'M142.99 49.74C142.4 106.42 122.4 134.06 82.99 132.66C43.57 131.26 23.57 103.62 22.99 49.74L142.99 49.74Z',
]

export default ({ height, score, width }) => {
  const prevScoreRef = useRef(score)
  const mouthRef = useRef()
  const animRef = useRef(new Animated.Value(0))
  const interpolateRef = useRef(interpolate(MOUTHS[score], MOUTHS[score]))

  useEffect(() => {
    animRef.current.addListener(({ value }) =>
      mouthRef.current.setNativeProps({ d: interpolateRef.current(value) })
    )
    return () => animRef.current.removeAllListeners()
  }, [])

  useEffect(() => {
    interpolateRef.current = interpolate(
      MOUTHS[prevScoreRef.current],
      MOUTHS[score],
      { maxSegmentLength: 2 }
    )
    prevScoreRef.current = score
    animRef.current.setValue(0)
    Animated.timing(animRef.current, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }, [score])

  return (
    <View>
      <Svg
        width={width}
        height={height / 3}
        viewBox="0 0 166 136"
        style={styles.container}
      >
        <G>
          <Path
            d="M30.43 16.78C30.43 24.39 24.29 30.57 16.72 30.57C9.15 30.57 3 24.39 3 16.78C3 9.18 9.15 3 16.72 3C24.29 3 30.43 9.18 30.43 16.78Z"
            fill="white"
          />
          <Path ref={mouthRef} d={MOUTHS[0]} fill="white" />
          <Path
            d="M162.99 16.79C162.99 24.4 156.84 30.57 149.27 30.57C141.7 30.57 135.56 24.4 135.56 16.79C135.56 9.18 141.7 3.01 149.27 3.01C156.84 3.01 162.99 9.18 162.99 16.79Z"
            fill="white"
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  face: {},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
