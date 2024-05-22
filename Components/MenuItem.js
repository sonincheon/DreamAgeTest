import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CartIcon from '../image/cart.svg';

const MenuItem = ({id, name, price, SvgIcon, detail}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Detail', {
      itemId: id,
      item: name,
      price: price,
      SvgIcon: SvgIcon,
      detail: detail,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.menuItemContainer}>
        {SvgIcon && (
          <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <SvgIcon style={styles.icon} width={'100%'} height={'100%'} />
            </View>
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
    </TouchableOpacity>
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
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    alignSelf: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  icon: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'column',
    height: '100%',
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#888',
    fontWeight: 'bold',
    color: 'black',
  },
  cartContainer: {
    marginLeft: 'auto',
    flexDirection: 'column',
    backgroundColor: '#E3E0FF',
    borderRadius: 8,
    padding: 12,
  },
});

export default MenuItem;
