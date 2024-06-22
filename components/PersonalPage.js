import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import UserContext from './UserContext';

import Svg, { Path } from 'react-native-svg';

const PersonalPage = () => {
  const { username, setUsername } = useContext(UserContext);
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [userDetails, setUserDetails] = useState({
    age: '',
    weight: '',
    targetWeight: '',
    fatPercentage: '',
    musclePercentage: '',
  });

  const handleLogin = () => {
    if (username) {
      setIsInputVisible(false);
    } else {
      console.log('Введите имя');
    }
  };

    const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {isInputVisible && (
        <>
          <Text style={styles.userName}>Привет, {username || 'Гость'}!</Text>
          <TextInput
            style={styles.input}
            placeholder="Введите ваше имя"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Введите возраст"
            value={userDetails.age.toString()}
            onChangeText={(text) => setUserDetails({ ...userDetails, age: parseInt(text) || 0 })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Введите вес"
            value={userDetails.weight.toString()}
            onChangeText={(text) => setUserDetails({ ...userDetails, weight: parseInt(text) || 0 })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Введите желаемый вес"
            value={userDetails.targetWeight.toString()}
            onChangeText={(text) => setUserDetails({ ...userDetails, targetWeight: parseInt(text) || 0 })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Введите процент жира"
            value={userDetails.fatPercentage.toString()}
            onChangeText={(text) => setUserDetails({ ...userDetails, fatPercentage: parseInt(text) || 0 })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Введите процент мышц"
            value={userDetails.musclePercentage.toString()}
            onChangeText={(text) => setUserDetails({ ...userDetails, musclePercentage: parseInt(text) || 0 })}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleLogin}>
            <Text style={styles.btnText}>Сохранить</Text>
          </TouchableOpacity>
        </>
      )}

      {!isInputVisible && username && (
        <Text style={styles.userName}>Привет, {username}!</Text>
      )}

      <Svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        
          <Path d="M13.4065 50.6933C15.4445 45.9364 16.7105 44.0091 23.1218 39.7672C24.8341 35.0558 28.0827 32.4635 30.8582 30.2879C32.166 25.091 32.3455 19.5524 31.3302 17.3054C31.0721 18.7632 29.0513 20.5836 26.6225 21.8497C27.6685 24.3387 29.4889 26.5967 31.4384 27.5616" stroke="#0FA958" stroke-width="0.729167" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M43.1032 50.9883C42.1383 45.3784 41.0751 41.7167 44.9728 38.763C39.8939 39.5312 36.4682 34.4523 36.4682 34.4523C31.8035 37.1098 28.6138 40.2982 25.3073 41.8937C20.2272 48.3898 18.4855 47.9768 13.4065 50.6933M13.4065 50.6933C13.4065 50.6933 13.849 52.494 13.7114 53.4688H10.2267C11.3391 52.612 12.6383 52.317 13.4065 50.6933ZM31.4384 27.5616C28.722 27.1093 25.3848 25.0615 23.7709 22.9952M42.9631 16.3922C43.6133 21.964 39.4415 24.2146 39.8349 28.9395" stroke="#0FA958" stroke-width="0.729167" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M38.6131 12.127C38.1091 12.6235 37.5818 12.9579 36.5739 12.9579C35.566 12.9579 35.3509 10.6962 35.3742 9.54079C35.3976 8.38537 35.5365 5.55829 38.6499 5.53125C40.7211 5.51281 41.2521 6.90054 41.0456 9.44C40.8391 11.9795 40.7592 13.1877 41.4881 14.0764C43.3195 13.7027 44.3828 14.5681 45.1694 15.7112C45.9561 16.8543 46.7649 19.706 48.6357 22.168C48.8115 27.1879 47.3942 29.7471 43.9685 31.7555C45.9377 29.9044 46.4687 25.9084 46.213 23.4464C46.213 23.4464 42.984 20.9868 42.9422 19.2979M39.8349 28.9395C43.4965 31.0856 45.5492 33.3891 48.6492 36.5775C49.6239 41.4795 44.5794 41.3221 43.1032 50.9883M43.1032 50.9883C44.3238 51.8155 45.3071 53.1344 47.8662 53.4687H41.2533C41.0947 52.1892 43.1032 50.9883 43.1032 50.9883ZM34.4609 14.0985C34.4609 14.0985 32.3406 14.7254 31.3475 15.1396C28.422 16.359 25.74 18.5457 23.7709 22.994" stroke="#0FA958" stroke-width="0.729167" stroke-linecap="round" stroke-linejoin="round"/>
    
      </Svg>

      {!isInputVisible && (
        <>
          <Text style={styles.userDetail}>Возраст: {userDetails.age} лет</Text>
          <Text style={styles.userDetail}>Вес: {userDetails.weight} кг</Text>
          <Text style={styles.userDetail}>Желаемый вес: {userDetails.targetWeight} кг</Text>
          <Text style={styles.userDetail}>Процент жира: {userDetails.fatPercentage}%</Text>
          <Text style={styles.userDetail}>Процент мышц: {userDetails.musclePercentage}%</Text>
                    <TouchableOpacity style={styles.addButton} onPress={openModal}>
            <Text style={styles.btnText}>Открыть мотивацию на сегодня</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Триумф не дарует настоящей силы, её формирует борьба. (Арнольд Шварценеггер)</Text>
                <Pressable style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.btnText}>Закрыть</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0e8ff',
  },
  addButton: {
    backgroundColor: '#4a148c',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#F0E5FF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4a148c',
  },
  userDetail: {
    fontSize: 16,
    color: '#6a5acd',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#4a148c',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4a148c',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default PersonalPage;

    