// 'use client'

// import { useState } from 'react';
// import Modal from 'react-modal';
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

// export default function YoutubeAsideList() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState("");

//   const openModal = (videoId: string) => {
//     setSelectedVideo(videoId);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedVideo("");
//   };

//   const videos = [
//     "mfxQy5A_tHs",
//     "mfxQy5A_tHs",
//     "mfxQy5A_tHs",
//     "mfxQy5A_tHs"
//   ];

//   const showVideos = videos.map((el, idx) =>
//     <div key={idx} onClick={() => openModal(el)}>
//       <LiteYouTubeEmbed
//         id={el}
//         title={`Psyhology video ${idx + 1}`}
//         noCookie={true}
//       />
//       {idx + 1 !== videos.length && <hr className="w-[85%] my-3 mx-auto" />}
//     </div>);

//   return (
//     <>{
//       isOpen ?
//         <Modal
//           isOpen={isOpen}
//           onRequestClose={closeModal}
//           contentLabel="Video Modal"
//           ariaHideApp={false}
//         >
//           <button onClick={closeModal}>Close Modal</button>
//           <LiteYouTubeEmbed
//             id={selectedVideo}
//             title="Modal Video"
//             noCookie={true}
//           />
//         </Modal>
//         :
//         <aside className="hidden lg:block max-w-[15%] py-3 px-4 rounded-xl shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)]">
//           {showVideos}
//         </aside>
//     }
//     </>
//   );
// }



export default function Home() {
  return (
    <div>Home</div>
  )
}
