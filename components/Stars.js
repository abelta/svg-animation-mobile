import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export default ({onChange, score}) => (
  <View style={styles.stars}>
    <View style={styles.container}>
      {
        Array(5).fill().map((_, i) => (
          <TouchableOpacity key={i} onPress={() => onChange(i)}>
            <AntDesign
              name={i <= score ? 'star' : 'staro'}
              size={32}
              color="#fff"
            />
          </TouchableOpacity>
        ))
      }
    </View>
  </View>
)

const styles = StyleSheet.create({
  stars: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 6,
    top: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
})
