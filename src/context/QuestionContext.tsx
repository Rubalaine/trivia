import React, { useContext, useState } from "react";

const QuestionsContext =  React.createContext<ContextType | null>(null)

export const useQuestions = () => useContext(QuestionsContext);
const QuestionProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<IQuestions>({
    totalQuestions: 4,
    actualQuestion: {
      id: 1,
      category: "cultura geral",
      question: "em que ano mozambique se tornou independente",
      answers: ["1975", "2005", "2001", "5002"],
      duration: 20,
      rightAnswer: "1975",
      hint: "mozambique se tornou um pais independente a dois anos atras",
    },
    questionNumber: 0,
    questions: [
      {
        id: 1,
        category: "cultura geral",
        question: "em que ano mozambique se tornou independente",
        answers: ["1975", "2005", "2001", "5002"],
        duration: 20,
        rightAnswer: "1975",
        hint: "mozambique se tornou um pais independente a dois anos atras",
      },
      {
        id: 2,
        category: "about me",
        question: "who am i?",
        answers: ["the boss", "superuser", "mr president", "the boy next door"],
        duration: 25,
        rightAnswer: "superuser",
        hint: "i create this game",
      },
      {
        id: 3,
        category: "matematica",
        question: "Quanto é 1+1",
        answers: ["3", "4", "2", "9"],
        duration: 10,
        rightAnswer: "2",
        hint: "4-2",
      },
      {
        id: 4,
        category: "matematica",
        question: "Quanto é 2X7",
        answers: ["15", "16", "14", "32"],
        duration: 15,
        rightAnswer: "14",
        hint: "dia dos namorados",
      },
    ],
  });
  //   console.log(state);
  return (
    <QuestionsContext.Provider value={{questions, setQuestions}}>
      {children}
    </QuestionsContext.Provider>
  );
};
export { QuestionsContext, QuestionProvider };
