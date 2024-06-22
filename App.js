import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import PersonalPage from './components/PersonalPage';
import NotesPage from './components/NotesPage';
import MuscleGroupsScreen from './components/MuscleGroupsScreen';
import ExercisesScreen from './components/ExercisesScreen';
import CompleteTraining from './components/CompleteTraining';
import Calculator from './components/Calculator';
import Counter from './components/Counter';

import { UserProvider } from './components/UserContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExerciseStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MuscleGroups" component={MuscleGroupsScreen} options={{ title: 'Группы мышц' }} />
    <Stack.Screen name="Exercises" component={ExercisesScreen} options={{ title: 'Упражнения' }} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
  <UserProvider>
    <Tab.Navigator>
      <Tab.Screen name="PersonalPage" component={PersonalPage} options={{ title: 'Профиль' }} />
      <Tab.Screen name="ExerciseListPage" component={ExerciseStack} options={{ title: 'Упражнения' }} />
      <Tab.Screen name="NotesPage" component={NotesPage} options={{ title: 'Заметки' }} />
      <Tab.Screen name="CompleteTraining" component={CompleteTraining} options={{ title: 'Трени' }} />
      <Tab.Screen name="Calculator" component={Calculator} options={{ title: 'Калории' }} />
      <Tab.Screen name="Counter" component={Counter} options={{ title: 'Таймер' }} />
    </Tab.Navigator>
    </UserProvider>
  </NavigationContainer>
);

export default App;
