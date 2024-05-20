import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CartIcon from '../image/cart.svg';

const MenuItem = ({name, price, SvgIcon}) => {
  return (
    <View style={styles.menuItemContainer}>
      {SvgIcon && (
        <View style={styles.iconContainer}>
          <SvgIcon style={styles.icon} width={96} height={96} />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.menuItemName}>{name}</Text>
        <Text style={styles.menuItemPrice}>{price}</Text>
      </View>
      <View style={styles.cartContainer}>
        <CartIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 8,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    width: 80, // 원하는 크기로 조절
    height: 80, // 원하는 크기로 조절
  },
  textContainer: {
    flexDirection: 'column',
  },
  menuItemName: {
    fontSize: 16,
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#888',
  },
  cartContainer: {
    marginLeft: 'auto',
  },
});

export default MenuItem;
