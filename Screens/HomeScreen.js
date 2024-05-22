import React from 'react';
import {View, Button, ScrollView} from 'react-native';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Category from '../Components/Categorys';
import MenuList from '../Components/MenuList';

function HomeScreen({navigation}) {

  
  return (
    <View>
      <Header />
      <ScrollView>
      <Title />
        <Category />
        <MenuList />
        <Button
          title="Detail 열기"
          onPress={() => navigation.navigate('Detail')}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
