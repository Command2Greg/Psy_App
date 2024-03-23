import { redirect } from 'next/navigation';

import { db } from '@/app/dataBase/firebase';
import { collection, doc, getDocs } from "firebase/firestore";
import { getDBQuestion } from '@/app/dataBase/databaseServices';
import { Question } from '@/app/store/types';
import AddLikeBtn from '@/app/components/AddLikeBtn';

// это код для создания ssg в серверных компонентах
export const dynamicParams = false;
export const generateStaticParams = async () => {
  const questionsRef = collection(db, 'questions');
  const querySnapshot = await getDocs(questionsRef);
  const slugs = querySnapshot.docs.map(doc => ({ slug: doc.id }));
  return slugs;
}

export default async function Question(params: { params: { slug?: string } }) {
  let slug = '';
  if (params.params && typeof params.params.slug === 'string') {
    slug = params.params.slug;
  }
  if (!slug) {
    redirect('/error');
  }

  let question = await getDBQuestion(doc(db, 'questions', slug)) as Question;
  const sortedAnswers = [...question.answers];
  sortedAnswers.sort((a, b) => {
    return b.likes.length - a.likes.length;
  });
  question = { ...question, answers: sortedAnswers };

  return (
    <>
      <p>{question.title}</p>
      {question &&
        <div>
          {question.answers && question.answers.length > 0 &&
            question.answers.map(answer => (
              <div key={answer.id}>
                <p>{answer.title}</p>
                <p>Текст вопроса: {answer.text}</p>
                <div>Количестов лайков:
                  <AddLikeBtn answer={answer} slug={slug} />
                </div>
              </div>
            ))
          }
        </div>
      }
    </>
  )
}
