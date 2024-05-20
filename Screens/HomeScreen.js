import React from 'react';
import {View, Button} from 'react-native';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Category from '../Components/Categorys';
import MenuList from '../Components/MenuList';

function HomeScreen({navigation}) {
  return (
    <View>
      <Header/>
      <Title/>
      <Category/>
      <MenuList/>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail')}
      />

    </View>
  );
}

export default HomeScreen;