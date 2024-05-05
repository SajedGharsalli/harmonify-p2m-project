import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const WATER_INTAKE_KEY = 'waterIntake';

export default function WaterReminder() {
  const [waterIntake, setWaterIntake] = useState(0);

  const logWaterIntake = async () => {
    const newIntake = waterIntake + 1;
    setWaterIntake(newIntake);
    await AsyncStorage.setItem(WATER_INTAKE_KEY, JSON.stringify(newIntake));
  };

  const loadWaterIntake = async () => {
    const savedIntake = await AsyncStorage.getItem(WATER_INTAKE_KEY);
    if (savedIntake !== null) {
      setWaterIntake(JSON.parse(savedIntake));
    }
  };

  useEffect(() => {
    loadWaterIntake();
  }, []);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Stay Hydrated!</Text>
        <View style={styles.intakeContainer}>
          <Text style={styles.intakeText}>Water Intake:</Text>
          <Text style={styles.intakeValue}>{waterIntake} glasses</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={logWaterIntake}>
          <Ionicons name="water" size={45} color="white" />
        </TouchableOpacity>
        <View style={styles.tipsContainer}>
          <Text style={styles.tipTitle}>Why Drink Water?</Text>
          <Text style={styles.tipText}>
            Drinking water helps maintain the balance of body fluids, energizes muscles, keeps skin looking good, and helps your kidneys flush out toxins.
          </Text>
          <Text style={styles.tipTitle}>How Much to Drink?</Text>
          <Text style={styles.tipText}>
            The recommended daily intake of water varies, but a general guideline is to drink at least 8 glasses (64 ounces) per day.
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  intakeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  intakeText: {
    fontSize: 24,
    marginRight: 10,
    color: '#FFF',
  },
  intakeValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  tipsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    paddingVertical: 20,
  },
  tipTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  tipText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
    lineHeight: 24,
  },
});
