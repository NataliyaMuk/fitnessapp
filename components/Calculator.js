import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const CalorieCalculator = () => {
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [burnedCaloriesFromExercise, setBurnedCaloriesFromExercise] = useState(0);

  const totalCalorieBalance = useMemo(() => {
    return consumedCalories - burnedCaloriesFromExercise;
  }, [consumedCalories, burnedCaloriesFromExercise]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Калькулятор калорий</Text>
      <View style={styles.label}>
        <Text style={styles.balance}>Съеденные калории: {totalCalorieBalance}</Text>
        <input
          type="number"
          value={consumedCalories}
          onChange={(e) => setConsumedCalories(parseInt(e.target.value, 10) || '')}
          style={styles.input}
        />
      </View>

      <View style={styles.label}>
        <Text style={styles.balance}>Калории, сожженные во время тренировок: {totalCalorieBalance}</Text>
        <input
          type="number"
          value={burnedCaloriesFromExercise}
          onChange={(e) => setBurnedCaloriesFromExercise(parseInt(e.target.value, 10) || '')}
          style={styles.input}
        />
      </View>
      <Text style={styles.balance}>Общий баланс калорий: {totalCalorieBalance}</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#4a148c',
    padding: 16,
    borderRadius: 8,
    color: '#FFFAFA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFAFA',
  },
  label: {
    marginBottom: 10,
    display: 'block',
    color: '#FFFAFA',
  },
  input: {
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
    border: '1px solid #6a0572',
    backgroundColor: '#f0e5ff',
    color: '#6a0572',
  },
  balance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFAFA',
  },
};

export default CalorieCalculator;
