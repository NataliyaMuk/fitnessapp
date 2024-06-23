import { useDebugValue, useState, useRef, useEffect } from 'react';

const FitnessTracker = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const resultRef = useRef(null);
  const intervalRef = useRef(null);

  useDebugValue(`Training Status: ${isTraining ? 'Training' : 'Not Training'}`);

  const startTraining = () => {
    setIsTraining(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTraining = () => {
    setIsTraining(false);
    clearInterval(intervalRef.current);
    resultRef.current = elapsedTime;
    setElapsedTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={styles.container}>
      <p style={styles.timer}>Пройдено времени: {elapsedTime} секунд</p>
      {!isTraining ? (
        <button style={styles.startButton} onClick={startTraining}>
          Начать
        </button>
      ) : (
        <button style={styles.stopButton} onClick={stopTraining}>
          Закончить
        </button>
      )}
      {resultRef.current !== null && (
        <p style={styles.result}>Результат: {resultRef.current} секунд</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#4a148c',
    padding: 16,
    borderRadius: 8,
    color: '#f0e5ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  timer: {
    fontSize: 18,
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: '#f0e8ff',
    color: '#6a0572',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    cursor: 'pointer',
  },
  stopButton: {
    backgroundColor: '#f0e8ff',
    color: '#6a0572',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginRight: 16,
    cursor: 'pointer',
  },
  result: {
    fontSize: 18,
    marginTop: 16,
  },
};

export default FitnessTracker;
