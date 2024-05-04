import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';

const IBW = () => {
  const [weight] = useState(70);
  const [height] = useState(180);
  const [idealWeight, setIdealWeight] = useState(null);

  const calculateIdealWeight = () => {
    const heightInMeters = height / 100;
    const idealWeightForMen = 22 * Math.pow(heightInMeters, 2);
    const idealWeightForWomen = 21.7 * Math.pow(heightInMeters, 2);

    setIdealWeight({
      male: idealWeightForMen.toFixed(2),
      female: idealWeightForWomen.toFixed(2),
    });
  };

  useState(() => {
    calculateIdealWeight();
  }, []);

  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.title}>Ideal Body Weight Calculator</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Your Height:</Text>
          <Text style={styles.infoText}>{height} cm</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Your Weight:</Text>
          <Text style={styles.infoText}>{weight} kg</Text>
        </View>
        {idealWeight && (
          <View style={styles.resultContainer}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Ideal Weight for Men:</Text>
              <Text style={styles.resultText}>{idealWeight.male} kg</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Ideal Weight for Women:</Text>
              <Text style={styles.resultText}>{idealWeight.female} kg</Text>
            </View>
          </View>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  resultRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  resultText: {
    fontSize: 16,
  },
});

export default IBW;
