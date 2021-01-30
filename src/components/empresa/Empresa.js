import React from 'react'
import Footer from '../Footer'
import CardEmpresa from './CardEmpresa'
import styles from '../../styles/gridEmpresa.module.css'
function Empresa() {
    return (
        <div>
            <h1 className="text-center mt-4">Empresa</h1>
        <div className={styles.mainGrid}>
            <div className={styles.item1}>
            <CardEmpresa tittle="¿Como lo hacemos?"></CardEmpresa>
            </div>
            <div className={styles.item2}>
            <CardEmpresa tittle="¿Quienes Somos?"></CardEmpresa>
            </div>
            <div className={styles.item3}>
            <CardEmpresa tittle="¿Donde Estamos?"></CardEmpresa>
            </div>
           
           
            
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Empresa
