import Image from 'next/image';
import styles from './Gallery.module.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FsLightbox from 'fslightbox-react';

const Gallery = () => {
    const [largeImages, setLargeImages] = useState([])
    const [types, setTypes] = useState([])
    const [captions, setCaptions] = useState([])
    const [galIndex, setGalIndex] = useState(0)
    const [showLightbox, setShowLightbox] = useState(false);
    
    const galleries = [
        {
            title: 'Gallery 001',
            image: '/assets/gal-001.webp',
        },
        {
            title: 'Gallery 002',
            image: '/assets/gal-002.webp',
        },
        {
            title: 'Gallery 003',
            image: '/assets/gal-003.webp',
        },
        {
            title: 'Gallery 004',
            image: '/assets/gal-004.webp',
        },
        {
            title: 'Gallery 005',
            image: '/assets/gal-005.webp',
        },
        {
            title: 'Gallery 006',
            image: '/assets/gal-006.webp',
        }
    ]
    useEffect(() => {
        setLargeImages(galleries.map(item => item.image,[]));
        setTypes(galleries.map(item=> null,[]));
        setCaptions(galleries.map(item => item.title,[]));
    }, [ setLargeImages, setTypes, setCaptions])
    


    const openLightbox = (index) => {
        setShowLightbox(!showLightbox)
        setGalIndex(index)
    }
    
    return (
        <section id="our_love_story" className={`${styles.gallery} portfolio d-flex align-items-center`}>
            <FsLightbox
                type="image"
                types={types}
                captions={captions}
                sourceIndex={galIndex}
                toggler={showLightbox}
                sources={largeImages}
                initialAnimation="scale-in-long"
                slideChangeAnimation="scale-in"
            />
            <div className={`${styles.container_gallery}`}>
                <div className="row gy-2 gx-2 row-cols-3 portfolio-container galleries-ku" data-aos="fade-up" data-aos-delay="200">
                    {galleries?.map((item, key) => {
                        return (
                            <div
                                onClick={() => openLightbox(key)}
                                className="col portfolio-item filter-app" key={key}>
                                <div className="portfolio-wrap">
                                    <div className="img-fluid">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            layout='fill'
                                            objectFit='cover' />
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
            
        </section>
    );
};
export default Gallery;
