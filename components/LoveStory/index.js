import Image from 'next/image';
import styles from './LoveStory.module.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselControl, Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

const LoveStory = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const loveStories = [
        {
            title: 'Pertama Keteamu',
            content:
                'Pertama kali bertemu pada tahun 2020 saat itu kita masih belum mempunyai perasaan saling suka maupun ketertarikan satu sama lain, setalah saling mengenal kami memutuskan untuk ke jenjang yang lebih serius dengan harapan memenuhi syariat dalam islam .',
        },
        {
            title: 'Melamar dan Bertunangan',
            content:
                'Pada bulan februari 2022 secara resmi kami melakukan resepsi pertunangan yang dihadiri segenap keluarga, dan Alhamulillah niat kami tersebut terlaksana engan sangat baik.',
        },
        {
            title: 'Menentukan Hari Pernikahan',
            content:
                'Pada saat acara lamaran masih berlangsung yang di hadiri segenap keluarga, telah menentukan tanggal pernikahan kita dan telah  sepakati oleh kedua keluarga mempelai pria dan wanita yang akan di adakan pada tanggal 17 juli 2022.',
        },
    ];

    // State for Animation
    const [animating, setAnimating] = useState(false);

    // Items array length
    const itemLength = loveStories?.length - 1;

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    // Carousel Item Data
    const carouselItemData = loveStories?.map((item, key) => {
        return (
            <CarouselItem key={key} onExited={() => setAnimating(false)} onExiting={() => setAnimating(true)}>
                <h3 className="text-center">{item.title}</h3>
                <p>{item.content}</p>
            </CarouselItem>
        );
    });
    return (
        <section id="our_love_story" className={`${styles.our_love_story} d-flex align-items-center`}>
            <div
                className={styles.our_love_story_decor_left}
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="600"
            >
                <Image alt="decor-left-our-story" src={'/assets/flower-0007.png'} layout="fill" />
            </div>
            <div
                className={styles.our_love_story_decor_right}
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="600"
            >
                <Image alt="decor-left-our-story" src={'/assets/flower-0008.png'} layout="fill" />
            </div>
            <div className={`${styles.love_story_container} container`}>
                <div className={styles.section_title} data-aos="fade-down">
                    Our Love Story
                </div>

                <Carousel previous={previousButton} next={nextButton} activeIndex={activeIndex} data-aos="fade-up">
                    <CarouselIndicators
                        items={loveStories}
                        activeIndex={activeIndex}
                        onClickHandler={(newIndex) => {
                            if (animating) return;
                            setActiveIndex(newIndex);
                        }}
                    />
                    {carouselItemData}
                    {/* <CarouselControl directionText="Prev" direction="prev" onClickHandler={previousButton} />
                    <CarouselControl directionText="Next" direction="next" onClickHandler={nextButton} /> */}
                </Carousel>
                <div className="text-center mb-10" style={{ marginTop: '40px' }} data-aos="fade-up">
                    <p className="p-2">
                        <i>
                            Mahasuci (Allah) yang telah menciptakan semuanya berpasang-pasangan, baik dari apa yang
                            ditumbuhkan oleh bumi dan dari diri mereka sendiri, maupun dari apa yang tidak mereka
                            ketahui.
                        </i>
                        <br />
                        <i>QS. Yasin:36</i>
                    </p>
                </div>
            </div>
        </section>
    );
};
export default LoveStory;
