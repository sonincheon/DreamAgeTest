import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuItem from './MenuItem';

// SVG 파일을 import 합니다.
import NoodleIcon from '../image/image1.svg';
import SpicyNoodleIcon from '../image/image2.svg';
import SpicySoupIcon from '../image/image3.svg';
import SeafoodNoodleIcon from '../image/image4.svg';
// MenuList 컴포넌트
const MenuList = () => {
  const menuItems = [
    {name: '짜장면', price: '₩8,000', SvgIcon: NoodleIcon},
    {name: '짬뽕', price: '₩9,000', SvgIcon: SpicyNoodleIcon},
    {name: '마라탕', price: '₩10,000', SvgIcon: SpicySoupIcon},
    {name: '울면', price: '₩9,000', SvgIcon: SeafoodNoodleIcon},
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          price={item.price}
          SvgIcon={item.SvgIcon}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default MenuList;
