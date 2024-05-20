import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.logo}>로고</Text>
        <Text style={styles.hamburger}>햄버거</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hamburger: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
