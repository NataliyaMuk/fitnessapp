import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import UserContext from './UserContext';

const MuscleGroupsScreen = ({ navigation }) => {
  const { username } = useContext(UserContext);

  const handlePress = (muscleGroup) => {
    const exercises = getExercisesForMuscleGroup(muscleGroup);
    navigation.navigate('Exercises', { muscleGroup, exercises });
  };

  const getExercisesForMuscleGroup = (muscleGroup) => {
    switch (muscleGroup) {
      case 'Грудные мышцы':
        return ['Жим гантелей лежа', 'Отжимания', 'Бабочка'];
      case 'Спина':
        return [
          'Тяга штанги в наклоне',
          'Подтягивания',
          'Гиперэкстензии',
          'Вертикальная тяга',
          'Горизонтальная тяга',
        ];
      case 'Ягодицы и ноги':
        return [
          'Присед',
          'Румынская тяга',
          'Выпады',
          'Ягодичный мост',
          'Разгибания ног',
        ];
      case 'Плечи':
        return ['Махи гантелями в бок', 'Жим Арнольда'];
      case 'Бицепс & Трицепс':
        return ['Подъем гантелей на бицепс', 'Разгибания рук в кроссовере'];

      default:
        return [];
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Выберите группу мышц</Text>
      {username && <Text style={styles.header}>{username}!</Text>}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handlePress('Грудные мышцы')}>
        <Text style={styles.btnText}>Грудные мышцы</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handlePress('Спина')}>
        <Text style={styles.btnText}>Спина</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handlePress('Ягодицы и ноги')}>
        <Text style={styles.btnText}>Ягодицы и ноги</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handlePress('Плечи')}>
        <Text style={styles.btnText}>Плечи</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handlePress('Бицепс & Трицепс')}>
        <Text style={styles.btnText}>Бицепс & Трицепс</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E5FF',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4a148c',
  },
  btn: {
    backgroundColor: '#4a148c',
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  btnText: {
    color: '#F0E5FF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MuscleGroupsScreen;
