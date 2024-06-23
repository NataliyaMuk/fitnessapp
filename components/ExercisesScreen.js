import { View, Text, StyleSheet } from 'react-native';

const ExercisesScreen = ({ route }) => {
  const { muscleGroup, exercises } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Упражнения для группы мышц: {muscleGroup}
      </Text>
      {exercises.map((exercise, index) => (
        <Text key={index} style={styles.exercise}>
          {exercise}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a148c',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#F0E5FF',
  },
  exercise: {
    fontSize: 16,
    color: '#F0E5FF',
    marginBottom: 8,
  },
});

export default ExercisesScreen;
