'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import like from '../../../public/like.svg'
import redLike from '../../../public/redLike.svg'
import { db } from '@/app/dataBase/firebase';
import { doc } from "firebase/firestore";
import { getDBQuestion, updateDbAnswerLikes } from '@/app/dataBase/databaseServices';
import { Answer, Question } from "../store/types";
import { getCurrentUser } from '../PersonalHooks/useFirebaseAuth';

export default function AddLikeBtn({ answer, slug }: { answer: Answer, slug: string }) {
  const [updatedAnswer, setUpdatedAnswer] = useState(answer);
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  const addLike = async (id: string) => {
    const currentUser = getCurrentUser();

    if (currentUser && currentUser.email) {
      const userEmail = currentUser.email;
      const index = updatedAnswer.likes.findIndex((item: string) => item === userEmail);

      if (index !== -1) {
        updatedAnswer.likes.splice(index, 1);
        setIsLiked(false);
      } else {
        updatedAnswer.likes.push(userEmail);
        setIsLiked(true);
      }

      await updateDbAnswerLikes((doc(db, 'questions', slug)), updatedAnswer, id);

      let question = await getDBQuestion(doc(db, 'questions', slug)) as Question;
      const updatedAnswers = [...question.answers];
      const updatedAnswerIndex = question.answers.findIndex((answer: Answer) => answer.id === id);
      setUpdatedAnswer(updatedAnswers[updatedAnswerIndex]);
    } else {
      router.push('/registration');
    }
  };

  return (
    <>
      <button onClick={() => { addLike(answer.id) }}>
        <Image src={isLiked ? redLike : like} width={48} height={53} alt='like' />
      </button>
      <p className='text-[13px] -mt-2'>{updatedAnswer.likes.length}</p>
    </>

  )
}
