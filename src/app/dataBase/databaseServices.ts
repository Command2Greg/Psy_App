import { db } from '../../firebase';
import {
  DocumentData,
  doc,
  getDoc,
  DocumentSnapshot,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { User } from '../store/types';
// import { Answer } from '../store/types';

export const getDBQuestion = async (slug: string) => {
  try {
    const collection = doc(db, 'questions', slug);
    const document: DocumentSnapshot<DocumentData> = await getDoc(collection);
    const docData = document.data();
    return docData;
  } catch (error) {
    console.error('Error getting selected documents:', error);
    return null;
  }
};

export const updateDbAnswerLikes = async (answer: Answer, id: string) => {
  try {
    //TODO добавить поиск документа по слагу
    const collection = doc(db, 'questions', '1');
    const document: DocumentSnapshot<DocumentData> = await getDoc(collection);
    const docData = document.data();
    // const {collection, docData}: { collection: DocumentReference<DocumentData, DocumentData>, docData: Question  } = await getDBQuestion()!;
    if (docData) { //находим нужный answer из БД и заменяем его на полученный
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