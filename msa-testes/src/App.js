import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import quizData from './parts/Quiz';
import styles from './styles/AppStyles';
const TIMER_DURATION = 120;

export default function App() {

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [timer, setTimer] = useState(TIMER_DURATION);
const [selectedOption, setSelectedOption] = useState(null);
const [quizComplete, setQuizComplete] = useState(false);
// const [nome, setNome] = useState("genilson");

useEffect(() => {
  let interval;
  if (timer > 0) {
      interval = setInterval(() => {
          setTimer(timer - 1);
      }, 1000);
  } else {
      handleNextQuestion();
  }

  return () => clearInterval(interval);
}, [timer]);

const handleAnswer = () => {
  if (quizComplete) return; // Evita respostas após o quiz ser concluído

  if (quizData[currentQuestion].correctAnswer === selectedOption) {
      setScore(score + 1);
  }

  handleNextQuestion();
};

const handleNextQuestion = () => {
  if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimer(TIMER_DURATION);
  } else {
      setQuizComplete(true);
  }
};

const renderOptions = () => {
  return quizData[currentQuestion].options.map((option, index) => (
      <RadioButton.Item
          key={index}
          label={option}
          value={option}
          status={selectedOption === option ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption(option)}
          style={styles.option}
          labelStyle={styles.optionText}
          disabled={quizComplete}
      />
  ));
};

const restartQuiz = () => {
  setCurrentQuestion(0);
  setScore(0);
  setTimer(TIMER_DURATION);
  setSelectedOption(null);
  setQuizComplete(false);
};

const containerStyle = styles.container;
const questionTextStyle = styles.questionText;
const answerButtonStyle = styles.answerButton;
const buttonTextStyle = styles.buttonText;
const scoreTextStyle = styles.scoreText;

return (
  <View style={containerStyle}>
      <Text style={questionTextStyle}>
          {quizData[currentQuestion].question}
      </Text>
      <ScrollView style={styles.optionsContainer}>{renderOptions()}</ScrollView>
      <TouchableOpacity
          style={[answerButtonStyle, { opacity: selectedOption === null ? 0.5 : 1 }]}
          onPress={handleAnswer}
          disabled={!selectedOption || quizComplete}
      >
          <Text style={buttonTextStyle}>Responder</Text>
      </TouchableOpacity>
      <Text style={scoreTextStyle}>Pontuação: {score}</Text>
      {quizComplete && (
          <View>
              <Text style={scoreTextStyle}>Quiz Concluído!</Text>
              <Button mode="contained" style={styles.restartButton} onPress={restartQuiz}>
                  Reiniciar o Quiz
              </Button>
          </View>
      )}
  </View>
);
}

