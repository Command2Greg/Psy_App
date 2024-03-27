"use client";

import { Modal } from "react-responsive-modal";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-responsive-modal/styles.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function ModalYoutubeVideo({
    currentVideo,
    isOpen,
    setIsOpen,
}: {
    currentVideo: string,
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}) {

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            showCloseIcon={false}
            center
        >
            <div className="w-[760px]">
                <LiteYouTubeEmbed
                    id={currentVideo}
                    title={`Psyhology video ${currentVideo}`}
                    noCookie={true}
                    poster="maxresdefault"
                />
            </div>
        </Modal>
    );
}