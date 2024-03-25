import {
  DocumentData,
  getDoc,
  DocumentSnapshot,
  updateDoc,
  DocumentReference,
  setDoc,
} from "firebase/firestore";
// import { Answer } from '../store/types';

export const getDBQuestion = async (collection: DocumentReference<DocumentData, DocumentData>) => {
  try {
    const document: DocumentSnapshot<DocumentData> = await getDoc(collection);
    const docData = document.data();
    return docData;
  } catch (error) {
    console.error('Error getting selected documents:', error);
    return null;
  }
};

export const updateDbAnswerLikes = async (
  collection: DocumentReference<DocumentData, DocumentData>,
  answer: Answer,
  id: string
) => {
  try {
    const docData = await getDBQuestion(collection);
    if (docData) {
      //находим нужный answer из БД и заменяем его на полученный
      const updatedAnswers = [...docData.answers];
      const updatedAnswerIndex = docData.answers.findIndex((answer: Answer) => answer.id === id);

      if (updatedAnswerIndex !== -1) {
        updatedAnswers[updatedAnswerIndex] = answer;
        updateDoc(collection, { answers: updatedAnswers });
      }
    }
  } catch (error) {
    console.error('Error updating document:', error);
  }
};

export const addDbUser = async (userData: User) => {
  try {
    const collection = doc(db, 'users', `${userData.id}`);
    const document: DocumentSnapshot<DocumentData> = await getDoc(collection);
    const docData = document.data();
    if (!docData) {
      setDoc(collection, {
        articles: userData.articles,
        desc: userData.desc,
        favourite: userData.favourite,
        mail: userData.mail,
        name: userData.name,
        photo: userData.photo,
        role: userData.role,
        slug: userData.slug,
        video: userData.video,
      });
    }
  } catch (error) {
    console.error('Error add user to firestore:', error);
  }
};