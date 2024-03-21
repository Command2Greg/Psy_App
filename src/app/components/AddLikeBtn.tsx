'use client'
import Image from 'next/image'
import like from '../../../public/like.svg'
import { updateDbAnswerLikes } from '../dataBase/databaseServices';
import { Answer } from "../store/types";
import { useState } from 'react';

export default function AddLikeBtn({ answer }: { answer: Answer }) {
    const [likes, setLikes] = useState(answer.likes.length);

    const addLike = (id: string) => {
        const newSlug = 'newSlug1';
        const index = answer.likes.findIndex((item: string) => item === newSlug);
        if (index !== -1) {
            answer.likes.splice(index, 1);
            updateDbAnswerLikes(answer, id);
            setLikes(likes - 1);
        } else {
            answer.likes.push(newSlug);
            updateDbAnswerLikes(answer, id);
            setLikes(likes + 1);
        }
    }
    return (
        <button onClick={() => addLike(answer.id)}>
            <Image src={like} alt='like'/>
        </button>
    )
};