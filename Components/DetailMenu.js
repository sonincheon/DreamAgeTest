import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ToppingMenu = ({name, price}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {id: 1, label: '고기많이', price: 1000},
    {id: 2, label: '곱뺴기', price: 1000},
    {id: 3, label: '곱뺴기', price: 1000},
  ];

  const handleSelectOption = id => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.menuItem}>
      <Text style={styles.titleText}>토핑 추가</Text>
      {options.map(option => (
        <View key={option.id} style={styles.menuItemContent}>
          <Text style={styles.menuItemName}>{option.label}</Text>
          <View style={styles.radioContainer}>
            <Text style={styles.menuItemPrice}>+{option.price}원</Text>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleSelectOption(option.id)}>
              {selectedOption === option.id && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  menuItem: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItemName: {
    fontSize: 16,
  },
  menuItemPrice: {
    fontSize: 16,
    marginRight: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#333',
  },
});

export default ToppingMenu;
