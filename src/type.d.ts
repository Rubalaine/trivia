interface IQuestion {
  id: number;
  category: string;
  question: string;
  answers: string[];
  duration: number;
  rightAnswer: string;
  hint: string;
}
interface IQuestions {
  totalQuestions: number;
  actualQuestion: IQuestion ;
  questionNumber: number;
  questions: IQuestion[];
}

type ContextType = {
  questions: IQuestions;
  setQuestions: (question: IQuestions) => void;
};
