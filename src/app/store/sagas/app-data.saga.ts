import { db } from "@/firebase";
import {
  QuerySnapshot,
  DocumentData,
  collection,
  getDocs,
} from "firebase/firestore";
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getAllPsyhologists
} from '../slices/app-data.slice';

function* handleGetAllPsyhologists() {
  try {
    const querySnapshot: QuerySnapshot<DocumentData> = yield call(getDocs,collection(db, 'psyhologists'));
    const psyhologists: any[] = [];
    querySnapshot.forEach((item) => {
      psyhologists.push({
        id: item.data().id,
        text: item.data().text,
      });
    });
    yield put(getAllPsyhologists(psyhologists));
  } catch (error) {
    console.error('Error getting documents:', error);
  }
}

export function* appDataSaga() {
  yield takeLatest('actionType/getAllPsyhologists', handleGetAllPsyhologists);
}
