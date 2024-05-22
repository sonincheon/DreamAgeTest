import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import MenuItem from './MenuItem';

// SVG 파일을 import 합니다.
import NoodleIcon from '../image/image1.svg';
import SpicyNoodleIcon from '../image/image2.svg';
import SpicySoupIcon from '../image/image3.svg';
import SeafoodNoodleIcon from '../image/image4.svg';
import Title from './Title';
// MenuList 컴포넌트
const MenuList = () => {
  const menuItems = [
    {
      name: '짜장면',
      price: '8,000',
      detail:
        '짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면짜장면',
      SvgIcon: NoodleIcon,
    },
    {
      name: '짬뽕',
      price: '9,000',
      detail:
        '짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕짬뽕',
      SvgIcon: SpicyNoodleIcon,
    },
    {
      name: '마라탕',
      price: '10,000',
      detail:
        '마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라마라',
      SvgIcon: SpicySoupIcon,
    },
    {
      name: '울면',
      price: '9,000',
      detail:
        '울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면울면',
      SvgIcon: SeafoodNoodleIcon,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>대표메뉴</Text>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          price={item.price}
          detail={item.detail}
          SvgIcon={item.SvgIcon}
        />
      ))}
      <Text style={styles.titleText}>세트메뉴</Text>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          detail={item.detail}
          price={item.price}
          SvgIcon={item.SvgIcon}
        />
      ))}
      <Text style={styles.titleText}>메인메뉴</Text>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          detail={item.detail}
          price={item.price}
          SvgIcon={item.SvgIcon}
        />
      ))}
      <Text style={styles.titleText}>사이드</Text>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          detail={item.detail}
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
  titleText: {
    color: 'black',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MenuList;
