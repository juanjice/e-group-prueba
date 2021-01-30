import React from 'react'
import styles from '../styles/footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.mainGrid}>
            <div className={styles.item1}>
                <h3 className="text-center text-light bg-dark mt-2">Find Us</h3>
            <iframe 
            className={styles.map}
            title=" Ubication"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15904.878034806423!2d-74.0235154!3d4.7318937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d375b1ab8214ba4!2sEgroup%20Colombia!5e0!3m2!1ses-419!2sco!4v1611959975435!5m2!1ses-419!2sco"  
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
              ></iframe>
            </div>

            <div className={styles.item2}>
            <h3 className="text-center text-light bg-dark mt-2 ">Newsletter</h3>
            <input className="w-100"></input>
            </div>
        </footer>
    )
}
