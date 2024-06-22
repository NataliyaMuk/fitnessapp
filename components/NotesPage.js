import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';


const NotesPage = () => {
  const [todos, setTodos] = useState([]); // Состояние для списка дел
  const [newTodo, setNewTodo] = useState(''); // Состояние для нового элемента списка
  const [newApproach, setNewApproach] = useState(''); // Подходы
  const [newRepeat, setNewRepeat] = useState(''); // Повторы

 useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Ошибка при сохранении данных:', error);
      }
    };

    saveData();
  }, [todos]);

  const addTodo = () => {
    if (newTodo !== '') {
      setTodos([...todos,{ id: Date.now(), text: newTodo, approach: newApproach, repeat: newRepeat,  completed: false }]);
      setNewTodo('');
      setNewApproach('');
      setNewRepeat('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={item.completed ? styles.completedText : styles.todoText}>
        {item.text} : {item.approach} * {item.repeat}
      </Text>
      <TouchableOpacity onPress={() => toggleTodo(item.id)}>
        <Text>Сделано</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTodo(item.id)}>
        <Text>Удалить</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>План тренировки</Text>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
        placeholder="Введите упражнение"
      />
      <TextInput
        style={styles.input}
        value={newApproach}
        onChangeText={(text) => setNewApproach(text)}
        placeholder="Введите количество подходов"
      />
      <TextInput
        style={styles.input}
        value={newRepeat}
        onChangeText={(text) => setNewRepeat(text)}
        placeholder="Введите количество повторов"
      />

      <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Text style={styles.btnText}>Добавить</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0e8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4a148c',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btnText: {
    color: '#F0E5FF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4a148c',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});

export default NotesPage;