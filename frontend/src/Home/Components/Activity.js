import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import Card from './Card';

export default Activity = () => {
  const datasets = [
      { color: '#e84118' , legend: 'Steps' },
      { color: '#badc58', legend: 'Sleep' },
      { color: '#18dcff', legend: 'Stress' },
    ]
    const [steps,setSteps]=useState(80);
    const [sleep,setSleep]=useState(70);
    const [stress,setStress]=useState(80);

  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2
  };
  return (
    <Card style={styles.chartContainer}>
      <Text style={styles.headerText}>Daily Progress</Text>
      <View style={{marginRight : 20}}>
      <CircularProgressBase
            {...props}
            value={steps}
            radius={100}
            activeStrokeColor={'#e84118'}
            inActiveStrokeColor={'#e84118'}
          >
          <CircularProgressBase
            {...props}
            value={sleep}
            radius={75}
            activeStrokeColor={'#badc58'}
            inActiveStrokeColor={'#badc58'}
          >
            <CircularProgressBase
              {...props}
              value={stress}
              radius={50}
              activeStrokeColor={'#18dcff'}
              inActiveStrokeColor={'#18dcff'}
            />
              </CircularProgressBase>
            </CircularProgressBase>
      </View>
      <View style={styles.legendContainer}>
        {datasets.map((data, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: data.color }]} />
            <Text style={styles.legendText}>{data.legend}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    elevation: 2,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 18,
    color: '#333333',  },
});
