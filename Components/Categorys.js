import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={[styles.category1, styles.fixed]}>검색</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollContainer}>
          {['대표 메뉴', '세트메뉴', '메인메뉴', '사이드'].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.category,
                activeCategory === index && styles.activeCategory,
              ]}
              onPress={() => setActiveCategory(index)}
            >
              <Text style={activeCategory === index && styles.activeCategoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
    fontSize:13,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  category: {
    marginHorizontal: 8,
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderColor: 'black',
  },
  category1: {
    marginHorizontal: 8,
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 11,
    backgroundColor: '#ddd',
  },
  activeCategory: {
    backgroundColor: '#222127',
  },
  activeCategoryText: {
    color: 'white',
  },
  fixed: {
    zIndex: 1,
  },
});

export default Category;
