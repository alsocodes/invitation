import Image from 'next/image';
import styles from './SaveTheDate.module.css';
const SaveTheDate = () => {
    return (
        <section id="save_the_date" className={`${styles.save_the_date} d-flex align-items-center`}>
            <div className={styles.save_the_date_decor_top} data-aos="fade-down" date-aos-delay="400" data-aos-duration="500">
                <Image alt="decor-bottm-getting-married" src={'/assets/flower-0005.png'} layout="fill" />
            </div>
            <div className={styles.save_the_date_decor_bottom}  data-aos="fade-up" date-aos-delay="400" data-aos-duration="500">
                <Image alt="decor-bottm-getting-married" src={'/assets/flower-0006.png'} layout="fill" />
            </div>
            <div className="container">
                <div className={styles.section_title} data-aos="fade-down">Save the date</div>

                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-5 text-center p-4 mb-4" data-aos="fade-right">
                        <div className="d-flex d-flex justify-content-center align-item-center mb-2">
                            <div className={`${styles.std_one} flex-fill`}>
                                Agustus
                                <br />
                                2022
                            </div>
                            <div className={`${styles.std_two} flex-fill`}>
                                <span className={styles.std_date}>17</span>Minggu
                            </div>
                            <div className={`${styles.std_three} flex-fill`}>
                                Masjid <br />
                                Alhidayah
                            </div>
                        </div>
                        <div className={styles.std_hours}>09:00-10.30 WIB</div>
                        <h4 className={styles.std_title}>Akad Nikah</h4>
                        <div className={styles.std_address}>Jl. Kenjeran 51, Tambak Wedi RT01 RW02 Surabaya</div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-sm-12 col-md-5 text-center  p-4 mb-4" data-aos="fade-left">
                        <div className="d-flex d-flex justify-content-center align-item-center mb-2">
                            <div className={`${styles.std_one} flex-fill`}>
                                Agustus
                                <br />
                                2022
                            </div>
                            <div className={`${styles.std_two} flex-fill`}>
                                <span className={styles.std_date}>17</span>Minggu
                            </div>
                            <div className={`${styles.std_three} flex-fill`}>
                                Rumah <br />
                                Mempelai Putri
                            </div>
                        </div>
                        <div className={styles.std_hours}>13:00-16.00 WIB</div>
                        <h4 className={styles.std_title}>Resepsi</h4>
                        <div className={styles.std_address}>Jl. Kali Seberang, Tambak Wedi RT01 RW02 Surabaya</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SaveTheDate;
