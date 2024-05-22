import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>드림에이지이</Text>
        <Text style={styles.title}>가산디지털역점</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'start',
    justifyContent: 'center',
    padding: 16, 
    height: 100, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color:'black',
  },
});

export default Title;