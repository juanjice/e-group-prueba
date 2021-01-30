import React from 'react'
import Footer from '../Footer'
import ProductosPrincipales from '../home/ProductosPrincipales'

function Productos() {
    return (
        <div>
            
            <hr />
           <ProductosPrincipales consulta="20" tittle="All products" />
            <Footer></Footer>
        </div>
    )
}

export default Productos
