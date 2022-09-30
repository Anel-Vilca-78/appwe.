import "../assets/styles/sinopsis.css";
import vector1 from "../assets/imgs/vector1.png"
import vector2 from "../assets/imgs/vector2.png"

function Sinopsis(){
    return(
        <div className="Sinopsis">
            <img class name="vector1" src={vector1} alt="" className='vector1'/>
            <h6>Sinopsis</h6>
            <div className="infosinopsis">
                <p>En la época Goryeo, el rey Wang Yeo es manipulado vilmente por su consejero real que lo pone en contra del general Kim Shin traicionándolo y condenándolo a morir a él y toda su familia. Tras su muerte es convertido en un Goblin (duende, Dokkaebi) un ser inmortal en busca de venganza, pero pronto se da cuenta que fue castigado por derramar mucha sangre durante su vida pasada y es condenado a ver morir a todos sus seres queridos mientras el sigue vivo. Es entonces que va en busca de una salida, la única que le puede conceder la añorada muerte, la chica destinada a ser la "Novia del Ser Inmortal".</p>
            </div>
            <img name="vector2" src={vector2} alt="" className='vector2'/>
        </div>
    );
}

export default Sinopsis;