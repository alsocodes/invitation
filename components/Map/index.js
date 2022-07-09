import Image from 'next/image';
import styles from './GettingMarried.module.css';
const Map = () => {
    return (
        <section id="cover" className={`${styles.getting_merried} d-flex align-items-center`}>
            <img
                src={'/assets/flower-0003.png'}
                className={`${styles.img_decor_top} aos-init aos-animate`}
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="500"
            />
            <div
                className={styles.getting_merried_decor_bottom}
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="500"
            >
                <Image alt="decor-bottm-getting-married" src={'/assets/flower-0004.png'} layout="fill" />
            </div>
            <div className="container">
                <div className={`${styles.section_title}`} data-aos="fade-down">
                    <div>Map Location</div>
                    {/* {'   '}
                    <button className="btn btn-info btn-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        Open in GoogleMap
                    </button> */}
                </div>
                <div style={{ border: '1px solid #ddd', padding: '0px', borderRadius: '10px' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.192934464808!2d112.77158160497281!3d-7.2248500319422355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f852cfd15471%3A0x523113ba8b735331!2sJl.%20Kedinding%20Tengah%20Gg.%20Nanas%2C%20Tanah%20Kali%20Kedinding%2C%20Kec.%20Kenjeran%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060129!5e0!3m2!1sen!2sid!4v1657381140364!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};
export default Map;
