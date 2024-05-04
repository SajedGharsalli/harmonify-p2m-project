import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Card from './Card';

export default Activity = () => {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { data: [20, 45, 28, 80, 100, 43, 62], color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, strokeWidth: 2, legend: 'Walk' },
      { data: [50, 72, 60, 90, 75, 40, 65], color: (opacity = 1) => `rgba(255, 69, 58, ${opacity})`, strokeWidth: 2, legend: 'Sleep' },
      { data: [10, 35, 18, 50, 30, 55, 25], color: (opacity = 1) => `rgba(66, 220, 135, ${opacity})`, strokeWidth: 2, legend: 'Heart' },
    ],
  };

  return (
    <Card>
        <Text style={styles.chartTitle}>Weekly Progress</Text>
        <LineChart
          data={chartData}
          width={320}
          height={200}
          yAxisSuffix="%"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            strokeWidth: 2,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
        />
        <View style={styles.legendContainer}>
          {chartData.datasets.map((dataset, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: dataset.color() }]} />
              <Text style={styles.legendText}>{dataset.legend}</Text>
            </View>
          ))}
        </View>
      </Card>
  );
};

const styles = StyleSheet.create({
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    elevation: 2,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
    fontSize: 14,
  },
});