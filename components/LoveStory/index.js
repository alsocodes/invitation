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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Melamar dan Bertunangan',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Menentukan Hari Pernikahan',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                    <CarouselControl directionText="Prev" direction="prev" onClickHandler={previousButton} />
                    <CarouselControl directionText="Next" direction="next" onClickHandler={nextButton} />
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
