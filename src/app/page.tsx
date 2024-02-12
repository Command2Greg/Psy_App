'use client'
import { useEffect } from 'react';
import applySpec from 'ramda/es/applySpec';
import fastDeepEqual from 'fast-deep-equal';
import { selectFromAppData } from '@/app/store/selectors/data';
import { useAppDispatch, useAppSelector } from './hooks'

type Selector = {
  psyhologists: any[],
};

const selector = applySpec<Selector>({
  psyhologists: selectFromAppData('psyhologists', []),
});
export default function Home() {
  const { psyhologists } = useAppSelector<Selector>(selector, fastDeepEqual);
  console.log(psyhologists)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'actionType/getAllPsyhologists' });
  }, [dispatch]);

  return (
    <p>Главная страница</p>
  )
}
