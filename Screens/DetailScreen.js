import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ToppingMenu from '../Components/DetailMenu';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const QuantityControl = ({quantity, onIncrease, onDecrease}) => {
  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={onDecrease}>
        <Text style={styles.quantityButton}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={onIncrease}>
        <Text style={styles.quantityButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {itemId, item, price, SvgIcon, detail} = route.params;
  const windowWidth = useWindowDimensions().width;
  const svgHeight = windowWidth;
  const [expanded, setExpanded] = useState(false);
  const [isOverflown, setIsOverflown] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const numberOfLines = Math.floor((windowWidth / 16) * 2); // Assuming font size is 16
    if (detail.length > numberOfLines) {
      setIsOverflown(true);
    } else {
      setIsOverflown(false);
    }
  }, [windowWidth, detail]);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <ScrollView style={styles.infoContainer} stickyHeaderIndices={[0]}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View style={styles.svgContainer}>
            <SvgIcon
              style={[styles.svg, {height: svgHeight, width: windowWidth}]}
              width={windowWidth}
              height={svgHeight}
            />
          </View>
          <View style={styles.infoTextBlock}>
            <Text style={styles.itemName}>{item}</Text>
            <Text
              style={[
                styles.itemDetail,
                expanded
                  ? {maxHeight: '100%'}
                  : isOverflown
                  ? {maxHeight: 40}
                  : {},
              ]}>
              {detail}
            </Text>
            {isOverflown && !expanded && (
              <TouchableOpacity
                style={styles.moreButton}
                onPress={toggleExpansion}>
                <Text style={styles.moreButtonText}>더 보기 ></Text>
              </TouchableOpacity>
            )}
            <View style={styles.priceContainer}>
              <Text>{price}원</Text>
              <QuantityControl
                quantity={quantity}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />
            </View>
            <ToppingMenu name={'기본'} price={'0'} />
            <ToppingMenu name={'기본'} price={'0'} />
            <ToppingMenu name={'기본'} price={'0'} />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>뒤로</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    width: '100%',
  },
  svgContainer: {
    backgroundColor: 'white',
    zIndex: 10,
  },
  infoTextBlock: {
    padding: 16,
    backgroundColor: 'white',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemDetail: {
    fontSize: 13,
    marginBottom: 8,
    color: '#555',
    overflow: 'hidden',
  },
  moreButton: {
    alignSelf: 'flex-start',
  },
  moreButtonText: {
    fontSize: 13,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    backgroundColor: '#999',
    paddingHorizontal: 8,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  svg: {
    alignSelf: 'center',
  },
});

export default DetailScreen;
