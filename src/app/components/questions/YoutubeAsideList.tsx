export default function YoutubeAsideList() {
    //Статика до возможности получить данные с firestore
    const videos = [
        "https://www.youtube.com/embed/n1Y2VfJC6Ec?si=2pDI9BUxjgOwI7gX",
        "https://www.youtube.com/embed/n1Y2VfJC6Ec?si=2pDI9BUxjgOwI7gX",
        "https://www.youtube.com/embed/n1Y2VfJC6Ec?si=2pDI9BUxjgOwI7gX",
        "https://www.youtube.com/embed/n1Y2VfJC6Ec?si=2pDI9BUxjgOwI7gX"
    ];

    const showVideos = videos.map((el, idx) =>
        <>
            <iframe
                className="w-full aspect-video bg-black"
                src={el}
                allow="accelerometer; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
            />
            {idx + 1 !== videos.length && <hr className="w-[85%] my-3 mx-auto" />}
        </>);

    return (
        //Когда будет готов макет страницы вопросов, поменяйте w-[15%] на w-full
        <aside className="w-[15%] py-3 px-4 rounded-xl shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)]">
            {showVideos}
        </aside>
    );
}
