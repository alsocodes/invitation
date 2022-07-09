import CoverUndangan from '../components/CoverUndangan';
import Gallery from '../components/Gallery';
import GettingMarried from '../components/GettingMarried';
import LayoutUndangan from '../components/LayoutUndangan';
import LoveStory from '../components/LoveStory';
import SaveTheDate from '../components/SaveTheDate';
import { useEffect, useRef, useState } from 'react';
import Map from '../components/Map';

const Index = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [opened, setOpened] = useState(false);

    const player = useRef(null);
    const gettingMaried = useRef(null);
    console.log(player);

    const togglePlay = () => {
        setIsPlaying(!player.current.paused);
        if (player.current.paused) {
            player.current.play();
        } else {
            player.current.pause();
        }
    };

    useEffect(() => {
        player.current.play();
    }, [player]);

    const bukaUndangan = () => {
        setIsPlaying(!player.current.paused);
        gettingMaried.current.scrollIntoView();
        setOpened(true);
        player.current.play();
    };

    useEffect(() => {
        if (!opened) document.body.classList.add('fixed-cover');
        else document.body.classList.remove('fixed-cover');
    }, [opened]);

    useEffect(() => {
        // window.scrollTo(0, 0);
        window.history.scrollRestoration = 'manual';
    }, []);

    return (
        <LayoutUndangan pageTitle={`Mega & Erik Wedding`} opened={opened}>
            <div className="toggle-play-button btn btn-info" onClick={() => togglePlay()}>
                {isPlaying ? <i className="bi bi-play"></i> : <i className="bi bi-pause"></i>}
            </div>
            <div className="audio-wrapper">
                <audio ref={player} loop controls src="/assets/music-002.mp3" type="audio/mpeg"></audio>
            </div>

            <CoverUndangan opened={opened} setOpened={setOpened} bukaUndangan={() => bukaUndangan()} />
            <div ref={gettingMaried}></div>
            <GettingMarried />
            <SaveTheDate />
            <LoveStory />
            <Gallery />
            <Map />
        </LayoutUndangan>
    );
};

export default Index;
