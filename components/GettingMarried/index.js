import Image from 'next/image';
import styles from './GettingMarried.module.css';
const GettingMarried = () => {
    return (
        <section id="cover" className={`${styles.getting_merried} d-flex align-items-center`}>
            <img src={'/assets/flower-0003.png'} className={`${styles.img_decor_top} aos-init aos-animate`} data-aos="fade" data-aos-delay="300" data-aos-duration="500"  />
            <div className={styles.getting_merried_decor_bottom} data-aos="fade" data-aos-delay="300" data-aos-duration="500">
                <Image alt="decor-bottm-getting-married" src={'/assets/flower-0004.png'} layout="fill" />
            </div>
            <div className="container">
                <div className={styles.section_title} data-aos="fade-down">We are getting married</div>
                <div className="text-center mb-4" data-aos="fade-down">
                    <h4 className="text-italic">Assalamualaikum Wr.Wb.</h4>
                    <p>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan :</p>
                </div>
                <div className="row justify-content-md-center" data-aos="fade-up">
                    <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                        <div>
                            <div className={`${styles.bride_groom_thumb}`}>
                                <Image alt="bride-thumb" src={'/assets/bride_thumb.jpg'} layout="fill" />
                            </div>
                            <div className={styles.bride_groom_name}>Mega Kusuma Dewi</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-1 d-flex justify-content-center align-items-center">
                        <div className={styles.dan}>&</div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                        <div>
                            <div className={`${styles.bride_groom_thumb}`}>
                                <Image alt="bride-thumb" src={'/assets/groom_thumb.jpg'} layout="fill" />
                            </div>
                            <div className={styles.bride_groom_name}>Widya Erik Purnomo</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default GettingMarried;
