import { StyleSheet, View, FlatList, Animated, useWindowDimensions } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'
import OnboardingItem from '../components/OnboardingItem'
import Paginator from '../components/Paginator'


import data from '../data'
import Already from '../components/Already'


const Onboarding = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null)

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (Array.isArray(viewableItems) && viewableItems.length > 0 && viewableItems[0].index !== undefined) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;


  const viewconfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );
  return (
    <View style={styles.container} >
      <View style={{ flex: 3 }}>
        <FlatList data={data}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={handleScroll}
          onViewableItemsChanged={onViewableItemsChanged}
          scrollEventThrottle={32}
          viewabilityConfig={viewconfig}
          ref={slideRef}
        />
      </View>
      <Paginator data={data} scrollX={scrollX} />
      <View style={{ borderTopWidth: 1, width: useWindowDimensions().width * 0.9, bottom: 60 }} />
      <Already />
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})