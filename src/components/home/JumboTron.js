import React from 'react'
import styles from '../../styles/images.module.css';

function JumboTron() {
    return (
        <div className={styles.container}>
            <div id="carouselImages" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div >
                        <div className="carousel-item active">

                            <img className={styles.img} src="https://aws.traveler.es/prod/designs/v1/assets/2000x1333/166659.jpg"
                                alt="First slide"  />
                        </div>
                        <div className="carousel-item">
                            <img className={styles.img} src="https://static8.depositphotos.com/1011643/1067/i/600/depositphotos_10674407-stock-photo-professional-cooks.jpg"
                                alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className={styles.img} src="https://www.actiontravel.com.ar/blog_turismo/wp-content/uploads/2020/05/empanadas.jpg"
                                alt="Third slide"  />
                        </div>

                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselImages" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselImages" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default JumboTron
