import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Pedometer } from 'expo-sensors';
import Card from './Card';
import { ProgressChart } from 'react-native-chart-kit';

export default function StepCounter() {
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  return (
    <Card>
      <View style={styles.header}>
        <Text style={styles.headerText}>Step Counter</Text>
      </View>
      <View style = {{flexDirection : 'row'}}>
      <View style={styles.container}>
        <View style={styles.stepCountContainer}>
          <Text style={styles.stepCountLabel}>Current Step Count:</Text>
          <Text style={styles.stepCount}>{currentStepCount}</Text>
        </View>
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesLabel}>Calories Burned:</Text>
          <Text style={styles.calories}>{caloriesBurned}</Text>
        </View>
      </View>
          <View style={styles.chartContainer}>
            <ProgressChart
              data={{
                labels: ['Step Count'],
                data: [[currentStepCount]]
              }}
              width={100}
              height={150}
              strokeWidth={16}
              radius={34}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              }}
              hideLegend={true}
            />
      </View>
          </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    zIndex : 1
  },
  headerText: {
    marginBottom : 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  stepCountContainer: {
    marginBottom: 20,
  },
  stepCountLabel: {
    fontSize: 18,
    color: '#333333',
  },
  stepCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  caloriesLabel: {
    fontSize: 18,
    color: '#333333',
  },
  calories: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
