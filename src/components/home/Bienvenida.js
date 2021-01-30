import React,{useState} from 'react'
import styles from '../../styles/gridBienvenido.module.css'
export default function Bienvenida() {
    const [styleText,setStyleText]=useState({
        display:"None"
    })
    const readMore=()=>{
        if(styleText.display==="None"){
            setStyleText({...styleText,display:"inline"})
        }else{
            setStyleText({...styleText,display:"None"})
        }        

    }
    return (
        <div className={styles.mainGrid}>
            <div className={styles.item1}>
                <h1 className="text-center">Welcome</h1>
            </div>
            <div className={styles.item2}>
                <img className={styles.img} src='https://saboryestilo.com.mx/wp-content/uploads/2020/03/recetas-salsas-para-carne-asada-1200x720.jpg'
                    alt="Sauces" ></img>
            </div>

            <div className={styles.item3}>
                <p className="text-justify">Cupidatat proident laborum id veniam minim exercitation adipisicing exercitation. Magna non esse pariatur duis do cillum qui fugiat. Pariatur ipsum ipsum culpa mollit ut occaecat. Voluptate consequat amet tempor elit fugiat reprehenderit veniam officia quis adipisicing veniam.

                Proident irure do laborum ullamco laboris. Velit elit laborum elit et ea ut tempor. Deserunt officia esse est ullamco velit dolore. Non magna reprehenderit cupidatat ipsum incididunt voluptate ullamco ipsum laborum officia labore consectetur minim. Culpa dolore nostrud aute elit fugiat pariatur dolore do do enim anim. Deserunt culpa duis reprehenderit sit ex velit ipsum irure nisi sunt dolor non ad. Voluptate do aliquip ea consequat esse voluptate et deserunt aliquip commodo amet duis laborum eiusmod.

                Adipisicing aliqua cillum sit qui magna deserunt ex eiusmod voluptate duis reprehenderit. Dolore veniam esse anim ea nisi incididunt nulla non esse cupidatat qui. Duis laboris labore nostrud do. Et enim est occaecat fugiat consectetur non ut et consequat consequat excepteur consectetur. Dolore eu laborum reprehenderit mollit eu dolore laborum laboris ullamco non anim anim.

                Ut labore do officia Lorem irure exercitation sunt laborum enim do nostrud et nulla. Id consequat cupidatat elit veniam enim occaecat proident exercitation duis velit exercitation cillum fugiat do. Duis ipsum laborum ea quis excepteur non et ex.

                Voluptate anim culpa duis proident velit nulla laborum laboris mollit reprehenderit esse minim. Adipisicing velit proident quis excepteur ad. Officia amet eiusmod anim adipisicing ad minim. Deserunt tempor et duis non consequat consectetur adipisicing irure sint fugiat.
                <span className={styles.dots}>...</span>
                <span style={styleText}>
                    Est et dolor sint laborum mollit est qui aliqua esse. Consequat dolore elit est exercitation veniam in. Est veniam deserunt quis sunt sint dolore in magna ea occaecat. Culpa pariatur occaecat incididunt id aliquip ad consectetur adipisicing. In eiusmod id deserunt do minim culpa. Commodo aute veniam elit aute quis ad ut.

Eiusmod elit ut ipsum exercitation sint velit esse. Cillum esse laborum elit consequat culpa deserunt cillum. Est ex laboris ea laborum exercitation nostrud voluptate Lorem duis sit id aliqua culpa tempor. Veniam aute eiusmod mollit reprehenderit mollit consequat sunt eiusmod adipisicing incididunt cillum veniam. Fugiat ex esse ad elit qui culpa ullamco. Ex laboris sint nulla voluptate.

Aliqua elit enim minim mollit ipsum irure do ullamco sint fugiat et adipisicing. Duis quis dolor deserunt consequat reprehenderit veniam et eiusmod esse. Exercitation consectetur et pariatur ad incididunt tempor. Irure elit quis quis laborum dolore ullamco. Esse minim reprehenderit duis dolor tempor non cillum id elit. Lorem eu ut aliqua sit pariatur adipisicing. Non non amet nulla sunt incididunt irure aliqua amet laboris.

Aute aliqua nulla minim fugiat non ea anim adipisicing enim commodo reprehenderit ut dolor minim. Ea consequat do esse nisi commodo labore nulla aute incididunt et officia deserunt. Eiusmod laborum aute dolor eiusmod. Nulla in qui reprehenderit id proident. Eiusmod dolor cillum consectetur ipsum sunt ut mollit fugiat eu. Reprehenderit culpa consequat esse qui. Nisi incididunt reprehenderit reprehenderit consectetur exercitation sit reprehenderit sunt nulla occaecat.

Velit occaecat esse nisi irure culpa ad ullamco ad laboris ipsum cillum tempor dolore eiusmod. Lorem nostrud nostrud cillum magna deserunt ipsum duis mollit do ad laboris amet. Anim voluptate anim ad voluptate culpa in do sit culpa velit proident.

Quis adipisicing ipsum magna sit ut in ut ut. Minim ut nulla sunt non aliqua. Dolor do laborum eu cillum est et ut anim minim aliqua. Mollit exercitation officia ea eiusmod amet veniam reprehenderit sint ipsum anim minim cupidatat dolor.

Irure adipisicing pariatur fugiat sit commodo esse irure. Excepteur voluptate cupidatat sit amet. Mollit dolore commodo laboris mollit labore mollit elit sunt cillum ad. Sit exercitation consectetur nostrud est sit non aliqua enim ipsum sunt cillum ut cillum reprehenderit. Do aliqua commodo veniam aliquip laborum nisi. Ut non esse fugiat magna sunt excepteur. Fugiat consequat ullamco nulla labore.

Amet in labore consequat reprehenderit anim qui anim est eiusmod irure laborum culpa dolor. Consequat dolore cupidatat occaecat id aliquip eu sunt. Cupidatat ut excepteur mollit officia et anim occaecat aute tempor commodo. Do enim minim ea sunt incididunt id proident aute ipsum dolore esse aliqua eu commodo. Incididunt aliquip enim est dolore veniam. Cillum esse eiusmod deserunt minim eu sunt est ad nisi mollit qui esse. Magna sit irure fugiat consequat id commodo duis voluptate.

Enim reprehenderit id voluptate culpa nostrud aliqua ullamco nostrud. Tempor magna cillum ex nulla. Veniam ad id amet dolore duis magna commodo amet dolor. Aliquip duis eiusmod ad aliquip reprehenderit sit elit nisi minim commodo.

Magna aliqua Lorem nulla nulla elit nostrud laborum velit veniam incididunt do dolor. Labore eiusmod qui magna occaecat sit. Eu deserunt in minim irure nulla cillum. Non Lorem veniam nulla amet esse tempor est ullamco. Ea velit velit dolore ad proident minim. Aliquip cupidatat ad duis sunt aliquip eu irure duis culpa exercitation cupidatat voluptate deserunt. Consectetur consequat irure occaecat voluptate labore anim ea consequat velit aute magna magna aliqua qui.
                </span>
                </p>

                
                <button className="btn btn-primary" onClick={readMore}>
                {
                    styleText.display==="None" ? "Read More": "Read Less" 
                }
                </button>

            </div>
            
        </div>
    )
}
