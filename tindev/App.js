/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text}>My first app with React Native</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: '#00BFFF',  
    justifyContent:'center',
    alignItems: 'center'
  }, 

  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
  }
})

