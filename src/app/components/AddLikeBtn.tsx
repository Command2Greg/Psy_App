'use client'
import { useState } from 'react';
import { db } from '@/app/dataBase/firebase';
import { doc } from "firebase/firestore";
import { getDBQuestion, updateDbAnswerLikes } from '@/app/dataBase/databaseServices';
import { Answer, Question } from "../store/types";

export default function AddLikeBtn({ answer, slug }: { answer: Answer, slug: string }) {
  const [updatedAnswer, setUpdatedAnswer] = useState(answer);

  const addLike = async (id: string) => {
    //TODO проверка аутентификации юзера
    const userName = 'test';
    const index = updatedAnswer.likes.findIndex((item: string) => item === userName);
    if (index !== -1) {
      updatedAnswer.likes.splice(index, 1);
    } else {
      updatedAnswer.likes.push(userName);
    }
    await updateDbAnswerLikes((doc(db, 'questions', slug)), updatedAnswer, id);

    let question = await getDBQuestion(doc(db, 'questions', slug)) as Question;
    const updatedAnswers = [...question.answers];
    const updatedAnswerIndex = question.answers.findIndex((answer: Answer) => answer.id === id);
    setUpdatedAnswer(updatedAnswers[updatedAnswerIndex]);
  };

  return (
    <button onClick={() => addLike(answer.id)}>{updatedAnswer.likes.length}</button>
  )
}
