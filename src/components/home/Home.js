import React from 'react'
import {Link} from 'react-router-dom';
import Footer from '../Footer'
import Bienvenida from './Bienvenida'
import ProductosPrincipales from './ProductosPrincipales'
import Contacto from '../Contacto/Contacto'

export default function Home() {
    return (
       <div >
           
           <div>
               
            <Bienvenida/>
           </div>
           <div>
           <hr />
           <ProductosPrincipales consulta="3" tittle="Most Visited Products"/>
           <div className="col text-center">
            <Link className="btn btn-success text-center"
            to="/productos"
            >Show Me All</Link>
            </div>
           </div>

           <div id="contacto">
           <hr />
           <Contacto />
           </div>
           
           
           
           <Footer></Footer>
          
           
       </div>
    )
}
