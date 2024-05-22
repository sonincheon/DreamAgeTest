import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Logo from '../image/Logo.svg';
import HamburgerIcon from '../image/hbg.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Logo />
        <TouchableOpacity onPress={toggleMenu}>
          {showMenu ? <Text style={styles.icon}>x</Text> : <HamburgerIcon style={styles.icon} />}
        </TouchableOpacity>
      </View>
      {showMenu && (
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem}>Menu Item 1</Text>
          <Text style={styles.menuItem}>Menu Item 2</Text>
        </View>
      )}
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
  icon: {
    fontSize: 14,
    color: 'black',
  },
  menuContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight + 56,
    right: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    zIndex: 999,
  },
  closeButton: {
    alignSelf: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
});

export default Header;
