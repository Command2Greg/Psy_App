"use client";

import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import ModalYoutubeVideo from "./ModalYoutubeVideo";

export default function YoutubeAsideList() {
    //Статика до возможности получить данные с firestore
    const videosArr = [
        "uRDy4M5jI-g",
        "uRDy4M5jI-g",
        "uRDy4M5jI-g",
        "uRDy4M5jI-g"
    ];

    //Когда будет больше 4 видео и будет рейтинг видео, тут будет сортировка videosArr.sort(func).slice(0, 4)
    const sortedVideosArr = videosArr.slice(0, 4);
    const [currentVideo, setCurrentVideo] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSetVideo = (video: string) => {
        setCurrentVideo(video);
        setIsOpen(true);
    }

    const showVideos = sortedVideosArr.map((video, idx) =>
        <div className="relative" key={idx}>
            <div
                className="size-full absolute z-10 cursor-pointer"
                onClick={() => handleSetVideo(video)}
            />
            <LiteYouTubeEmbed
                id={video}
                title={`Psyhology video ${video}`}
                noCookie={true}
            />
            {idx + 1 !== sortedVideosArr.length && <hr className="w-[85%] my-3 mx-auto" />}
        </div>);

    return (
        <>
            {currentVideo && isOpen && <ModalYoutubeVideo currentVideo={currentVideo} isOpen={isOpen} setIsOpen={setIsOpen} />}
            <aside className="hidden lg:block w-full max-w-[300px] py-3 px-4 rounded-xl shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)]">
                {showVideos}
            </aside>
        </>
    );
}