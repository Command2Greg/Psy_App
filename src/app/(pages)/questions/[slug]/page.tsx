import { redirect } from 'next/navigation';

import { db } from '@/app/dataBase/firebase';
import { collection, doc, getDocs } from "firebase/firestore";
import { getDBQuestion } from '@/app/dataBase/databaseServices';
import { Question } from '@/app/store/types';
import AddLikeBtn from '@/app/components/AddLikeBtn';
import YoutubeAsideList from '@/app/components/YoutubeAsideList';

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
    <div className="flex justify-center pb-6">
      <YoutubeAsideList />
      <article className='flex-col max-w-screen-sm shadow-[0_11px_9px_6px_rgba(0,0,0,0.3)] rounded-xl p-2 mt-5'>
        <h2 className="text-center bg-yellow-400 rounded-xl m-3 font-medium py-2 text-gray-600">
          {question.title}
        </h2>
        {question.answers && question.answers.length > 0 &&
          question.answers.map(answer => (
            <section className="m-3 mt-5" key={answer.id}>  
              <h2 className="font-medium mb-2 -mt-2">{answer.title}</h2>
              <p className="font-thin">{answer.text}</p>
              <div className="flex items-center mt-2">
                <div className='flex-col items-center justify-center w-10'>
                  <AddLikeBtn answer={answer} slug={slug} />
                </div>
              </div>
              <hr className='mt-4' />
            </section>))}
      </article>
    </div>
  )
}
