import React from 'react'
import styles from '../../styles/gridBienvenido.module.css'
export default function Contacto() {
    return (
        <div className={styles.mainGrid}>
            <div className={styles.item1}>
                <h1 className="text-center"> Contact</h1>

            </div>

            <div  className={styles.item2}>
                <p>Deserunt ullamco deserunt nulla proident consectetur adipisicing Lorem dolor. Tempor laboris exercitation et anim consequat deserunt esse. Anim voluptate voluptate reprehenderit laborum minim magna nisi ut laborum aliquip incididunt est esse ullamco. Dolore aliquip cupidatat irure eu adipisicing.

                Ex sit amet sint dolor exercitation occaecat reprehenderit aliquip fugiat dolore sunt. Esse pariatur nisi adipisicing magna id magna eu nulla. Enim sunt laborum enim minim eiusmod voluptate dolor do cupidatat ex fugiat.

                Qui occaecat laborum sint aute. Cillum laboris commodo sint reprehenderit. Consequat consectetur fugiat sint eiusmod dolore aute. Est non ex sint ut tempor ea irure voluptate dolor fugiat nulla.</p>
            </div>
            <div className={styles.item3}>

            <form>
            <div className="form-group">
                    <label >Names: </label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Name" />                    
                </div>
                <div className="form-group">
                    <label >Email:</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Telephone:</label>
                    <input type="number" className="form-control"  placeholder="Enter Phone" />
                </div>
                <div className="form-group">
                    <label >Commentary:</label>
                    <textarea type="text" className="form-control"  placeholder="" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            <hr></hr>
            <br></br>
            




        </div>
    )
}
