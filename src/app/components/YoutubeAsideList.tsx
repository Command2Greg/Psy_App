"use client";

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function YoutubeAsideList() {
    //Статика до возможности получить данные с firestore
    const videos = [
        "mfxQy5A_tHs",
        "mfxQy5A_tHs",
        "mfxQy5A_tHs",
        "mfxQy5A_tHs"
    ];

    const showVideos = videos.map((el, idx) =>
        <div key={idx}>
            <LiteYouTubeEmbed
                id={el}
                title={`Psyhology video ${idx + 1}`}
                noCookie={true}
            />
            {idx + 1 !== videos.length && <hr className="w-[85%] my-3 mx-auto" />}
        </div>);

    return (
        //Когда будет готов макет страницы вопросов, поменяйте w-[15%] на w-full
        <aside className="hidden lg:block max-w-[15%] py-3 px-4 rounded-xl shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)]">
            {showVideos}
        </aside>
    );
}