import React,{useEffect,useState} from 'react'
import ProductCard from '../productos/ProductCard'
import axios from "axios";
import styles from '../../styles/containers.module.css'
import options from '../../callApi'

export default function ProductosPrincipales(props) {
    
      const [productData,setProductData]=useState([])
        
    const mount =()=>{
        options.params.number=props.consulta
        
        axios.request(options).then(function (response) {
            setProductData(response.data.menuItems)            
            
        }).catch(function (error) {
            
        })
       } 
    
    useEffect(
        mount
    ,[])
    const listItems=productData.map(
        (item)=>{
            return( 
                <div  key={item.id} className={styles.cardBlocks}>
                <ProductCard  item={item}/>
                </div>              
             
             )
        }
    )
    return (
        <div >
            <h1 className="text-center mt-4 mb-4">{props.tittle}</h1>
            <div className={styles.totalContainer}>            
            {
                listItems
            }
            
            </div>
            
            
        </div>
        
    )
}
