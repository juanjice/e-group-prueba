import NavigationBar from './components/NavigationBar'
import Home from './components/home/Home'
import Productos from './components/productos/Productos'
import Empresa from './components/empresa/Empresa'
import styles from './styles/containers.module.css'
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import JumboTron from './components/home/JumboTron'

function App() {
  return (
    <BrowserRouter >
            
                <NavigationBar/>     
                <div className="container">
           <JumboTron></JumboTron>           
           </div>  
        {
        <div className={styles.container}>
            <Switch>                
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/productos" component={Productos}></Route>
                <Route exact path="/empresa" component={Empresa}></Route>
               
            </Switch>
        </div>      
        }   
        
          
        </BrowserRouter>
  );
}

export default App;
