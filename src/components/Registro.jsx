import Card from '../components/Card'
import "../assets/styles/registro.css";

function Registro() {

    const registro = [
        {
          titulo:"Nombre:",
          input: "texto"
        },
        {
          titulo:"Apellido materno:",
          input: "texto"
        },
        {
          titulo:"Apellido paterno:",
          input: "texto"
        },
        {
          titulo: "Edad:",
          input: "number"
        },
        {
          titulo:"Fecha de nacimiento",
          input: "date"
        },
        {
          titulo:"Número de teléfono:",
          input: "tel",
        },
        {
          titulo:"Correo electrónico:",
          input: "email",
        },
        {
          titulo:"Contraseña:",
          input: "password",
        },
    ]
    return ( 

      <>
        <h1 className='TituloRegistro'>꧁----------REGISTRATE----------꧂</h1>
        {registro.map((registro) => {
          return <Card titulo={registro.titulo} input={registro.input}/>;
        })}
        <input type="button" value="Registrar ❀" className='botonsito'></input>
      </>

     );
}

export default Registro;
