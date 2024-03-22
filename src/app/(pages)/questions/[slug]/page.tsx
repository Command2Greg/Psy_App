
import { getDBQuestion } from '@/app/dataBase/databaseServices';
import { Question } from '@/app/store/types';
import AddLikeBtn from '@/app/components/AddLikeBtn';

export default async function Question() {
  //TODO добавить получение слага
  let question = await getDBQuestion('1') as Question;
  const sortedAnswers = [...question.answers];
  sortedAnswers.sort((a, b) => {
    return b.likes.length - a.likes.length;
  });
  question = { ...question, answers: sortedAnswers };

  return (
    <div className="flex justify-center pb-6">
      <div />
      <article className='flex-col max-w-screen-sm shadow-[0_15px_10px_3px_rgba(0,0,0,0.3)] rounded-xl p-2'>
        <h2 className="text-center bg-yellow-400 rounded-xl m-3  font-medium py-2 text-gray-600" >
          {question.title}
        </h2>
        {question.answers && question.answers.length > 0 &&
          question.answers.map(answer => (
            <section className="m-3" key={answer.id}>
              <h2 className="font-medium mb-2 -mt-2">{answer.title}</h2>
              <p className="font-thin">{answer.text}</p>
              <div className="flex items-center mt-2">
                <div className='flex-col items-center justify-center w-3'>
                  <AddLikeBtn answer={answer} />
                  <p className='text-[13px] -mt-2'>{answer.likes.length}</p>
                </div>
              </div>
            </section>))}
      </article>
      <div />
    </div>
  )
}