import "../assets/styles/dorama.css";
import "../assets/styles/registro.css";


function Card({titulo, input}){

    return(

            <div className="atributos">
                <>
                <p  className="titulo">{titulo}
                <br/>
                <input type={input} className="inputs"></input>
                
                </p>
                </>
            </div>
    );
}

export default Card;