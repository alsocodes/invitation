import React, { useEffect } from 'react';
import AOS from 'aos';
import styles from './CoverUndangan.module.css';
import Image from 'next/image';

const CoverUndangan = ({opened, bukaUndangan}) => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false
        });
    }, []);

    // console.log('axx',opened, setOpened)
    return (
        <section id="cover" className={`${styles.cover} d-flex align-items-center`}>
            <div className="container">
                <div className={styles.cover_decor_top} data-aos="fade-down" data-aos-delay="500">
                    <Image
                        className={styles.cover_decor_top_img}
                        alt="decor-top"
                        src={'/assets/flower-0001.png'}
                        layout="fill"
                    />
                </div>
                <div className={styles.cover_decor_bottom}>
                    <Image
                        className={styles.cover_decor_top_img}
                        alt="decor-top"
                        src={'/assets/flower-0002.png'}
                        layout="fill"
                    />
                </div>
                <div className={styles.the_wedding_of} data-aos="fade-up">The Wedding Of</div>
                <div className={styles.couple_name} data-aos="zoom-in-up">Mega & Erik</div>
                <div className={styles.nikah_date} data-aos="fade-up">17 . 07 . 2022</div>
                <div className="text-center mt-4" data-aos="flip-up" data-aos-delay="500">
                    <div>Kepada Yth Bapak/Ibu/Saudara/i:</div>
                    <div className={styles.invited_name}>Ir. Joko Widodo</div>
                    <div className={styles.invited_info}>Presiden Republik Indonesia</div>
                    <div className="d-flex justify-content-center mt-4">
                        {!opened && <button className={`btn ${styles.btn_open}`} onClick={() => bukaUndangan() }>Buka Undangan</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverUndangan;
