import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default () => {
  return (
    <View style={styles.message}>
      <Text style={styles.title}>Please, rate our feedback</Text>
      <Text style={styles.body}>Do let us know your thoughts.</Text>
      <Text style={styles.body}>Your feedback matters!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 50,
    marginBottom: 10,
    color: 'white',
  },
  body: {
    fontSize: 20,
    color: 'white',
  },
})
