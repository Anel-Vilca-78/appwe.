import Dorama from '../components/Dorama'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from './Layout';
import Registro from '../components/Registro';

function App(){
    return(
        /*(Se puede resolver con un fragment para mandar alv el div de más)
        <div>
            <Header></Header>
            <Contacto></Contacto>
            <Footer></Footer>
        </div>
         */
        <>  <Layout><Registro></Registro></Layout>
        </>
        
    ); 
}

export default App;