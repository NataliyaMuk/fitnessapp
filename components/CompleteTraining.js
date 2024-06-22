import React, { useReducer, useState, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

// Редюсер
const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE_WORKOUT':
      return {
        ...state,
        completedWorkouts: state.completedWorkouts + 1,
        workouts: [...state.workouts, { time: action.payload }],
      };
    default:
      return state;
  }
};

// Начальное состояние
const initialState = {
  completedWorkouts: 0,
  workouts: [],
};


const FitnessTracker = () => {

    // Использование useReducer
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  const [newWorkoutTime, setNewWorkoutTime] = useState('');

  // Использование useCallback
  const completeWorkout = useCallback(() => {
    if (newWorkoutTime) {
      dispatch({ type: 'COMPLETE_WORKOUT', payload: newWorkoutTime });
      setNewWorkoutTime('');
    }
  }, [newWorkoutTime, dispatch]);

  const renderItem = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.text}>Время тренировки: {item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои тренировки</Text>
      <Text style={styles.text}>Завершенные тренировки: {state.completedWorkouts}</Text>

      <FlatList
        data={state.workouts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Время тренировки (в минутах)"
          value={newWorkoutTime}
          onChangeText={(text) => setNewWorkoutTime(text)}
          keyboardType="numeric"
        />
        <Button title="Завершить тренировку" onPress={completeWorkout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4a148c',
    color: '#F0E5FF',
  },
  text: {
    marginBottom: 10,
    color: '#F0E5FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F0E5FF',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F0E5FF',
    color: '#4a148c',
  },
  workoutItem: {
    marginBottom: 10,
  },
});

export default FitnessTracker;
